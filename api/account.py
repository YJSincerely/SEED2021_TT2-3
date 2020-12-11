from flask import Blueprint
import requests

account_api = Blueprint('account_api', __name__)


@account_api.route('/viewPersonalAccountDetails', methods=['POST'])
def viewPersonalAccountDetails():
    payload1 = {'x-api-key': '4v1iqyh5th8eKfYO191bZ5IX3DW4SDWj1E0NmF4t'}
    payload2 = {
        'custID': requests.form['custID']}
    r = requests.post(
        'https://u8fpqfk2d4.execute-api.ap-southeast-1.amazonaws.com/techtrek2020/accounts/view', headers=payload1, json=payload2)
    print(r.text)
    return {'message': r.text}
    # return {'message': 'logged in'}


@account_api.route('/updateAccountBalance', methods=['POST'])
def updateAccountBalance():
    payload1 = {'x-api-key': '4v1iqyh5th8eKfYO191bZ5IX3DW4SDWj1E0NmF4t'}
    payload2 = {
        'custID': requests.form['custID'], 'amount': requests.form['amount']}
    r = requests.post(
        'https://u8fpqfk2d4.execute-api.ap-southeast-1.amazonaws.com/techtrek2020/accounts/update', headers=payload1, json=payload2)
    print(r.text)
    return {'message': r.text}


@account_api.route('/viewAllAccountDetails', methods=['POST'])
def viewAllAccountDetails():
    payload1 = {'x-api-key': '4v1iqyh5th8eKfYO191bZ5IX3DW4SDWj1E0NmF4t'}
    r = requests.post(
        'https://u8fpqfk2d4.execute-api.ap-southeast-1.amazonaws.com/techtrek2020/users', headers=payload1)
    print(r.text)
    return {'message': r.text}
    # return {'message': 'logged in'}
