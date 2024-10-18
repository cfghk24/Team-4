# Filename - server.py

# Import flask and datetime module for showing date and time
from flask import Flask, jsonify
import datetime

# Initializing flask app
app = Flask(__name__)

# Route for seeing data
@app.route('/data')
def get_time():
    # Get current date and time
    x = datetime.datetime.now()

    # Returning an API response in JSON format
    return jsonify({
        'Name': "geek",
        "Age": "22",
        "Date": x.isoformat(),  # Format date to ISO 8601 string
        "programming": "python"
    })

# Running app
if __name__ == '__main__':
    app.run(debug=True)