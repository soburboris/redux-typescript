import React from 'react'
import { connect } from 'react-redux'
import {Todo , fetchTodos, deleteTodo} from '../actions/'
import { StoreState } from '../reducers'

interface AppProps {
	todos: Todo[]
	fetchTodos: Function
	deleteTodo: typeof deleteTodo
}

class _App extends React.Component<AppProps> {

	onButtonClick = ():void => {
		this.props.fetchTodos()
	}

	onTodoClick = (id:number): void => {
		this.props.deleteTodo(id)
	}

	listTodos (item:Todo): JSX.Element{
		return(
			<li onClick={ () => this.onTodoClick(item.id)} key ={item.id}>{item.title}</li>
		)
	}


	render (){
		const {todos} = this.props
		 return (
			 <div>
				 <button onClick ={this.onButtonClick}>Fetch</button>
				 {todos && 
				 <div>
					 <ul>{todos.map((item) => this.listTodos(item))}</ul>
				 </div> }
			 </div>
		 )
	}
}

const mapStateToProps = ({todos}: StoreState): {todos: Todo[]} => {
	return { todos}
}

const mapDispatchToProps = {
	fetchTodos,
	deleteTodo
}

export const App = connect(mapStateToProps, mapDispatchToProps)(_App)