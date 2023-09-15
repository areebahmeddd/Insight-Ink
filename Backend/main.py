import asyncio

from text_crawler import scrape_ndtv_archive
from image_crawler import get_ocr
from translator import get_translation

async def main():
    news_outlet = input("News Outlet: ")

    if news_outlet.lower() == "ndtv":
        target_date = input("Date: ")
        source_url = f'https://archives.ndtv.com/articles/{target_date}.html'
        max_articles_to_scrape = 1000

        await scrape_ndtv_archive(news_outlet, target_date, source_url, max_articles_to_scrape)
    elif news_outlet.lower() == "hindustan dainik":
        file_path = r'Backend\Assets\hindi-1.jpg'
            
        ocr_data = await asyncio.to_thread(get_ocr, file_path, lang = "hin")
        translator_data = await asyncio.to_thread(get_translation, ocr_data, lang = "hi")
    else:
        print("\n[Error] News outlet not supported")

if __name__ == "__main__":
    asyncio.run(main())
