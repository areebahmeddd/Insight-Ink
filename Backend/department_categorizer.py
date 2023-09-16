import joblib
import string
import pandas as pd
import re
import nltk
from nltk.corpus import stopwords
from sklearn.feature_extraction.text import TfidfVectorizer


SVM = joblib.load(r'Backend\Models\SupportVector.pkl')

pd.set_option('max_colwidth', 500)
data = pd.read_csv(r'Backend\Models\data.csv')
data = data[['category', 'text']].dropna()

stop_words = set(stopwords.words('english'))
wn = nltk.WordNetLemmatizer()
vectorizer = TfidfVectorizer()

def clean_text(text):
    text = "".join([t.lower() for t in text if t not in string.punctuation])
    text = re.split('\W+',text)
    text = [t for t in text if t not in stop_words]
    text = [wn.lemmatize(t) for t in text]
    text = " ".join(text)
    return text

def vectorization(text):
    text = clean_text(text)
    text = [text]
    return vectorizer.transform(text)


data['cleaned_text'] = data['text'].apply(lambda x: clean_text(x))
vectorized_text = vectorizer.fit_transform(data['cleaned_text'])


def categorize_department(text):
    text = clean_text(text)
    text = vectorization(text)
    return SVM.predict(text)[0]
