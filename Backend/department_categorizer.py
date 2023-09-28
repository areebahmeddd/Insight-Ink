import string
import re

import joblib
import nltk
import pandas as pd
from nltk.corpus import stopwords
from sklearn.feature_extraction.text import TfidfVectorizer

classifier = joblib.load(r'Backend\Models\Department\SupportVectorMachine.pkl')

pd.set_option("max_colwidth", 500)
dataframe = pd.read_csv(r'Backend\Models\data-2.csv', usecols = ["category", "text"])

common_words = set(stopwords.words("english"))
lemmatizer = nltk.WordNetLemmatizer()
vectorizer = TfidfVectorizer()

def categorize_department(text: str) -> str:
    cleaned_text = preprocess_text(text)
    processed_text = vectorizer.transform([cleaned_text])

    return classifier.predict(processed_text)[0]


def preprocess_text(text: str) -> str:
    text = "".join(
        [
            character.lower()
            for character in text
            if character not in string.punctuation
        ]
    )

    tokenized_text = [
        lemmatizer.lemmatize(word)
        for word in re.split(r'\W+', text)
        if word not in common_words
    ]

    return " ".join(tokenized_text)

dataframe["cleaned_text"] = dataframe["text"].apply(preprocess_text)
sparse_matrix = vectorizer.fit_transform(dataframe["cleaned_text"])
