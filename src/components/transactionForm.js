import React from "react";

export default class TransactionForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			transactionDetail: {
				custID: 4, //take in from props
				payeeID: "",
				dateTime: "",
				amount: "",
				expensesCat: "",
				eGift: false,
				message: "",
			},
		};
	}

	componentDidMount() {
		// if (
		// 	this.props.location.state === undefined ||
		// 	Object.keys(this.props.location.state).length === 0
		// ) {
		// 	this.props.history.push("/loginPage");
		// 	// console.log(location);
		// }

		// const { custID } = this.props.location.state;
		// console.log(custID);
		console.log("location state");
		console.log(this.props);
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
		transactionDetail.eGift =
			transactionDetail.eGift === "True" ? true : false;
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
		console.log("props");
		console.log(this.state);

		return (
			<div>
				<table style={{ border: "1px solid" }}>
					<tr>
						<td>
							<label>Payee ID:</label>
						</td>
						<td>
							{" "}
							<input
								type="text"
								value={this.state.transactionDetail.payeeID}
								onChange={this.handlePayeeIDChanged.bind(this)}
							/>
						</td>
					</tr>
					<tr>
						<td>
							<label>Date Time:</label>
						</td>
						<td>
							{" "}
							<input
								type="text"
								value={this.state.transactionDetail.dateTime}
								onChange={this.handleDateChanged.bind(this)}
							/>
						</td>
					</tr>
					<tr>
						<td>
							<label>Amount:</label>
						</td>
						<td>
							{" "}
							<input
								type="text"
								value={this.state.transactionDetail.amount}
								onChange={this.handleAmountChanged.bind(this)}
							/>
						</td>
					</tr>
					<tr>
						<td>
							<label>Expenses Category:</label>
						</td>
						<td>
							{" "}
							<input
								type="text"
								value={this.state.transactionDetail.expensesCat}
								onChange={this.handleExpensesCatChanged.bind(
									this
								)}
							/>
						</td>
					</tr>
					<tr>
						<td>
							<label>E-Gift:</label>
						</td>
						<td>
							{" "}
							<select
								value={this.state.transactionDetail.eGift}
								onChange={this.handleEGiftChanged.bind(this)}
							>
								<option value="True">True</option>
								<option value="False">False</option>
							</select>
						</td>
					</tr>
					<tr>
						<td>
							<label>Message:</label>
						</td>
						<td>
							{" "}
							<input
								type="text"
								value={this.state.transactionDetail.message}
								onChange={this.handleMessageChanged.bind(this)}
							/>
						</td>
					</tr>
					<tr>
						<td></td>
						<td>
							{" "}
							<button onClick={this.handleSubmit.bind(this)}>
								Add Transaction
							</button>
						</td>
					</tr>
				</table>
			</div>
		);
	}
}
