from flask import Flask, request
from flask_cors import CORS
from controllers.asymmetry import getAsymmetry
from controllers.colors import getColors
from controllers.risk import getRisk

app = Flask(__name__)
CORS(app)

@app.route('/asymmetry', methods=['GET', 'POST'])
def asymmetry():
    data = getAsymmetry(request.json)
    return data

@app.route('/colors', methods=['GET', 'POST'])
def colors():
    data = getColors(request.json)
    return data

@app.route('/risk', methods=['GET', 'POST'])
def risk():    
    data = getRisk(request.json)
    return data

if __name__ == "__main__":
    app.run(debug=True)