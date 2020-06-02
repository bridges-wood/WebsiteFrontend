import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import projectReducer from './reducers/projectReducer'
import loginReducer from './reducers/loginReducer'
import notificationReducer from './reducers/notificationsReducer'

const rootReducer = combineReducers({
	projects: projectReducer,
	user: loginReducer,
	notification: notificationReducer
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

export type RootState = ReturnType<typeof rootReducer>

export default store
