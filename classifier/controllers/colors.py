from sklearn.cluster import KMeans
import matplotlib.pyplot as plt
import numpy as np
import cv2
from collections import Counter
from skimage.color import rgb2lab, deltaE_cie76
import os
from flask import jsonify
import base64

def getColors(b64str):
    def RGB2HEX(color):
        return "#{:02x}{:02x}{:02x}".format(int(color[0]), int(color[1]), int(color[2]))

    def get_image(image_b64):
        encoded_data = image_b64['image'].split(',')[1]
        np_array = np.frombuffer(base64.b64decode(encoded_data), np.uint8)
        img = cv2.imdecode(np_array, cv2.IMREAD_COLOR)
        img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
        return img

    def get_colors(image, number_of_colors, show_chart):

        modified_image = cv2.resize(image, (600, 400), interpolation = cv2.INTER_AREA)
        modified_image = modified_image.reshape(modified_image.shape[0]*modified_image.shape[1], 3)

        clf = KMeans(n_clusters = number_of_colors)
        labels = clf.fit_predict(modified_image)

        counts = Counter(labels)

        center_colors = clf.cluster_centers_
        # We get ordered colors by iterating through the keys
        ordered_colors = [center_colors[i] for i in counts.keys()]
        hex_colors = [RGB2HEX(ordered_colors[i]) for i in counts.keys()]
        rgb_colors = [ordered_colors[i] for i in counts.keys()]

        if (show_chart):
            plt.figure(figsize = (8, 6))
            #COM AS LABELS COM CORES HEX
            #plt.pie(counts.values(), labels = hex_colors, colors = hex_colors)
            #SEM AS LABELS COM CORES HEX
            plt.pie(counts.values(), colors = hex_colors)
            plt.show()

        color_dict = {}
        color_dict['colors'] = hex_colors
        return jsonify(color_dict)

    colors_response = get_colors(get_image(b64str), 15, False)
    return colors_response
