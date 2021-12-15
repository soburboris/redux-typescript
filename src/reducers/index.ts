import {combineReducers} from 'redux'
import {todosReducer} from './todos'
import { Todo } from '../actions'

export interface StoreState {
	todosReducer: Todo[]
}

export const reducers = combineReducers<StoreState>({
	todosReducer
})