import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    todo: localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []
}

export const todoSlice = createSlice ({
    name: 'todo',
    initialState,
    reducers : {
        addTodo : (state, action) => {
            const newTodo = {name: action.payload, id: uuidv4(), complated: false }
            state.todo.push(newTodo)

            localStorage.setItem("todos", JSON.stringify(state.todo))
        },
        isChecked : (state, action) => {
            const itemIndex = state.todo.findIndex(item => item.id === action.payload.id)

            if(itemIndex >=0) {
                state.todo[itemIndex].complated = !state.todo[itemIndex].complated
            };

            localStorage.setItem("todos", JSON.stringify(state.todo))
        },
        removeTodo: (state, action) => {
            const updatedTodo = state.todo.filter(item => item.id !== action.payload.id);
            state.todo = updatedTodo;
            
            localStorage.setItem("todos", JSON.stringify(state.todo))
        }
    }

})

export const {addTodo, isChecked, removeTodo} = todoSlice.actions

export default todoSlice.reducer