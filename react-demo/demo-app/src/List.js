import React, { Component } from 'react';
import './List.css';

class List extends Component {
	render() {
		const items = this.props.items.map((itemValue) => <li key={itemValue} className="list-item">{itemValue}</li> );
		return (
			<div className="container">
				<h3 className="container-header">{this.props.header}</h3>
				<ul className="list">
					{items}
				</ul>
			</div>
		);
	}
}

export default List;