import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark ps-3 pe-3 mb-4">
			<div className="container">
				<a className="navbar-brand" href="#">Contact List</a>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div className="navbar-nav">
					<a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
					</div>
				</div>
			</div>
		</nav>
	);
};
