import React , { useState } from 'react'; //Import react, useState 
import ReactDOM from 'react-dom/client'; //Import react client

function FormNameAge() {
	const [inputs, setInputs] = useState({}); //Use useState
	//Event handler for onChange event
	const fFormUpdate = function(event) {
		const name = event.target.name; //Form element name attribute
		const value = event.target.value; //Form element value attribute
		console.log('name = ' + name + '   value = ' + value);
		setInputs(function(values){ //useState setter setInputs
				return {...values, [name]: value }//Update value, assign into attribute [name]
			}
		)
	}
	//Upon form submission event onSubmit invoke event handler
	const fFormSubmit = function(event) {
		event.preventDefault(); //Do not follow default action
		alert("Updated Form Elements: " + inputs.username + " " + inputs.age);
	}
	//Return component
	return (
		<form onSubmit={fFormSubmit}>{/*Form submit event handler function */}
			<label htmlFor="idusername" style={{display:"inline-block", width:"125px"}}>Enter your name:</label>
			<input type="text" name="username" id="idusername" value={inputs.username || ""} onChange={fFormUpdate} />
			<br />
			<label htmlFor="idage" style={{display:"inline-block", width:"125px"}}>Enter your age:</label>
			<input 	type="number" name="age" id="idage" value={inputs.age || ""} onChange={fFormUpdate} />
			<hr />
			<input type="submit" value="Submit" />
		</form>
	)
}

const root = ReactDOM.createRoot(document.getElementById('root')); //Get root element
root.render(<FormNameAge />); //Render component
