import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AccountBalance } from "./components/AccountBalance";
import { TransactionHistory } from "./components/TransactionHistory";
import { Navbar } from "./components/Navbar";
import Login from "./components/Login";

function App() {
	return (
		<div className="App">
			<Router>
				<Navbar />
				<Switch>
					<Route exact path="/">
						<h1>Welcome To E-Wallet</h1>
					</Route>
					<Route path="/accountBalance">
						<AccountBalance />
					</Route>
					<Route path="/transactionHistory">
						<TransactionHistory />
					</Route>
					<Route path="/loginPage">
						<Login />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
