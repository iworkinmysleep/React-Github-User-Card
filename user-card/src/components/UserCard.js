import React, { Component } from "react";

class UserCard extends Component {
	render() {
		return (
			<div class="card">
				<img src="" />
				<div class="card-info">
					<h3 class="name">user's name</h3>
					<p class="username">user name</p>
					<p>Location:</p>
					<p>
						Profile:
						<a href="#">address</a>
					</p>
					<p>Followers:</p>
					<p>Following:</p>
					<p>Bio:</p>
				</div>
			</div>
		);
	}
}

export default UserCard;
