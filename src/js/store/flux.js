import { useRouteLoaderData } from "react-router";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			modal: [
				{
					open: true,
					close: false
				}
			],
			contacts: [],
			modalOpen: false,
			contactId: ""
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			// This function loads the data currently on the API
			loadSomeData: () => {
				fetch('https://playground.4geeks.com/apis/fake/contact/agenda/adnel_agenda')
				.then(resp => resp.json())
				.then(data => {
					console.log(data);
					setStore({contacts:data})
				})
				.catch(
					error => console.error("There was an error: ", error)
				)
			},
			// This function pushes data to the API
			pushSomeData: (inputName, inputEmail, inputAddress, inputPhone) => {
				fetch('https://playground.4geeks.com/apis/fake/contact/', {
				method: "POST",
				body: JSON.stringify({
					"full_name": inputName,
					"email": inputEmail,
					"agenda_slug": "adnel_agenda",
					"address": inputAddress,
					"phone": inputPhone
				}),
				headers: {
					"Content-Type": "application/json"
				}
				})
				.catch(
					error => console.error("There was an error: ", error)
				)
			},
			// This function updates a contact data
			updateContactData: (inputNameUpdate, inputEmailUpdate, inputAddressUpdate, inputPhoneUpdate) => {
				const store = getStore();
				const id = store.contactId;

				fetch('https://playground.4geeks.com/apis/fake/contact/' + id, {
					method: "PUT",
					body: JSON.stringify({
						"full_name": inputNameUpdate,
						"email": inputEmailUpdate,
						"agenda_slug": "adnel_agenda",
						"address": inputAddressUpdate,
						"phone": inputPhoneUpdate
					}),
					headers: {
						"Content-Type": "application/json"
					}
				})
				.then(resp => {
					if (!resp.ok) throw Error(resp.statusText);
					return resp.json(); // Return JSON data from the response
				})
				.then(result => {
					console.log("Success", result);
				})
				.catch(error => {
					console.log(error);
				});

			},
			// This function deletes data from the API and then refreshes the page
			deleteSomeData: (state) => {
				const store = getStore();
				const id = store.contactId;

				fetch('https://playground.4geeks.com/apis/fake/contact/' + id, {
					method: "DELETE",
					body: JSON.stringify(id),
					headers: {
						"Content-Type": "application/json"
					}
				})
				.then(resp => {
					if (!resp.ok) throw Error(resp.statusText);
					return resp.json(); // Return JSON data from the response
				})
				.then(result => {
					console.log("Success", result);
				})
				.catch(error => {
					console.log(error);
				});				
				
				window.location.reload();

				setStore(
					{
						modalOpen: state
					}
				);

			},
			// This function toggles the modal
			toggleModal: (state, contactId) => {
				setStore(
					{
						modalOpen: state, 
						contactId
					}
				)
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
