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
			contacts: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
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
			pushSomeData: (inputName, inputEmail, inputAddress, inputPhone) => {
				console.log("It Works!!!");

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
			deleteSomeData: () => {
				console.log("This will delete some data");
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
