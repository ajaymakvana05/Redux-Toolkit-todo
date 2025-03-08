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
        <div className="max-w-5xl mx-auto p-4 sm:p-6">
            <form
                onSubmit={handleSubmit}
                className="bg-white/5 backdrop-blur-xl p-6 sm:p-8 rounded-3xl 
                         border border-white/10 hover:border-white/20
                         transition-all duration-500 shadow-[0_0_30px_rgba(0,0,0,0.3)]"
            >
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center 
                             bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 
                             bg-clip-text text-transparent">
                    ✨ Create Your Task
                </h2>
                <div className="flex flex-col sm:flex-row gap-4">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="What's on your mind today?"
                        className="flex-1 px-6 py-4 rounded-2xl bg-white/5 
                                 border border-white/10 focus:border-purple-500/50
                                 outline-none text-white placeholder-white/30
                                 text-lg transition-all duration-300
                                 hover:border-white/20 focus:bg-white/10"
                    />
                    <button
                        type="submit"
                        disabled={!input.trim()}
                        className="px-8 py-4 rounded-2xl font-semibold text-lg
                                 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500
                                 text-white transform hover:scale-[1.02] active:scale-[0.98]
                                 transition-all duration-300 disabled:opacity-50
                                 disabled:cursor-not-allowed disabled:hover:scale-100
                                 shadow-[0_0_20px_rgba(168,85,247,0.3)]
                                 hover:shadow-[0_0_25px_rgba(168,85,247,0.5)]"
                    >
                        <span className="flex items-center justify-center gap-2">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M12 4v16m8-8H4" />
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