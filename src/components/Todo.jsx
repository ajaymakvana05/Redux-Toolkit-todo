import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, updateTodo } from '../feature/todo/todoSlice'

const Todo = () => {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch()
    const [editMode, setEditMode] = useState(false)
    const [editedTitle, setEditedTitle] = useState('')

    const handleUpdate = (id) => {
        setEditMode(id)
        setEditedTitle(todos.find((todo) => todo.id === id).title);
    }

    const handleSave = (id) => {
        if (editedTitle.trim()) {
            dispatch(updateTodo({ id: id, title: editedTitle }))
            setEditMode(false)
            setEditedTitle('')
        }
    }

    return (
        <div className="max-w-5xl mx-auto p-4 sm:p-6">
            <div className="bg-white/5 backdrop-blur-xl p-6 sm:p-8 rounded-3xl 
                          border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.3)]">
                <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center 
                             bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 
                             bg-clip-text text-transparent">
                    Task Manager
                </h1>
                <div className="space-y-4">
                    {Array.isArray(todos) && todos.map((todo) => (
                        <div
                            key={todo.id}
                            className="group bg-white/5 p-4 sm:p-6 rounded-2xl
                                     border border-white/10 hover:border-white/20
                                     transition-all duration-300"
                        >
                            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                                {editMode === todo.id ? (
                                    <input
                                        type="text"
                                        value={editedTitle}
                                        onChange={(e) => setEditedTitle(e.target.value)}
                                        className="flex-1 px-4 py-2 rounded-xl bg-white/10 
                                                 border border-white/10 focus:border-purple-500/50
                                                 outline-none text-white"
                                        autoFocus
                                    />
                                ) : (
                                    <div className="flex-1 space-y-2">
                                        <h3 className="text-lg text-white/90 break-all">
                                            {todo.title}
                                        </h3>
                                        <p className="text-sm text-white/40">
                                            {new Date(todo.createdAt).toLocaleString()}
                                        </p>
                                    </div>
                                )}
                                
                                <div className="flex flex-wrap gap-2 sm:gap-3 w-full sm:w-auto">
                                    {editMode === todo.id ? (
                                        <button
                                            onClick={() => handleSave(todo.id)}
                                            className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-2.5
                                                     rounded-xl bg-gradient-to-r from-green-500 to-emerald-500
                                                     text-white hover:opacity-90 transition-all duration-300"
                                        >
                                            Save
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() => handleUpdate(todo.id)}
                                            className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-2.5
                                                     rounded-xl bg-white/5 text-white/70 border border-white/10
                                                     hover:bg-white/10 hover:text-white transition-all duration-300"
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                            </svg>
                                            <span>Edit</span>
                                        </button>
                                    )}
                                    
                                    <button
                                        onClick={() => dispatch(removeTodo(todo.id))}
                                        className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-2.5
                                                 rounded-xl bg-white/5 text-red-400 border border-white/10
                                                 hover:bg-red-500/20 hover:text-red-300 transition-all duration-300"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                        <span>Delete</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {(!todos || todos.length === 0) && (
                    <div className="text-center p-8 sm:p-12 rounded-2xl bg-white/5 
                                  border border-dashed border-white/10">
                        <svg className="w-16 h-16 mx-auto mb-4 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                        <p className="text-xl text-white/50 font-medium">
                            Your task list is empty
                        </p>
                        <p className="text-white/30 mt-2">
                            Add your first task to get started
                        </p>
                    </div>
                )}
                    </div>
        </div>
    )
}

export default Todo
