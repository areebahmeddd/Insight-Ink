import asyncio
import json
import re

import aiohttp
from bs4 import BeautifulSoup

from sentiment_analyzer import analyze_content
from department_categorizer import categorize_department

async def scrape_ndtv_archive(news_outlet, target_date, source_url, max_articles_to_scrape):
    async with aiohttp.ClientSession() as session:
        async with session.get(source_url) as response:
            if response.status == 200:
                ndtv_soup = BeautifulSoup(await response.text(), "html.parser")
                article_links = ndtv_soup.find("div", id = "main-content")

                article_data = [
                    {
                        "source": news_outlet,
                        "publication_date": target_date,
                        "link": link["href"],
                        "title": link.text.strip(),
                        "content": {
                            "text": None,
                            "tone": None,
                            "government_body": None
                        }
                    }

                    for link in article_links.find_all("a", href = True)
                    if (
                        (domain_match := re.search(r'https?://(?:www\.)?([^/]+)', link["href"]))
                        and domain_match.group(1) == "ndtv.com" and "india-news" in link["href"]
                    )
                ][:max_articles_to_scrape]

                tasks = (
                    fetch_article_content(session, index, article, max_articles_to_scrape)
                    for index, article in enumerate(article_data, start = 1)
                )

                await asyncio.gather(*tasks)

                try:
                    with open(r'Backend\english.json', "w", encoding = "utf-8") as json_file:
                        json.dump(article_data, json_file, ensure_ascii = False, indent = 4)
                except IOError as exc:
                    print(f'[Error] Failed to write data to file: {exc}')
            else:
                print(f'\n[Error] Failed to retrieve data from {source_url} \nStatus code: {response.status}')


async def fetch_article_content(session, index, article, max_articles_to_scrape):
    async with session.get(article["link"]) as response:
        article_soup = BeautifulSoup(await response.text(), "html.parser")
        article_body = article_soup.find("div", id = "ins_storybody")

        if article_body:
            raw_content = article_body.get_text(strip = True)
            processed_content = re.sub(r'[^\x20-\x7E]', " ", raw_content)

            article["content"]["text"] = " ".join(processed_content.split())
            article["content"]["tone"] = analyze_content(article["content"]["text"])
            article["content"]["government_body"] = categorize_department(article["content"]["text"])

            print(f'[{index}/{max_articles_to_scrape}] {article["link"]}')
        else:
            print(f'[Error] Content not found for {article["link"]}')
