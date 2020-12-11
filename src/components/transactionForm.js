import React, { useState, useEffect } from "react";

export default class TransactionForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            transactionDetail: {
                custID: 4, //take in from props
                payeeID: '',
                dateTime: '',
                amount: '',
                expensesCat: '', 
                eGift: false,
                message: ''
            }
        }
    }

    handlePayeeIDChanged(event) {
        var transactionDetail = this.state.transactionDetail;
        transactionDetail.payeeID = event.target.value;

        this.setState({ transactionDetail: transactionDetail });
    }

    handleDateChanged(event) {
        var transactionDetail = this.state.transactionDetail;
        transactionDetail.dateTime = event.target.value;

        this.setState({ transactionDetail: transactionDetail });
    }

    handleAmountChanged(event) {
        var transactionDetail = this.state.transactionDetail;
        transactionDetail.amount = event.target.value;

        this.setState({ transactionDetail: transactionDetail });
    }

    handleExpensesCatChanged(event) {
        var transactionDetail = this.state.transactionDetail;
        transactionDetail.expensesCat = event.target.value;

        this.setState({ customer: transactionDetail });
    }

    handleMessageChanged(event) {
        var transactionDetail = this.state.transactionDetail;
        transactionDetail.message = event.target.value;

        this.setState({ transactionDetail: transactionDetail });
    }

    handleEGiftChanged(event) {
        var transactionDetail = this.state.transactionDetail;
        transactionDetail.eGift = event.target.value;

        this.setState({ transactionDetail: transactionDetail });
    }

    handleSubmit(event) {
        //submit form
        let transactionDetail = this.state.transactionDetail;
        transactionDetail.amount = parseInt(transactionDetail.amount);
        transactionDetail.payeeID = parseInt(transactionDetail.payeeID);
        transactionDetail.eGift = transactionDetail.eGift === 'True' ? true : false;
        fetch("/transaction/add", {
			method: "POST",
			headers: {
				"x-api-key": "4v1iqyh5th8eKfYO191bZ5IX3DW4SDWj1E0NmF4t",
			},
			body: JSON.stringify(transactionDetail),
		})
			.then((response) => response.json())
			.then((data) => {
				// setTransactions(data);
				console.log(data);
        	});
    }

    render() {
        return (
            <div>
                <label>
                    Payee ID: 
                </label>
                <input type="text" value={this.state.transactionDetail.payeeID} onChange={this.handlePayeeIDChanged.bind(this)}/>
                <br/>
                <label>
                    Date Time:
                </label>
                <input type="text" value={this.state.transactionDetail.dateTime} onChange={this.handleDateChanged.bind(this)}/>
                <br/>
                <label>
                    Amount:
                </label>
                <input type="text" value={this.state.transactionDetail.amount} onChange={this.handleAmountChanged.bind(this)}/>
                <br/>
                <label>
                    Expenses Category:
                </label>
                <input type="text" value={this.state.transactionDetail.expensesCat} onChange={this.handleExpensesCatChanged.bind(this)}/>
                <br/>
                <label>
                    E-Gift:
                </label>
                <select value={this.state.transactionDetail.eGift} onChange={this.handleEGiftChanged.bind(this)}>
                    <option value="True">
                        True
                    </option>
                    <option value="False">
                        False
                    </option>
                </select>
                <br/>
                <label>
                    Message:
                </label>
                <input type="text" value={this.state.transactionDetail.message} onChange={this.handleMessageChanged.bind(this)}/>
                <br/>
                <button onClick={this.handleSubmit.bind(this)}>
                    Add Transaction
                </button>
            </div>
        );
    }
}

