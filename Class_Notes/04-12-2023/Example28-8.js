import React from 'react'; //Import react 
import ReactDOM from 'react-dom/client'; //Import react client
//Import component
import List from './list.js';
function Page() {
	return ( //Make sure return is followed by parenthesis
		<>
			<h1>List Example</h1>
			<hr />
			<List />
		</>
	)
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Page />);


