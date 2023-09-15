import asyncio
import json

from text_crawler import scrape_ndtv_archive
from image_crawler import get_ocr
from translator import get_translation
from json_saver import save_to_json

outlets_dict = {
    'Hindustan': ['Hindi', 'hin'],
    'Vijayavani': ['Kannada', 'kan'],
    'Dinamalar': ['Tamil', 'tam'],
    'Mathrubhumi': ['Malayalam', 'mal'],
    'Sakshi': ['Telugu', 'tel']
}

async def main():
    news_outlet = input("News Outlet: ")

    if news_outlet.lower() == "ndtv":
        target_date = input("Date: ")
        source_url = f'https://archives.ndtv.com/articles/{target_date}.html'
        max_articles_to_scrape = 1000

        await scrape_ndtv_archive(news_outlet, target_date, source_url, max_articles_to_scrape)
        
    elif news_outlet in outlets_dict:
        language = outlets_dict[news_outlet][0]
        file_path = rf'Backend\Assets\{outlets_dict[news_outlet][1]}-1.jpg'
        
        with open(r'Backend\language_codes.json', 'r', encoding='utf-8') as f:
            lang_codes = json.load(f)
            
        ocr_data = get_ocr(file_path, lang=lang_codes[language][1])
        translator_data = get_translation(ocr_data, lang=lang_codes[language][0])
        save_to_json(r'Backend\translated.json', translator_data)
        
    else:
        print("\n[Error] News outlet not supported")

if __name__ == "__main__":
    asyncio.run(main())
