import asyncio
import json

from text_crawler import scrape_ndtv_archive
from image_analyzer import preprocess_image
from image_crawler import get_ocr
from translator import get_translation
from json_saver import save_to_json

outlets_dict = {
    'Hindustan': ['Hindi', 'hin'],
    'Vijayavani': ['Kannada', 'kan'],
    'Dinamalar': ['Tamil', 'tam'],
    'Mathrubhumi': ['Malayalam', 'mal'],
    'Eenadu': ['Telugu', 'tel'],
    'Etemaad': ['Urdu', 'urd']
}

async def main():
    news_outlet = input("News Outlet: ").capitalize()

    if news_outlet.lower() == "ndtv":
        target_date = input("Date: ")
        source_url = f'https://archives.ndtv.com/articles/{target_date}.html'
        max_articles_to_scrape = 1000

        await scrape_ndtv_archive(news_outlet, target_date, source_url, max_articles_to_scrape)
        
    elif news_outlet in outlets_dict:
        language = outlets_dict[news_outlet][0]
                
        input_path = rf'Backend\Assets\{outlets_dict[news_outlet][1]}-1.jpg'
        output_path = rf'Backend\Assets\{outlets_dict[news_outlet][1]}-12.jpg'

        result = preprocess_image(input_path, output_path)

        if result == True:
            print(f'Preprocessed image saved as {output_path}')
        else:
            print(f'Preprocessing failed: {result}')

        file_path = output_path
        
        with open(r'Backend\language_codes.json', 'r', encoding='utf-8') as f:
            lang_codes = json.load(f)
            
        ocr_data = get_ocr(file_path, lang=lang_codes[language][1])
        translator_data = get_translation(ocr_data, lang=lang_codes[language][0])
        save_to_json(rf'Backend\{language.lower()}.json', translator_data, publisher=news_outlet)
        
    else:
        print("\n[Error] News outlet not supported")

if __name__ == "__main__":
    asyncio.run(main())
