from flask import Flask, request, jsonify

app = Flask(__name__)

# just for testing
username = 'username'
password = 'password'


@app.route("/")
def hello_world():
    return """<form action="/login" method="POST">
        <input name="username" required/><input name="password" type="password" required/><input type="submit" value="submit"/>
    </form>"""


@app.route("/login", methods = ['POST'])
def login():
    form = request.form
    if form['username'] == username and form['password'] == password:
        return jsonify(result="1"), 200
    else:
        return jsonify(result="0"), 401
        
