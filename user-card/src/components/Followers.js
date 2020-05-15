import React from "react";

function Followers({ followers }) {
	console.log(followers);
	return (
		<>
			{followers.map((url, index) => (
				<div className="card">
					<img alt="bio pic" src={url.avatar_url} />
					<div className="card-info">
						<h3>{url.name}</h3>
						<p>{url.login}</p>
						<p>Location: {url.location}</p>
						<p>Bio: {url.bio}</p>
					</div>
				</div>
			))}
		</>
	);
}

export default Followers;
