# import torch
# from transformers import BertTokenizer, BertForSequenceClassification
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer

# tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
# trained_model = BertForSequenceClassification.from_pretrained(r'Backend\Models\Sentiment')

# device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
# trained_model.to(device)

# def analyze_sentiment(text: str) -> str:
#     tokenized_text = tokenizer(text, truncation = True, padding = True, return_tensors = "pt")

#     encoded_text = {
#         key: val.to(device)
#         for key, val in tokenized_text.items()
#     }

#     with torch.inference_mode():
#         predicted_scores = trained_model(**encoded_text).logits

#     sentiment_index = predicted_scores.argmax(dim = 1).item()
#     sentiment_labels = ["Positive", "Neutral", "Negative"]
#     predicted_sentiment = sentiment_labels[sentiment_index]

#     return predicted_sentiment

def analyze_sentiment(text: str) -> str:
    analyzer = SentimentIntensityAnalyzer()
    sentiment = analyzer.polarity_scores(text)

    if sentiment["compound"] >= 0.1:
        return "Positive"

    elif sentiment["compound"] <= -0.1:
        return "Negative"

    else:
        return "Neutral"
