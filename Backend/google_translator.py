import json

from googletrans import Translator

from sentiment_analyzer import analyze_sentiment
from department_categorizer import categorize_department

def perform_translation(news_outlet: str, extracted_text: tuple, json_file_path: str, language: str) -> None:
    google_translator = Translator()

    file_name = extracted_text[1]
    extracted_lines = extracted_text[0].split("\n")

    print(f'\nTranslating: {file_name}')

    translated_text = [
        google_translator.translate(str(line), src = language, dest = "en").text
        for line in extracted_lines
        if line is not None and line.strip() != ""
    ]

    print("Done ...")

    print(f'\nSaving data to file: {json_file_path}')

    article_data = {
        "id": 1,
        "source": news_outlet,
        "text": " ".join(translated_text),
        "tone": analyze_sentiment(" ".join(translated_text)),
        "government-body": categorize_department(" ".join(translated_text))
    }

    with open(json_file_path, "w", encoding = "utf-8") as json_file:
        json.dump(article_data, json_file, ensure_ascii = False, indent = 4)

    print("Done ...")
