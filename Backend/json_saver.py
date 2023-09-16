import json
import os

from article_sentiment import analyze_content

def save_to_json(json_file_path:str, data:tuple, publisher:str) -> None:
    lang = json_file_path.split('\\')[-1].split('.')[0]
    text = " ".join(data[1])
    
    output = {
        'source': data[0],
        'publisher': publisher,
        'content': {
            'text': text,
            'tone': analyze_content(text),
            'government_body': None
        }
    }

    print(f"Saving to {json_file_path} ...")
    
    try:
        if os.path.isfile(json_file_path) and os.stat(json_file_path).st_size != 0:
            with open(json_file_path, 'r', encoding='utf-8') as f:
                existing_data = json.load(f)
        else:
            existing_data = []

        for temp in existing_data:
            if list(temp.keys())[0] == list(output.keys())[0]:
                existing_data.remove(temp)
                break
        existing_data.append(output)
        
        with open(json_file_path, 'w', encoding='utf-8') as f:
            json.dump(existing_data, f, ensure_ascii=False, indent=4)
    except IOError as e:
        print(e)
        print("Error in writing to file")
    
    print("Done ...")
