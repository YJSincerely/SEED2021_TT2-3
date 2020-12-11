import React, {Component} from 'react';

class Login extends Component {
  constructor(props){
    super(props);

    this.state = {
      username: '',
      password: '',
      buttonState: 'inactive',
      userID: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(event, stateName){
    if(stateName==='username'){
      this.setState({username: event.target.value});
    }
    else{
      this.setState({password: event.target.value});
    }

    if(this.state.username!='' && this.state.password!=''){
      this.setState({buttonState: 'active'})
    }
    console.log(this.state);
  };

  handleSubmit(event){
    fetch("/login", {
			method: "POST",
			headers: {
				"x-api-key": "4v1iqyh5th8eKfYO191bZ5IX3DW4SDWj1E0NmF4t",
			},
			body: JSON.stringify({
				username: this.state.username,
        password: this.state.password
			}),
		})
			.then((response) => response.json())
			.then((data) => {
				this.setState({userID: data.custID});
				console.log(data);
			});
	}

  render(){
    return (
      <div className="login-page">
        <div className="login-title">
          <h1>DBS E-Wallet</h1>
          <div className="login-form">
            <form>
              <label>USERNAME</label>
              <input className="login-username"
                     onChange={e=>this.handleChange(e, 'username')}
                     value={this.state.username}
              />
              <label>PASSWORD</label>
              <input className="login-password"
                     onChange={e=>this.handleChange(e, 'password')}
                     value={this.state.password}
              />
            </form>
            <button className={"login-btn button-"+this.state.buttonState}
                    onClick={this.handleSubmit}
            >
              LOGIN
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
