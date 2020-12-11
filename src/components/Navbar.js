import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";

export const Navbar = () => {
	const location = useLocation();
	const history = useHistory();

	return (
		<div id="nav">
			<ul className="nav-links">
				<li className="nav-link">
					<Link
						className="navigation-link"
						to={{ pathname: "/", state: { ...location.state } }}
					>
						Landing
					</Link>
				</li>
				<li className="nav-link">
					<Link
						className="navigation-link"
						to={{
							pathname: "/accountBalance",
							state: { ...location.state },
						}}
					>
						Account Balances
					</Link>
				</li>
				<li className="nav-link">
					<Link
						className="navigation-link"
						to={{
							pathname: "/loginPage",
							state: { ...location.state },
						}}
					>
						Log In
					</Link>
				</li>
				<li className="nav-link">
					<Link
						className="navigation-link"
						to={{
							pathname: "/transactionHistory",
							state: { ...location.state },
						}}
					>
						Transaction History
					</Link>
				</li>
			</ul>
		</div>
	);
};
