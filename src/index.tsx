import { render } from '@testing-library/react'
import React from 'react'
import  ReactDOM  from 'react-dom'

interface AppProps {
	color?: string
}

// interface AppState {
// 	counter: number
// }



class App extends React.Component<AppProps> {

	state = { counter: 0}

	// constructor(props: AppProps) {
	// 	super(props)

	// 	this.state = {counter: 0}
	// }

	

	onInc ():void  {
		this.setState({counter: this.state.counter + 1})

	}

	onDec ():void {
		this.setState({counter: this.state.counter - 1})
	}


	render() {
			return (
				<div>
					<button onClick={this.onInc.bind(this)}>+</button>
					<button onClick={this.onDec.bind(this)}>-</button>
					<span>{this.state.counter}</span>
				</div>)
	}
}

ReactDOM.render(<App color ='white'/>, document.querySelector('#root'))