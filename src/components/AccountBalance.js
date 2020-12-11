import React, { useState, useEffect } from "react";

export const AccountBalance = () => {
	const [accounts, setAccounts] = useState([]);

	useEffect(() => {
		fetch("/accounts/view", {
			method: "POST",
			headers: {
				"x-api-key": "4v1iqyh5th8eKfYO191bZ5IX3DW4SDWj1E0NmF4t",
			},
			body: JSON.stringify({
				custID: 7,
			}),
		})
			.then((response) => response.json())
			.then((data) => {
				setAccounts(data);
				console.log(data);
			});
	}, []);
	return (
		<div>
			{accounts.map((account) => {
				return (
					<ul>
						<li>{account.accountName}</li>
						<li>{account.availableBal}</li>
						<li>{account.accountNumber}</li>
						<li>{account.linked.toString()}</li>
					</ul>
				);
			})}
		</div>
	);
};
