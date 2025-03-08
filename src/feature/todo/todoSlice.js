import { createSlice, nanoid } from "@reduxjs/toolkit";

const loadTodosFromStorage = () => {
    try {
        const savedTodos = localStorage.getItem('todos');
        return savedTodos ? JSON.parse(savedTodos) : [];
    } catch (error) {
        console.error('Error loading todos:', error);
        return [];
    }
}

const initialState = {
    todos: loadTodosFromStorage()
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            if (!action.payload.trim()) return;
            const todo = {
                id: nanoid(),
                title: action.payload,
                createdAt: new Date().toISOString()
            }

            if (!Array.isArray(state.todos)) {
                state.todos = [];
            }
            state.todos.push(todo);
            localStorage.setItem('todos', JSON.stringify(state.todos));
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
            localStorage.setItem('todos', JSON.stringify(state.todos));
        },
        updateTodo: (state, action) => {
            const { id, title } = action.payload;
            const todo = state.todos.find((todo) => todo.id === id);
            if (todo) {
                todo.title = title;
            }
            localStorage.setItem('todos', JSON.stringify(state.todos));
        }
    }
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
