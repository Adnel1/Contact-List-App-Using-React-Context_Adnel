import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav class="navbar navbar-expand-lg navbar-dark bg-dark ps-3 pe-3 mb-4">
			<div className="container">
				<a class="navbar-brand" href="#">Contact List</a>
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div class="navbar-nav">
					<a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
					<a class="nav-item nav-link disabled" href="#">Features</a>
					<a class="nav-item nav-link disabled" href="#">Pricing</a>
					</div>
				</div>
			</div>
		</nav>
	);
};
