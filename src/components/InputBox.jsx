import { useState } from "react";


const InputBox = ({ addNewTodo }) => {

    const [newTodo , setNewTodo] = useState('');

    const addToDo = (e) => {
        e.preventDefault();
        addNewTodo(newTodo); //add newToDo to the display list        
        setNewTodo('');
    }


    return(
        <div>
            <span>
                <input 
                    type="text" 
                    onChange={(e) => setNewTodo(e.target.value)}
                    value={newTodo}
                    placeholder="Add new To-Do item"
                />
                <button type="button" onClick={(e) => addToDo(e)}>Add To-Do</button>
            </span>
        </div>
    )
}

export default InputBox;