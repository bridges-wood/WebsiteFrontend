import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import projectReducer from './reducers/projects/projectReducer'
import loginReducer from './reducers/login/loginReducer'
import notificationReducer from './reducers/notification/notificationsReducer'
import themeReducer from './reducers/theme/themeReducer'

const rootReducer = combineReducers({
	projects: projectReducer,
	user: loginReducer,
	notification: notificationReducer,
	theme: themeReducer
})

const store = createStore(
	rootReducer,
	composeWithDevTools(
		applyMiddleware(thunk),
	),
)

// store.subscribe(() => {
// 	console.log('store.getState() :>> ', store.getState())
// })

export type RootState = ReturnType<typeof rootReducer>

export default store
