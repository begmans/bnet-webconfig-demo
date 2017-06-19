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
		const lists = function(lists){
			var res = [];
			for (let i in lists) {
					res.push(<List key={i} header={i} items={lists[i]}/>);
			}
			return res;
		}(this.state.lists);

		return (
			<div className="board">
				{lists}
			</div>
		);
	}
}

export default Board;
