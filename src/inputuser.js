import React from 'react';
import './index.css';
import axios from 'axios';

export default class InputUserLocal extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			name: ''
		};
	}
	render() {
		console.log(this.props)
		return (
			<div className="input">
				<input type="text" value={this.state.name} onChange={evt => this.getValue(evt)} />
			</div>
		);
	}

	componentDidMount() {
		axios.get('./src/data.json')
			.then(res => {
				console.log(res)
				// const posts = res.data.data.children.map(obj => obj.data);
				// this.setState({ posts });
			});
	}

	getValue(e) {
		console.log(e.target.value);
		this.setState({
			name: e.target.value
		});
		this.props.onUpdate(e.target.value);
		console.log("THIS input user", this)
	}
}