import './App.css'
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'

function App() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
            <div className="container mx-auto py-8 sm:py-12">
                <AddTodo />
                <Todo />
            </div>
        </div>
    )
}

export default App
