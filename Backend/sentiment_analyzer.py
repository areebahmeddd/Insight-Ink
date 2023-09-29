import torch
from transformers import BertTokenizer, BertForSequenceClassification

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = BertForSequenceClassification.from_pretrained(r'Backend\Models\Sentiment')

def analyze_sentiment(input_text):
    # Tokenize the input text
    tokens = tokenizer(input_text, truncation=True, padding=True, return_tensors="pt")

    # Perform inference
    with torch.no_grad():
        outputs = model(**tokens)

    # Extract the logits from the model's output
    logits = outputs.logits

    # Calculate probabilities using softmax
    probabilities = torch.softmax(logits, dim=1)

    # Determine the predicted sentiment (class with highest probability)
    predicted_class = torch.argmax(probabilities, dim=1).item()

    # Map the class index to the sentiment labels
    sentiment_labels = ['Negative', 'Neutral', 'Positive']
    predicted_sentiment = sentiment_labels[predicted_class]

    return predicted_sentiment
