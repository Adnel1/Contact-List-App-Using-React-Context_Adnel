import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const EditContact = () => {
	const {store, actions} = useContext(Context);
	const [ inputNameUpdate, setInputNameUpdate ] = useState("");
	const [ inputEmailUpdate, setInputEmailUpdate ] = useState("");
	const [ inputPhoneUpdate, setInputPhoneUpdate ] = useState("");
	const [ inputAddressUpdate, setInputAdressUpdate ] = useState("");

	return (
		<div className="d-flex align-items-center flex-column">
			<div className="col-md-6">
				<h1 className="text-center text-secondary mb-4">Edit contact</h1>
				<form className="mb-3">
					<div className="form-group mb-3">
						<label htmlFor="inputEmail4">Full Name</label>
						<input onChange={(event) => setInputNameUpdate(event.target.value)} value={inputNameUpdate} type="text" className="form-control" placeholder="John Smith"></input>
					</div>
					<div className="form-row mb-3">
						<label htmlFor="inputPassword4">Email</label>
						<input onChange={(event) => setInputEmailUpdate(event.target.value)} value={inputEmailUpdate} type="email" className="form-control" placeholder="example@email.com"></input>
					</div>
					<div className="form-row mb-3">
						<label htmlFor="inputAddress">Phone</label>
						<input onChange={(event) => setInputPhoneUpdate(event.target.value)} value={inputPhoneUpdate} type="text" className="form-control" placeholder="555 555 555"></input>
					</div>
					<div className="form-row mb-3">
						<label htmlFor="inputAddress">Address</label>
						<input onChange={(event) => setInputAdressUpdate(event.target.value)} value={inputAddressUpdate} type="text" className="form-control" placeholder="1234 Main St"></input>
					</div>
					<button onClick={() => actions.updateContactData(inputNameUpdate, inputEmailUpdate, inputAddressUpdate, inputPhoneUpdate)} type="submit" className="btn btn-primary col-12">Update</button>
				</form>
				<Link to="/">
					<button className="btn btn-secondary col-12">Back to contacts</button>
				</Link>
			</div>
		</div>
	);
};
