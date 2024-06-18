import asyncio
import json
import re

import aiohttp
from bs4 import BeautifulSoup

from sentiment_analyzer import analyze_sentiment
from department_categorizer import categorize_department

async def scrape_ndtv_archive(news_source: str, selected_date: str, source_url: str, max_articles_to_scrape: int) -> None:
    async with aiohttp.ClientSession() as session:
        async with session.get(source_url) as response:
            if response.status == 200:
                ndtv_soup = BeautifulSoup(await response.text(), "html.parser")
                article_links = ndtv_soup.find("div", id = "main-content")

                article_data = [
                    {
                        "id": index,
                        "source": news_source,
                        "publication_date": selected_date,
                        "link": link["href"],
                        "title": link.text.strip(),
                        "text": None,
                        "tone": None,
                        "government-body": None
                    }
                    for index, link in enumerate(article_links.find_all("a", href = True), start = 1)
                    if (
                        (domain_match := re.search(r'https?://(?:www\.)?([^/]+)', link["href"]))
                        and domain_match.group(1) == "ndtv.com" and "india-news" in link["href"]
                    )
                ][:max_articles_to_scrape]

                tasks = [
                    fetch_article_content(session, index, article, max_articles_to_scrape)
                    for index, article in enumerate(article_data, start = 1)
                ]
                await asyncio.gather(*tasks)

                with open(r'Frontend\src\english.json', "w", encoding = "utf-8") as json_file:
                    json.dump(article_data, json_file, ensure_ascii = False, indent = 4)
            else:
                print(f'[Error] Failed to retrieve data from {source_url}\nStatus code: {response.status}')


async def fetch_article_content(session: aiohttp.ClientSession, index: int, article: dict, max_articles_to_scrape: int) -> None:
    async with session.get(article["link"]) as response:
        article_soup = BeautifulSoup(await response.text(), "html.parser")
        article_body = article_soup.find("div", id = "ins_storybody")

        if article_body:
            raw_content = article_body.get_text(strip = True)
            processed_content = re.sub(r'[^\x20-\x7E]', " ", raw_content)

            article["text"] = " ".join(processed_content.split())
            article["tone"] = analyze_sentiment(article["text"])
            article["government-body"] = categorize_department(article["text"])

            print(f'[{index}/{max_articles_to_scrape}] {article["link"]}')
        else:
            print(f'[Error] Content not found for {article["link"]}')
