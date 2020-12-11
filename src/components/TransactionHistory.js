import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";

export const TransactionHistory = () => {
	const [transactions, setTransactions] = useState([]);
	const location = useLocation();
	const history = useHistory();

	if (
		location.state === undefined ||
		Object.keys(location.state).length === 0
	) {
		history.push("/loginPage");
		console.log(location);
	}

	useEffect(() => {
		fetch("/transaction/view", {
			method: "POST",
			headers: {
				"x-api-key": "4v1iqyh5th8eKfYO191bZ5IX3DW4SDWj1E0NmF4t",
			},
			body: JSON.stringify({
				custID: 3,
			}),
		})
			.then((response) => response.json())
			.then((data) => {
				setTransactions(data);
				// console.log(data);
			});
	}, []);
	return (
		<div>
			<table>
				<tr>
					<th>No.</th>
					<th>Amount</th>
					<th>custID</th>
					<th>dateTime</th>
					<th>eGift</th>
					<th>expensesCat</th>
					<th>message</th>
					<th>payeeID</th>
				</tr>
				{transactions.map((transaction, index) => {
					return (
						<tr>
							<td>{index + 1}</td>
							<td>{transaction.amount}</td>
							<td>{transaction.custID}</td>
							<td>{transaction.dateTime}</td>
							<td>{transaction.eGift ? "True" : "False"}</td>
							<td>{transaction.expensesCat}</td>
							<td>{transaction.message}</td>
							<td>{transaction.payeeID}</td>
						</tr>
					);
				})}
			</table>
		</div>
	);
};
