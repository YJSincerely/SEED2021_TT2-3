from flask import Blueprint
from datetime import date
import requests

transaction_api = Blueprint('transaction_api', __name__)


@transaction_api.route('/viewTransaction', methods=['POST'])
def viewTransaction():
    payload1 = {'x-api-key': '4v1iqyh5th8eKfYO191bZ5IX3DW4SDWj1E0NmF4t'}
    payload2 = {
        'custID': requests.form['custID']}
    r = requests.post('https://u8fpqfk2d4.execute-api.ap-southeast-1.amazonaws.com/techtrek2020/transaction/view',
                      headers=payload1, json=payload2)
    print(r.text)

    return {'message': r.text}


@transaction_api.route('/addTransaction', methods=['POST'])
def addTransaction():
    payload1 = {'x-api-key': '4v1iqyh5th8eKfYO191bZ5IX3DW4SDWj1E0NmF4t'}
    payload2 = {
        'custID': requests.form['custID'], 'payeeID': requests.form['payeeID'], 'dateTime': datetime.datetime.now(), 'amount': requests.form['amount'], 'expensesCat': requests.form['expensesCat'], 'eGift': requests.form['eGift'], 'message': requests.form['message']}
    r = requests.post('https://u8fpqfk2d4.execute-api.ap-southeast-1.amazonaws.com/techtrek2020/transaction/add',
                      headers=payload1, json=payload2)
    print(r.text)

    return {'message': r.text}
