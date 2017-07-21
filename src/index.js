import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './header.js';
import InputUserLocal from './inputuser.js';

function Square(props) {
	return (
		<button className="square" onClick={props.onClick}>
			{props.value}
		</button>
	);
}

class Board extends React.Component {
	constructor() {
		super();
		this.state = {
			squares: Array(9).fill(null),
			xIsNext: true
		};
	}
	renderSquare(i) {
		return <Square value={this.state.squares[i]}
			onClick={() => this.handleClick(i)}
		/>;
	}
	handleClick(i) {
		// slice to make a copy or array
		const squares = this.state.squares.slice();
		squares[i] = this.state.xIsNext ? 'X' : 'O';
		this.setState({ squares: squares, xIsNext: !this.state.xIsNext });
	}

	render() {
		const val = (this.state.xIsNext) ? 'X' : 'O';
		//const name = (this.state.xIsNext) ? 'Guillaume' : 'Gabriel';
		const status = 'Next player: ' + val;

		return (
			<div>
				<Header name={this.props.gamer} />
				<div className="status">{status}</div>
				<div className="board-row">
					{this.renderSquare(0)}
					{this.renderSquare(1)}
					{this.renderSquare(2)}
				</div>
				<div className="board-row">
					{this.renderSquare(3)}
					{this.renderSquare(4)}
					{this.renderSquare(5)}
				</div>
				<div className="board-row">
					{this.renderSquare(6)}
					{this.renderSquare(7)}
					{this.renderSquare(8)}
				</div>
			</div>
		);
	}
}

class Game extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			inputUser: ''
		}



	}

	getUserName = (value) => {
		console.log(value)
		this.setState({
			inputUser: value
		});
		//this.props.user = value;
	}
	render() {
		return (
			<div className="game">
				<InputUserLocal
					onUpdate={this.getUserName} />
				<div className="game-board">
					<Board gamer={this.state.inputUser} />
				</div>
				<div className="game-info">
					<div>{/* status */}</div>
					<ol>{/* TODO */}</ol>
				</div>
			</div>
		);
	}
}

// ========================================

ReactDOM.render(
	<Game user='toto' />, document.getElementById('root'));
