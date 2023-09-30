import { applyMiddleware, legacy_createStore as createStore } from "redux"
import thunk from "redux-thunk"
import jobReducer from "./reducer/jobReducer"

const store =  createStore(jobReducer, applyMiddleware(thunk))

export default store
