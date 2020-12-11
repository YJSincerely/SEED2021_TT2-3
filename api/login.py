from flask import Blueprint
import requests
from flask_pymongo import PyMongo
import pymongo
from pprint import pprint
import bcrypt

login_api = Blueprint('login_api', __name__)

client = pymongo.MongoClient(
    "mongodb+srv://root:sD2fX1CYY2LhAcY2@cluster0.fvp4p.mongodb.net/Main?retryWrites=true&w=majority")
db = client['SampleDatabase']


@ login_api.route('/login', methods=['POST'])
def login():
    result = db.SampleCollection.find_one({'custID': requests.form['custID']})
    hashed_password = result['password']
    password = requests.form['password']
    finalResult = bcrypt.checkpw(password.encode('utf8'), hashed_password)
    if finalResult == True:
        return {'message': 'logged in'}
    else:
        return {'message': 'login failed'}

    # payload1 = {'x-api-key': '4v1iqyh5th8eKfYO191bZ5IX3DW4SDWj1E0NmF4t'}
    # payload2 = {
    #     'username': requests.form['username'], 'password': requests.form['password']}

    # r = requests.post(
    #     'https://u8fpqfk2d4.execute-api.ap-southeast-1.amazonaws.com/techtrek2020/login', headers=payload1, json=payload2)
    # print(r.text)
    # return {'message': r.text}
    # return {'message': 'logged in'}
