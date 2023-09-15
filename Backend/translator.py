import json

from googletrans import Translator

def get_translation(data: tuple, lang: str) -> list:
    text = data[0]
    file_name = data[1]
    trans_text_lines = text.split('\n')
    
    print(f"Translating {file_name} ...")
    translator_obj = Translator()
    
    english_text_list = []
    for trans_text in trans_text_lines:
        if trans_text is not None and trans_text.strip() != '':
            english_text = translator_obj.translate(str(trans_text), src=lang, dest='en').text
            english_text_list.append(english_text)

    print("Done ...")
    
    temp = {file_name: english_text_list}
    trans_data_str = json.dumps(temp, indent=4)

    with open('hindi.json', 'w', encoding='utf-8') as json_file:
        json_file.write(trans_data_str)
    
    return english_text_list
