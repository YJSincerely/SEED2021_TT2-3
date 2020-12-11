import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";

export const AccountBalance = () => {
	const [accounts, setAccounts] = useState([]);
	const location = useLocation();
	const history = useHistory();

	console.log(location);

	if (
		location.state === undefined ||
		Object.keys(location.state).length === 0
	) {
		history.push("/loginPage");
		// console.log(location);
	}

	useEffect(() => {
		fetch("/accounts/view", {
			method: "POST",
			headers: {
				"x-api-key": "4v1iqyh5th8eKfYO191bZ5IX3DW4SDWj1E0NmF4t",
			},
			body: JSON.stringify({
				custID: location.state.custID,
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
						<li>
							{account.linked ? (
								<b>This account is linked to your E-wallet</b>
							) : null}
						</li>
					</ul>
				);
			})}
		</div>
	);
};
