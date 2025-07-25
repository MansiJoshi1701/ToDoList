import { useState , useEffect } from 'react'
import Home from './components/Home'
import ToDos from './data/data'
import './App.css'

function App() {
  
  const [data , setData] = useState(ToDos);

  
  //function to add new ToDo item to the list
  const addNewTodo = (item) => {

    const newToDo = { //create a new ToDo item
      id: Math.floor(Math.random() * 100), //assign a random ID
      task: item,
      isCompleted: false
    }

    setData([...data , newToDo]); //add the 'newToDo' to the existing 'data'
  }

  
  const updateStatus = (id) => {

    setData(data.map((todo) => 

      todo.id === id ? {...todo , isCompleted: !todo.isCompleted} : todo
    )
    )
  }


  return (
    <>
      <div className="App">
        <h1>To-Do List</h1>
        <Home ToDos={data}  addNewTodo={addNewTodo} updateStatus={updateStatus}/>
      </div>
    
    </>
  )
}

export default App
