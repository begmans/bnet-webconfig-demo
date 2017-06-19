import React, { Component } from 'react';
import Dragula from 'react-dragula';
import './List.css';

class List extends Component {
	render() {
		const items = this.props.items.map((itemValue) => <li key={itemValue} className="list-item">{itemValue}</li> );
		return (
			<div className="container">
				<h3 className="container-header">{this.props.header}</h3>
				<ul className="list" data-bag="bagOne" ref={this.dragulaDecorator}>
					{items}
				</ul>
			</div>
		);
	}

  	dragulaDecorator = (componentBackingInstance) => {
    	if (componentBackingInstance) {
      		const options = { mirrorContainer: document.body };
			const bag = componentBackingInstance.getAttribute('data-bag');
			if(bag !== null) {
				Dragula.drakes = Dragula.drakes || {};
				const drake = Dragula.drakes[bag] || Dragula([], options);
				drake.containers.push(componentBackingInstance);
				Dragula.drakes[bag] = drake;
			} else {
				Dragula([componentBackingInstance], options);
			}
    	}
  	}
}

export default List;