import React from 'react';
import ReactDOM from 'react-dom';

// Create a new component. This component should produce some HTML
const App = () => {
	return <div>Hello, World!</div>;
}

// Take ths component's generated HTML and put that on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));