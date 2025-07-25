import { useState } from "react";

const Home = ( {ToDos , addNewTodo} ) => {

    const [newTodo , setNewTodo] = useState('');
    

    const addToDo = (e) => {
        e.preventDefault();
        addNewTodo(newTodo); //add newToDo to the display list        
        setNewTodo('');
    }


    return(
        <div >
            <span>
                <input 
                    type="text" 
                    onChange={(e) => setNewTodo(e.target.value)}
                    value={newTodo}
                    placeholder="Add new To-Do item"
                />
                <button type="button" onClick={(e) => addToDo(e)}>Add To-Do</button>
            </span>

            <div>
                <ul>
                    {
                        ToDos.map((todoItem) => {
                            return(
                                <li 
                                    key={todoItem.id} 
                                    style = {{textDecoration: todoItem.isCompleted ? 'line-through' : 'none'}}
                                >
                                        {todoItem.task}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>

        </div>
    )
}

export default Home;