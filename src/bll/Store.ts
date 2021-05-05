import { applyMiddleware, combineReducers, createStore, compose } from 'redux'
import { Reducer } from './Reducer'
import thunkMiddleware from 'redux-thunk'


let redusers = combineReducers (
    {
        app: Reducer        
    }
)

export type AppStateType = ReturnType<typeof redusers>

export let store = createStore (redusers, applyMiddleware (thunkMiddleware))
