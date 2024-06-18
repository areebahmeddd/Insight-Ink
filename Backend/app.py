import asyncio
import json

from flask import Flask, request, jsonify
from flask_cors import CORS

from text_crawler import scrape_ndtv_archive
from image_crawler import perform_ocr
from google_translator import perform_translation
from graph_generator import plot_sentiment_graph, plot_department_graph

app = Flask(__name__)
CORS(app, resources = {
        r'/api/*': {"origins": ["http://localhost:3000", "https://insight-ink.org"]}
    }
)

media_outlets = {
    "Dainik Jagran": ["Hindi", "hin"],
    "Prajavani": ["Kannada", "kan"],
    "Dinamalar": ["Tamil", "tam"],
    "Mathrubhumi": ["Malayalam", "mal"],
    "Eenadu": ["Telugu", "tel"]
}

@app.route("/api", methods = ["POST"])
def process_data() -> str:
    news_source = request.json.get("news_source")
    selected_date = request.json.get("selected_date")

    if news_source == "NDTV":
        source_url = f'https://archives.ndtv.com/articles/{selected_date}.html'
        max_articles_to_scrape = 500

        asyncio.run(scrape_ndtv_archive(news_source, selected_date, source_url, max_articles_to_scrape))
        with open(r'Frontend\src\english.json', "r", encoding = "utf-8") as json_file:
            scraped_data = json.load(json_file)

        plot_sentiment_graph(scraped_data)
        return jsonify(scraped_data)

    elif news_source in media_outlets:
        source_language = media_outlets[news_source][0]
        image_file_path = rf'Backend\Assets\{media_outlets[news_source][1]}-1.jpg'

        with open(r'Backend\language_codes.json', "r", encoding = "utf-8") as json_file:
            language_mappings = json.load(json_file)

        extracted_text = perform_ocr(image_file_path, language_mappings[source_language][1])
        json_file_path = rf'Frontend\src\{source_language.lower()}.json'
        perform_translation(news_source, extracted_text, json_file_path, language_mappings[source_language][0])

        with open(json_file_path, "r", encoding = "utf-8") as json_file:
            scraped_data = json.load(json_file)

        return jsonify(scraped_data)

    else:
        return jsonify({"Error": "News source not supported"})

if __name__ == "__main__":
    app.run()
