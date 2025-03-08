import './App.css'
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'

function App() {
    return (
        <div className="min-h-screen bg-slate-950">
            <div className="container mx-auto py-8">
                <AddTodo />
                <Todo />
            </div>
        </div>
    )
}

export default App
