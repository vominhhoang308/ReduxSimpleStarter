import React, { Component } from 'react'; // always import as when the component that has jsx compiled into vanilla js, it be comes React.createElement...

class SearchBar extends Component {
	constructor(props){
		super(props);

		this.state = {term: ''};
	}

	render() {
		return (
			<div className="search-bar">
				<input
					value = {this.state.term}
					onChange={ (event) => this.onInputChange( event.target.value ) }
				/>
			</div>
		);
	}

	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term); //what is this term
	}
}

export default SearchBar;
