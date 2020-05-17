import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import projectReducer from './reducers/projectReducer'

const store = createStore(
	projectReducer,
	composeWithDevTools(
		applyMiddleware(thunk),
	),
)

store.subscribe(() => {
	console.log('store.getState() :>> ', store.getState())
})

export default store
