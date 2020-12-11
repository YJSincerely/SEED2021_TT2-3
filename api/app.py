from flask import Flask

from login import login_api

app = Flask(__name__)
app.debug = True


@app.route('/')
def home():
    return {"message": "hello there my name"}


@app.route('/home', methods=['GET'])
def testhome():

    return {"message": "hello home"}


app.register_blueprint(login_api)


if __name__ == "__main__":
    app.run()
