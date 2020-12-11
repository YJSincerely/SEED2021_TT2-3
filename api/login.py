from flask import Blueprint
import requests

login_api = Blueprint('login_api', __name__)


@login_api.route('/login', methods=['POST'])
def login():
    payload1 = {'x-api-key': '4v1iqyh5th8eKfYO191bZ5IX3DW4SDWj1E0NmF4t'}
    payload2 = {
        'username': requests.form['username'], 'password': requests.form['password']}
    r = requests.post(
        'https://u8fpqfk2d4.execute-api.ap-southeast-1.amazonaws.com/techtrek2020/login', headers=payload1, json=payload2)
    print(r.text)
    return {'message': r.text}
    # return {'message': 'logged in'}
