import React from 'react';
import './index.css';
import UserDetails from './UserDetails.js';

export default class ListContainer extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			current: '',
		}
	}

	getCurrentElement(index) {
		console.log(this.props.value[index].username)
		this.setState({
			current: this.props.value[index]
		});
	}

	getItems() {
		let res;
		let values = this.props.value;
		if (!values) {
			res = '';
		} else {
			res = this.props.value.map((val, i) => {
				return (<li key={i} onClick={() => this.getCurrentElement(i)}>{val.username}</li>)
			})
		}
		return res;
	}
	render() {
		console.log(this.props.value)
		const list = this.getItems();
		const displayDetails = (this.props.userDetails) ? <UserDetails user={this.state.current} /> : '';
		return (
			<div>
				<h3>{this.props.name}</h3>
				<ul>
					{list}
				</ul>
				{displayDetails}
			</div>
		);
	}
}