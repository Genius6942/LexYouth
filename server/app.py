from flask import Flask, request

app = Flask(__name__)


@app.route("/")
def hello_world():
    return """<form action="/login" method="POST">
        <input name="username" required/><input name="password" type="password" required/><input type="submit" value="submit"/>
    </form>"""


@app.route("/login", methods = ['POST'])
def login():
    form = request.form
    return 'logged in as ' + form['username']
