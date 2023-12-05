import React from 'react'; //Import react
import './list.css';
//Array of countries
const countries = [
	{abbr:'AL', country:'Albania'},
	{abbr:'DK', country:'Denmark'},
	{abbr:'IS', country:'Iceland'},
	{abbr:'PK', country:'Pakistan'},
	{abbr:'US', country:'Unites States of America'},

];
function SelectList() {
	return ( 
		<>
			<label for="selCountries">Select a Country:</label>
			<div className="select">
				<select id="selCountries">
					{countries.map(function(item) { {/*Loop over array countries */}
						{/* Must use React key attribute for select lists */}
						return <option key={item.abbr} value={item.abbr}>{item.country}</option>;
					})}
				</select>
			<span className="focus"></span>
			</div>
		</>
	)
};
export default SelectList;


