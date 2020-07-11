import numpy as np
import cv2
import base64
from flask import jsonify

def getAsymmetry(b64str):   
    image = b64str
    encoded_data = image['image'].split(',')[1]
    np_array = np.fromstring(base64.b64decode(encoded_data), np.uint8)
    img = cv2.imdecode(np_array, cv2.IMREAD_COLOR)
        
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    blur = cv2.GaussianBlur(gray, (5, 5), 0)
    ret,thresh = cv2.threshold(blur,70,255,cv2.THRESH_BINARY_INV+cv2.THRESH_OTSU)
    contours,hierarchy = cv2.findContours(thresh, cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)

    max_cnt = max(contours, key=cv2.contourArea)

    ellipse = cv2.fitEllipse(max_cnt)
    ellipse_pnts = cv2.ellipse2Poly( (int(ellipse[0][0]),int(ellipse[0][1]) ) ,( int(ellipse[1][0]),int(ellipse[1][1]) ),int(ellipse[2]),0,360,1)
    asymmetry = cv2.matchShapes(max_cnt,ellipse_pnts,1,0.0)

    return jsonify({"asymmetry": asymmetry})