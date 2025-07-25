import { useState } from "react";

const Home = () => {

    const [newTodo , setNewTodo] = useState('');


    const addToDo = (e) => {
        e.preventDefault();
        //add newToDo to the display list
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


        </div>
    )
}

export default Home;