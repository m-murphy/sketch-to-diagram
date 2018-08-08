import os
from flask import Flask, send_from_directory

app = Flask(__name__, static_url_path='/dist/sketch-to-diagram-js/')

@app.route("/")
def index():
    return app.send_static_file('index.html')

@app.route("/<path:filename>")
def paths(filename):
    return send_from_directory('./static', filename)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=80)
