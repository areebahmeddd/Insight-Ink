# Insight Ink

The [Press Information Bureau](https://pib.gov.in/) (PIB) automated feedback system uses web crawlers to create a dataset of news articles, Optical Character Recognition (OCR) technology to extract content from e-papers, and a public Application Programming Interface (API) to analyze YouTube videos. It then utilizes advanced Natural Language Processing (NLP) techniques to classify news articles into relevant government departments and evaluate their sentiment.

The primary functionality of the system is to send timely notifications for negative articles while providing a user-friendly dashboard for data visualization. Additionally, there is a separate Chrome extension for real-time fake news detection.

## Overview

<p align = "center">
  <strong>Data Acquisition</strong>
</p>

- **Asynchronous Web Scraping**: Utilized [BeautifulSoup](https://beautiful-soup-4.readthedocs.io/en/latest/) library along with asynchronous libraries such as [aiohttp](https://docs.aiohttp.org/en/stable/) and [asyncio](https://docs.python.org/3/library/asyncio.html) to efficiently scrape articles from various national and regional media websites.

- **Text Extraction** & **Language Translation**: Implemented Google's Optical Character Recognition engine ([Pytesseract](https://pytesseract.readthedocs.io/en/latest/)) to extract text from scanned or image-based regional newspaper articles and integrated [Google Translator API](https://py-googletrans.readthedocs.io/en/latest/) to translate the extracted text into English, supporting cross-language analysis.

- **Video Content Breakdown**: Leveraged [OpenAI Whisper API](https://platform.openai.com/docs/guides/speech-to-text) for an in-depth analysis of closed captioning in YouTube videos from selected news channels, enhancing media monitoring capabilities.

🗂️ Processed data is stored automatically in [JSON](https://docs.python.org/3/library/json.html) format with well-defined key-value pairs, ensuring compatibility for frontend integration and wider accessibility across various applications.

---

<p align = "center">
  <strong>Data Analysis</strong>
</p>

- **Department Categorization**: Developed a machine learning model using the [Support Vector Machine](https://www.geeksforgeeks.org/support-vector-machine-algorithm/?ref=lbp) (SVM) algorithm, complemented by Natural Language Processing techniques like [Text Lemmatization](https://www.nltk.org/api/nltk.stem.WordNetLemmatizer.html?highlight=lemmatize) and [Term Frequency-Inverse Document Frequency](https://scikit-learn.org/stable/modules/generated/sklearn.feature_extraction.text.TfidfVectorizer.html#sklearn.feature_extraction.text.TfidfVectorizer) (TF-IDF) vectorization, to analyze a [dataset](https://github.com/areebahmeddd/Insight-Ink/blob/main/Backend/Models/data-1.csv) comprising diverse government departments. The [test model](https://github.com/areebahmeddd/Insight-Ink/tree/main/Backend/Models/Department) achieved an accuracy of ~95%

- **Sentiment Analysis**: Trained a Bidirectional Encoder Representations [from Transformers](https://proceedings.neurips.cc/paper_files/paper/2017/file/3f5ee243547dee91fbd053c1c4a845aa-Paper.pdf) ([BERT](https://huggingface.co/docs/transformers/model_doc/bert)) model within the [PyTorch](https://pytorch.org/docs/stable/torch.html) framework, on a [dataset](https://github.com/areebahmeddd/Insight-Ink/blob/main/Backend/Models/data-2.csv) comprising articles classified as positive, neutral, and negative. The [test model](https://github.com/areebahmeddd/Insight-Ink/tree/main/Backend/Models/Sentiment) achieved an accuracy of ~81%, closely matching the ground truth labels.

📊 [Matplotlib](https://matplotlib.org/stable/index.html) library is applied automatically to generate bar graphs to visually represent the correlation between government departments and the sentiment expressed in news articles, making it easier to identify trends, patterns, and areas of concern.

---

<p align = "center">
  <strong>Data Presentation</strong>
</p>

- **Cross-Platform User Interface**: Designed a [website](http://insight-ink.org/) using frameworks such as [React](https://react.dev/reference/react) and [Bootstrap](https://getbootstrap.com/docs/5.3/getting-started/introduction/), with integrated [Twilio API](https://www.twilio.com/docs/sms) for real-time notifications to government officials regarding negative articles, thereby improving the ability to monitor and respond proactively.

- **Chrome Extension**: 

📦 

## Getting Started

Follow these steps to set up and run the Insight Ink software on your local machine, or you can watch the demo video [here](https://www.youtube.com/watch?v=dQw4w9WgXcQ)

### Prerequisites

- [Python 3.11.5](https://www.python.org/ftp/python/3.11.5/python-3.11.5-amd64.exe)
- [Node.js 18.18.0](https://nodejs.org/dist/v18.18.0/node-v18.18.0-x64.msi)

### Installation

1. Clone the repository to your local machine:
  ```shell
  https://github.com/areebahmeddd/Insight-Ink.git
  ```

2. Navigate to the project directory:
  ```shell
  cd Insight-Ink
  ```

3. Create a virtual environment (optional but recommended):
  ```shell
  python -m venv .venv
  ```

4. Activate the virtual environment:

- Windows:
  ```shell
  .venv\Scripts\activate
  ```
- macOS and Linux:
  ```shell
  source .venv/bin/activate
  ```

5. Install the project dependencies:
  ```shell
  pip install -r requirements.txt
  ```

### Usage

1. Run the application:
  ```shell
  python app.py
  ```

2. Access the application in your web browser by navigating to http://localhost:5000

## License

This project is licensed under the [Apache License 2.0](https://github.com/areebahmeddd/Insight-Ink/blob/main/LICENSE)

## Authors

[Areeb Ahmed](https://github.com/areebahmeddd), [Shivansh Karan](https://github.com/SpaceTesla), [Nandini Sharma](https://github.com/NandiniSharma116), [Ravikant Saraf](https://github.com/Ravikant2003), [Mohit Nagaraj](https://github.com/mohit-nagaraj), [Anish Varma]()
