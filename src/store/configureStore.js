import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { reduxFirestore, getFirestore } from 'redux-firestore'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import fbConfig from '../config/fbConfig'

import todoReducer from '../reducers/todo'
const configureStore = () => {
    const store = createStore(
        combineReducers({
            todo: todoReducer
        }),
        compose(
            applyMiddleware(
                thunk.withExtraArgument({getFirebase, getFirestore})
            ),
            reduxFirestore(fbConfig),
            reactReduxFirebase(fbConfig)
        )
    )
    return store
}

export default configureStore