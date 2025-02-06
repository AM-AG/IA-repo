import numpy
import pandas
from flask import Flask, render_template, request,  url_for ,session
import openpyxl
import os

"""
Let's make an NLP App using flask 
"""


app = Flask(__name__)

@app.route('/')
def index():
    return render_template('Home_page.html', css_url=url_for('static', filename='Page_style.css'))

@app.route('/home')
def home_page():
    return render_template('Home_page.html', css_url=url_for('static', filename='Page_style.css'))


@app.route('/Translate')
def Translation():
    return render_template('Translation.html', css_url=url_for('static', filename='Page_style.css'))

@app.route('/Speech_recognition')
def Speech_recognition():
    return render_template('speech_recognition.html', css_url=url_for('static', filename='Page_style.css'))


if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0", port=int(os.environ.get("PORT", 8080)))
