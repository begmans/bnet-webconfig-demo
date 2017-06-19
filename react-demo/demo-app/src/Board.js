import React, { Component } from 'react';
import List from "./List.js";
import './Board.css';

class Board extends Component {
	constructor() {
		super();
		this.state = {
			lists: {
				colOne: [
					'Message 1',
					'Message 2',
					'Message 3',
				],
				colTwo: [
					'Message a',
					'Message b',
					'Message c'
				],
				colOneBis: [
					'Message 4',
					'Message 5',
					'Message 6',
				],
				colTwoBis: [
					'Message d',
					'Message e',
					'Message f'
				] 
			}
		};
	}

	render() {
		const lists = Object.entries(this.state.lists).map(([key, value]) => <List key={key} header={key} items={value}/>);

		return (
			<div className="board">
				{lists}
			</div>
		);
	}
}

export default Board;
