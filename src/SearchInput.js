import React from 'react';
import './index.css';



export default class SearchInput extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			name: ''
		};
	}

	searchEvent(evt) {
		console.log(evt)
		this.props.onSearchUser(this.state.name);
	}
	render() {

		return (
			<div className="input">
				<span>Search: </span>
				<input type="text"
					//value={this.state.name} `
					onChange={evt => this.getValue(evt)}
				/>
				<button onClick={evt => this.searchEvent(evt)}>Filter</button>
				<button>Create</button>

			</div>
		);
	}

	componentDidMount() {

	}

	getValue(e) {

		this.setState({
			name: e.target.value
		});
		// this.props.onUpdate(e.target.value);
		// console.log("THIS input user", this)
	}
}