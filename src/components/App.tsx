import React from 'react'
import { connect } from 'react-redux'
import {Todo , fetchTodos, deleteTodo} from '../actions/'
import { StoreState } from '../reducers'

interface AppProps {
	todosReducer: Todo[]
	fetchTodos: Function
	deleteTodo: typeof deleteTodo
}

interface AppState {
	fetching: boolean
}


class _App extends React.Component<AppProps, AppState> {

	constructor (props:AppProps) {
		super(props)
		this.state = {fetching: false}
	}

	
	componentDidUpdate(prevProps: AppProps):void {
		if (!prevProps.todosReducer.length && this.props.todosReducer.length){
			this.setState({fetching: false})
	}
	
}

	onButtonClick = ():void => {
	
			this.props.fetchTodos()
		this.setState({fetching: true})
		
		setTimeout(() => {
this.setState({fetching: false})
		},500)
		
	
		
	}

	onTodoClick = (id:number): void => {
		this.props.deleteTodo(id)
	}

	renderTodos (item:Todo): JSX.Element{
		return(
			<li onClick={ () => this.onTodoClick(item.id)} key ={item.id}>{item.title}</li>
		)
	}


	render (){
		const {todosReducer} = this.props
		 return (
			 <div>
				 <button onClick ={this.onButtonClick}>Fetch</button>
				 {this.state.fetching?<h3>Loading</h3> :null}
				 {todosReducer && !this.state.fetching &&
				 <div>
					 <ul>{todosReducer.map((item) => this.renderTodos(item))}</ul>
				 </div> }
			 </div>
		 )
	}
}

const mapStateToProps = ({todosReducer}: StoreState): {todosReducer: Todo[]} => {
	return { todosReducer}
}

const mapDispatchToProps = {
	fetchTodos,
	deleteTodo
}

export const App = connect(mapStateToProps, mapDispatchToProps)(_App)