import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AccountBalance } from "./components/AccountBalance";
import { TransactionHistory } from "./components/TransactionHistory";

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/">
						Home Page
					</Route>
					<Route path="/accountBalance">
						<AccountBalance />
					</Route>
                    <Route path="/transactionHistory">
						<TransactionHistory />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
