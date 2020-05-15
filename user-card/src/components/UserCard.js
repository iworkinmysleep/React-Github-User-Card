import React from "react";

const UserCard = ({user}) => {

		return (
			<>
			
			<div className="card">
				<img alt='bio pic' src={user.avatar_url}/>
				<div className="card-info">
					<h3>{user.name}</h3>
					<p>{user.login}</p>
					<p>Location: {user.location}</p>
					<p>Followers: {user.followers}</p>
					<p>Bio: {user.bio}</p>
				</div>
			</div>
			</>
		);
	
}

export default UserCard;
