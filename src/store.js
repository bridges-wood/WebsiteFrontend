import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import projectReducer from './reducers/projectReducer'
import loginReducer from './reducers/loginReducer'

const rootReducer = combineReducers({
	projects: projectReducer,
	user: loginReducer
})

const store = createStore(
	rootReducer,
	composeWithDevTools(
		applyMiddleware(thunk),
	),
)

store.subscribe(() => {
	console.log('store.getState() :>> ', store.getState())
})

export default store
