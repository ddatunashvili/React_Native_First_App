from flask import Flask, render_template, jsonify
import json
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/', methods=['GET'])
def main():
    with open("base.json", "r") as json_file:
        data = json.load(json_file)

    # Convert the data to a prettified JSON string
    pretty_json = json.dumps(data, indent=4)

    return render_template('data.html', pretty_json=pretty_json)

@app.route('/animes', methods=['GET'])
def get_animes():
    with open("base.json", "r") as json_file:
        data = json.load(json_file)["data"]

    response = jsonify(data)
    response.headers.add('Access-Control-Allow-Origin', '*')  # Allow all origins

    return response

if __name__ == '__main__':
    app.run(host='0.0.0.0')

