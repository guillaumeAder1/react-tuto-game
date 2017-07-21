import React from 'react';
import './index.css';

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

	getValue(e) {
		console.log(e.target.value);
		this.setState({
			name: e.target.value
		});
		this.props.onUpdate(e.target.value);
		console.log("THIS input user", this)
	}
}