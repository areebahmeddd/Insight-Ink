import cv2

def preprocess_image(input_image_path, output_image_path):
    try:
        image = cv2.imread(input_image_path)
        blurred_image = image
        grayscale_image = cv2.cvtColor(blurred_image, cv2.COLOR_BGR2GRAY)
        enhanced_image = cv2.convertScaleAbs(grayscale_image, alpha=1.5, beta=10)
        binary_image = cv2.adaptiveThreshold(enhanced_image, 255, cv2.ADAPTIVE_THRESH_MEAN_C, cv2.THRESH_BINARY, blockSize=15, C=7)
        upscaled_image = cv2.resize(binary_image, None, fx=2, fy=2, interpolation=cv2.INTER_CUBIC)

        cv2.imwrite(output_image_path, upscaled_image)

        return True
    except Exception as e:
        return str(e)
