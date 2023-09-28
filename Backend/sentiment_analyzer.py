from textblob import TextBlob

def analyze_sentiment(text):
    content = TextBlob(text)
    sentiment_score = content.sentiment.polarity

    if sentiment_score > 0.1:
        return "Positive"

    elif sentiment_score < -0.1:
        return "Negative"

    else:
        return "Neutral"
