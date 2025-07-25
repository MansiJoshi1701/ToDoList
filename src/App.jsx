import { useState } from 'react'
import Home from './components/Home'
import ToDos from './data/data'
import './App.css'

function App() {
  
  const [data , setData] = useState(ToDos);

  
  //function to add new ToDo item to the list
  const addNewTodo = (item) => {

    const newToDo = {
      id: Math.floor(Math.random * 100),
      task: item,
      isCompleted: false
    }

    setData([...data , newToDo]);
  }


  return (
    <>
      <div className="App">
        <h1>To-Do List</h1>
        <Home ToDos={data}  addNewTodo={addNewTodo}/>
      </div>
    
    </>
  )
}

export default App
