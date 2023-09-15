import os

import pytesseract
from PIL import Image

def get_ocr(file:str, lang:str = 'eng') -> tuple:
    print(f"Running OCR for {file} ...")

    os.environ['TESSDATA_PREFIX'] = r'C:\Program Files\Tesseract-OCR\tessdata'
    pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'

    img = Image.open(file)
    text = pytesseract.image_to_string(img, lang=lang)

    print("Done ...")
    
    return (text, file)
