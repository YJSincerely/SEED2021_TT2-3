import React, { useState, useEffect } from "react";

export default class TransactionForm extends React.Component {
    constructor() {
        this.state = {
            transactionDetail: {
                custID: 3, //take in from props
                payeeID: 0,
                dateTime: '',
                amount: 0,
                expensesCat: '', 
                eGift: false,
                message: ''
            }
        }
    }


}

