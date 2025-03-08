import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../feature/todo/todoSlice'

const Todo = () => {
    const todos = useSelector((state) => state.todos)
    const dispatch = useDispatch()

    
    return (
        <div className="min-h-screen bg-slate-950 p-4">
            <div className="max-w-4xl mx-auto p-4">
                <div className="bg-slate-900 p-8 rounded-3xl shadow-2xl border-2 border-emerald-500/20">
                    <h1 className="text-3xl font-bold mb-8 text-white text-center">
                        Task Manager
                    </h1>
                    <div className="space-y-4">
                        {Array.isArray(todos) && todos.map((todo) => (
                            <div 
                                key={todo.id} 
                                className="group bg-slate-800 p-5 rounded-2xl
                                         border-2 border-emerald-500/20 
                                         hover:border-emerald-500/40
                                         transition-all duration-300"
                            >
                                <div className="flex justify-between items-center gap-4">
                                    <h3 className="text-lg text-white break-all">
                                        {todo.title}
                                    </h3>
                                    <p className="text-sm text-slate-400">
                                        {new Date(todo.createdAt).toLocaleString()}

                                    </p>


                                    <button 
                                        onClick={() => dispatch(removeTodo(todo.id))}
                                        className="flex items-center gap-2 px-4 py-2 
                                                 rounded-xl bg-red-500/10 text-red-500
                                                 hover:bg-red-500 hover:text-white
                                                 transition-all duration-300"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                                        </svg>
                                        Delete
                                    </button>
                                   

                                </div>
                            </div>
                        ))}
                    </div>
                    {(!todos || todos.length === 0) && (
                        <div className="text-center p-8 rounded-2xl bg-slate-800/50 border-2 border-dashed border-slate-700">
                            <svg className="w-16 h-16 mx-auto mb-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
                            </svg>
                            <p className="text-xl text-slate-400 font-medium">
                                No tasks yet. Start fresh!
                            </p>
                        </div>
                    )}
                </div>
                    </div>
        </div>
    )
}

export default Todo
