import {configureStore, combineReducers} from "@reduxjs/toolkit";
import bookReducer from './bookSlice';
import carReducer from './carSlice';
import modalReducer from './modalSlice';



const rootReducer = combineReducers({
book: bookReducer,
car: carReducer,
modal: modalReducer

});

const store = configureStore({
    reducer:rootReducer, 


})

export default store;