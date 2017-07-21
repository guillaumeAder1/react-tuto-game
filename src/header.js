import React from 'react';

import './index.css';

export default class Header extends React.Component {
	render() {
		return (
			<div className="hader">
				Hello <b>{this.props.name}</b>, this is your turn!
			</div>
		);
	}
}