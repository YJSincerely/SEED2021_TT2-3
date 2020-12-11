import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<div id="nav">
			<ul className="nav-links">
				<li className="nav-link">
					<Link className="navigation-link" to={"/"}>
						Landing
					</Link>
				</li>
				<li className="nav-link">
					<Link className="navigation-link" to={"/accountBalance"}>
						Account Balance
					</Link>
				</li>
			</ul>
		</div>
	);
};
