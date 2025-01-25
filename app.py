from flask import Flask, render_template, request,  url_for ,session
import openpyxl
import os

"""
Create a simple app using flask that submit the user information to an excel file 
"""



app = Flask(__name__)

# The data file path
data_file = "data.xlsx"

if not os.path.exists(data_file):
    workbook = openpyxl.Workbook()
    sheet = workbook.active
    sheet.append(["Name", "Email", "Message"])  # Add headers
    workbook.save(data_file)


@app.route('/')
def index():
    return render_template('Form.html', css_url=url_for('static', filename='style.css'))

@app.route('/submit', methods=['POST'])
def submit():
    name = request.form['name']
    email = request.form['email']
    message = request.form['message']

    workbook = openpyxl.load_workbook(data_file)
    sheet = workbook.active
    sheet.append([name, email, message])
    workbook.save(data_file)

    return "Data saved successfully!"

if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0", port=int(os.environ.get("PORT", 8080)))
