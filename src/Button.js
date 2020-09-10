import React, { Component } from "react";

class Button extends Component {
	constructor(props) {
		super(props);

		this.state = {
			count: 0
		};
	}

	increment = () => {
		this.setState({ count: this.state.count + 1 });
	};

	decrement = () => {
		this.setState({ count: this.state.count - 1 });
	};

	//This incorrect code will still cause tests to pass
	// <button onClick={this.incremen}>
	//   Clicked: {this.state.count}
	// </button>

	render() {
		return (
			<div>
				<button
					className="counter-button"
					onClick={this.incremen}
				>
					Clicked: {this.state.count}
				</button>

				<button
					className="counter-button"
					onClick={this.decrement}
				>
					Clicked: {this.state.count}
				</button>
			</div>
		);
	}
}

export default Button;
