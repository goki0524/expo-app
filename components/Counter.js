import React from 'react';
import { Text } from 'react-native';

export class Counter extends React.Componet {

	state = {count:0}

	componentDidMount() {
		setInterval(() => {
			this.setState({count: this.state.count +1}, 1000)
		})
	}
	
	render() {
		const {count} = this.state
		const {color, size} = this.props	

		return (
			<Text style={{color, size}}>
				{count}
			</Text>
		)
	}
}