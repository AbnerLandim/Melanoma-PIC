import numpy as np
import cv2
import tensorflow as tf
import os
import base64
from flask import jsonify

MODEL_NAME = '/home/abner/Documentos/melskin/classifier/controllers/melanoma-classifier-0.001-8conv-basic.model'
IMG_SIZE = 32

loaded_model = tf.keras.models.load_model(MODEL_NAME, custom_objects=None, compile=True)

def getRisk(b64str):
    image = b64str
    encoded_data = image['image'].split(',')[1]
    np_array = np.fromstring(base64.b64decode(encoded_data), np.uint8)
    img = cv2.resize(cv2.imdecode(np_array, cv2.IMREAD_COLOR), (IMG_SIZE,IMG_SIZE))

    data = img.reshape(IMG_SIZE,IMG_SIZE,3)
    data = np.expand_dims(data, axis=0)
    model_out = loaded_model.predict((data/255).astype('float32'))
    print('Risk = {:.2f}%'.format((model_out[0][1])*100))
    return jsonify({"risk": str(model_out[0][1])})