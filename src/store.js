import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './TodoSlice/index'

export default configureStore ({
    reducer: {
        todos: todoReducer
    }
})