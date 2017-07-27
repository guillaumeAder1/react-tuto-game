import React from 'react';
import './index.css';

export default class UserDetails extends React.Component {


	getAllInfo() {
		const info = this.props.user;
		let htmlInfos;
		if (!info) {
			htmlInfos = '';
		} else {
			htmlInfos = Object.getOwnPropertyNames(info).filter((val, idx, array) => {
				return val !== 'company' && val !== 'address';
			}).map((val, idx, array) => {
				console.log(val + ' -> ' + info[val]);
				return (
					<div key={idx}>
						<strong>{val}: </strong>
						<span>{info[val]}</span>
					</div>
				);
			});
		}
		return htmlInfos;
	}

	render() {
		const details = this.getAllInfo();
		return (
			<div>
				<h5>details user</h5>
				<div>{details}</div>
			</div>
		)
	}
	// https://medium.com/learning-new-stuff/building-your-second-react-js-app-eb66924b3774
}