import React from 'react';
import './index.css';
import ListContainer from './listContainer.js';
import SearchInput from './SearchInput.js';

export default class ListUser extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			data: [],
			strSearch: '',
		}
	}

	searchUserInList = (str) => {
		console.log(str);
		this.setState({
			strSearch: str
		});
		this.filterList();
	}

	filterList = () => {
		const value = this.state.strSearch.toLowerCase();
		const list = this.state.data.filter((item, i) => {
			return item.username.toLowerCase().indexOf(value) > -1;
		})
		return list;
	}

	render() {
		const validNames = this.filterList();
		return (
			<div>
				<h1>List User component</h1>
				<SearchInput onSearchUser={this.searchUserInList} />
				<ListContainer name="full list" value={this.state.data} userDetails={true} />
				<ListContainer name="Filtered" value={validNames} userDetails={false} />
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