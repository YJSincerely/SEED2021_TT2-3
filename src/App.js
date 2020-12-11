import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AccountBalance } from "./components/AccountBalance";
import { Navbar } from "./components/Navbar";
import Login from './components/Login';

function App() {
	return (
		<div className="App">
			<Router>
				<Navbar />
				<Switch>
					<Route exact path="/">
						<Login />
					</Route>
					<Route path="/accountBalance">
						<AccountBalance />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
