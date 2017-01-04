import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCytrX3qMRLSSL1t9yBAvaA3feBbs5kXKo';

// Create a new component. This component should produce some HTML
const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
	);
}

// Take ths component's generated HTML and put that on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));