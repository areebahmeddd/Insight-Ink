import string
import re

import joblib
import nltk
import pandas as pd
from nltk.corpus import stopwords
from sklearn.feature_extraction.text import TfidfVectorizer

trained_model = joblib.load(r'Backend\Models\Department\SupportVectorMachine.pkl')

pd.set_option("max_colwidth", 500)
dataframe = pd.read_csv(r'Backend\Models\data-1.csv', usecols = ["category", "text"])

common_words = set(stopwords.words("english"))
lemmatizer = nltk.WordNetLemmatizer()
vectorizer = TfidfVectorizer()

def categorize_department(text: str) -> str:
    cleaned_text = preprocess_text(text)
    processed_text = vectorizer.transform([cleaned_text])
    predicted_department = trained_model.predict(processed_text)[0]

    return predicted_department


def preprocess_text(raw_text: str) -> str:
    raw_text = "".join(
        [
            character.lower()
            for character in raw_text
            if character not in string.punctuation
        ]
    )

    tokenized_text = " ".join(
        [
            lemmatizer.lemmatize(word)
            for word in re.split(r'\W+', raw_text)
            if word not in common_words
        ]
    )

    return tokenized_text

dataframe["cleaned_text"] = dataframe["text"].apply(preprocess_text)
sparse_matrix = vectorizer.fit_transform(dataframe["cleaned_text"])
