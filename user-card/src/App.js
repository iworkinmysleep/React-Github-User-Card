import React, { Component } from "react";
import UserCard from "./components/UserCard";
import Followers from "./components/Followers";
import "./App.css";
import axios from "axios";

class App extends Component {
	constructor() {
		super();
		this.state = {
			user: [],
			followers: [],
		};
	}

	componentDidMount() {
		axios
			.get("https://api.github.com/users/iworkinmysleep")
			.then((res) => {
				this.setState({
					user: res.data,
				});
			})
			.catch((err) => console.log(err));
	}

	render() {
		return (
			<>
				<header className="header">
					<img
						className="lambda_logo"
						src="https://miro.medium.com/fit/c/160/160/1*iTABE417EkZDwRv9Uj91Qg.png"
						alt="lambda school logo"></img>
					<h1>'S</h1>
					<img
						className="github_logo"
						src="https://github.blog/wp-content/uploads/2013/04/074d0b06-a5e3-11e2-8b7f-9f09eb2ddfae.jpg?resize=1234%2C701"
						alt="github logo"></img>
				</header>

				<div className="card_container">
					<UserCard user={this.state.user} />
					<Followers followers={this.state.followers} />
				</div>
			</>
		);
	}
}

export default App;
