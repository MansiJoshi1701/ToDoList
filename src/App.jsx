import { useState , useEffect } from 'react'
import InputBox from './components/InputBox'
import Home from './components/Home'
import ToDos from './data/data'
import './App.css'

function App() {
  
  const [data , setData] = useState(ToDos);

  
  //function to add new ToDo item to the list
  const addNewTodo = (item , isSubtask , parentID) => {

    const newToDo = { //create a new ToDo item
      id: Math.floor(Math.random() * 100), //assign a random ID
      task: item,
      isCompleted: false
    }

    //Check if its a subtask or not
    if(!isSubtask){ //means it's a new task

      setData([...data , newToDo]); //add the 'newToDo' to the existing 'data'
    }
    else{
      //1.search for the parentID
      setData(data.map((parent) => {
        
        if(parent.id === parentID){

          //add the newToDo to the parent's subtask
          return {...parent.subtask , newToDo}
          
        }
      })
    )
    }

    

    
  }

  
  const updateStatus = (id) => {

    setData(data.map((todo) => {

      // If the main task matches the ID
      if(todo.id === id) return {...todo , isCompleted: !todo.isCompleted}

      
      // If the main task doesn't match, check its subtasks
      //NOTE: You'll have to store these updadtedSubtasks in a variable in order to update the 
      //respecctive todo item later on.
      const updatedSubtask = todo.subtask.map((subitem) => {

        if(subitem.id === id) return {...subitem , isCompleted: !subitem.isCompleted}

        else return subitem;  // Return subitem as is if no match
      })

      // Return the todo item with potentially updated subtasks
      // This ensures that if no subtask was updated, the original subtask array is still there
      // and if a subtask was updated, the new array is used.
      if(updatedSubtask != todo.subtask){ // Check if any subtask was actually modified
        return {...todo , subtask: updatedSubtask}
      }
      
      return todo;  // Return the todo item as is if neither main task nor subtask matched

    }

    ))
  }


  return (
    <>

      <div className="App">
        <h1>To-Do List</h1>
        <InputBox addNewTodo={addNewTodo}/>
        <Home ToDos={data}  updateStatus={updateStatus} addNewTodo={addNewTodo}/>
      </div>
    
    </>
  )
}

export default App
