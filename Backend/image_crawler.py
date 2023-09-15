import pytesseract
import os

from PIL import Image

def get_ocr(file:str, lang:str = 'eng') -> tuple:
    print(f"Running OCR for {file} ...")
    
    img = Image.open(file)
    os.environ['TESSDATA_PREFIX'] = r'C:\Program Files\Tesseract-OCR\tessdata'
    pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'
    
    text = pytesseract.image_to_string(img, lang=lang)

    print("Done ...")
    
    return (text, file)
