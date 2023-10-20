import matplotlib.pyplot as plt

def plot_sentiment_graph(scraped_data: list[dict[str, str]]) -> None:
    sentiment_frequency = {"Positive": 0, "Neutral": 0, "Negative": 0}
    chart_colors = ["#6abf69", "#f7e95e", "#f95d6a"]

    for article in scraped_data:
        sentiment = article["tone"]
        sentiment_frequency[sentiment] += 1

    labels = list(sentiment_frequency.keys())
    counts = list(sentiment_frequency.values())

    fig, (bar_chart, pie_chart) = plt.subplots(1, 2, figsize = (10, 5))
    bar_chart.bar(labels, counts, color = chart_colors)
    pie_chart.pie(counts, labels = labels, autopct = "%1.2f%%", colors = chart_colors)

    plt.tight_layout()
    plt.savefig(r'Frontend\src\sentiment_distribution.png')


def plot_department_graph(scraped_data: list[dict[str, str]]) -> None:
    ministry_name = input("Search: ").upper()

    sentiment_frequency = {"Positive": 0, "Neutral": 0, "Negative": 0}
    chart_colors = ["#6abf69", "#f7e95e", "#f95d6a"]

    for article in scraped_data:
        sentiment = article["tone"]
        department = article["government-body"]

        if department == ministry_name:
            sentiment_frequency[sentiment] += 1

    labels = list(sentiment_frequency.keys())
    counts = list(sentiment_frequency.values())

    fig, (bar_chart, pie_chart) = plt.subplots(1, 2, figsize = (10, 5))
    bar_chart.bar(labels, counts, color = chart_colors)
    pie_chart.pie(counts, labels = labels, autopct = "%1.2f%%", colors = chart_colors)

    plt.tight_layout()
    plt.savefig(r'Frontend\src\department_distribution.png')
