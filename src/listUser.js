import React from 'react';
import './index.css';
import ListContainer from './listContainer.js';

export default class ListUser extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			data: null
		}
	}
	render() {
		return (
			<div>
				<h1>List user component</h1>
				<ListContainer value={this.state.data} />
			</div>
		);
	}
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
			return response.json()
		}).then(json => {
			console.log('parsed json', json)
			this.setState({ data: json })
			console.log(this.state)
		}).catch((ex) => {
			console.log('parsing failed', ex)
		})
	}

}