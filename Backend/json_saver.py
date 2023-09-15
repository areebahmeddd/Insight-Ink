import json
import os

def save_to_json(json_file_path:str, data:tuple) -> None:
    output = {data[0]: data[1]}
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
