import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../feature/todo/todoSlice';

const AddTodo = () => {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input.trim()) return; 
        dispatch(addTodo(input))
        setInput('')
    }

    return (
        <div className="max-w-4xl mx-auto p-4">
            <form
                onSubmit={handleSubmit}
                className="bg-slate-900 p-8 rounded-3xl shadow-2xl 
                         border-2 border-emerald-500/20"
            >
                <h2 className="text-2xl font-bold mb-6 text-white text-center">
                    Create New Task 🚀
                </h2>
                <div className="flex flex-col gap-4">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Enter your task here..."
                        className="w-full px-6 py-4 rounded-2xl bg-slate-800 
                                 border-2 border-emerald-500/30 
                                 focus:border-emerald-500 outline-none text-white 
                                 placeholder-slate-400 text-lg transition-all
                                 duration-300 hover:border-emerald-500/50"
                    />
                    <button
                        type="submit"
                        disabled={!input.trim()}
                        className="w-full py-4 rounded-2xl font-bold text-lg
                                 bg-emerald-500 text-white
                                 hover:bg-emerald-600 active:bg-emerald-700
                                 transition-all duration-300 
                                 disabled:bg-slate-700 disabled:text-slate-500
                                 disabled:cursor-not-allowed
                                 shadow-[0_0_15px_rgba(16,185,129,0.3)]
                                 hover:shadow-[0_0_25px_rgba(16,185,129,0.5)]"
                    >
                        <span className="flex items-center justify-center gap-2">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                      d="M12 4v16m8-8H4"/>
                            </svg>
                            Add Task
                        </span>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AddTodo