import { useState } from "react";

const Home = ( {ToDos , updateStatus , addNewTodo} ) => {

    const [showInput , setShowInput] = useState(false);
    const [newTask , setNewTask] = useState('');
    

    
    const handleClick = (e,parentID) => {

        e.stopPropagation();
        addNewTodo(e.target.value , true , parentID);
        setNewTask('');
    }


    const getNewTodo = (e,parentID) => {

        //e.keycode === 13 , is basically to check that the key pressed is 'Enter'
        if(e.key === 'Enter' && e.target.value){
            addNewTodo(e.target.value , true , parentID);
            setShowInput(false);
            console.log("Going to add new ToDo item");
        }
        
        
    }



    return(
        
        <div style={ { marginTop: 5 }}>
                
            {ToDos.map((todoItem) => {
                return(
                    <div key={todoItem.id}>

                        <input type="checkbox" onChange={() => updateStatus(todoItem.id)} checked={todoItem.isCompleted} />

                        <span style = {{textDecoration: todoItem.isCompleted ? 'line-through' : 'none'}}>
                                
                            {todoItem.task}
                            
                            <input 
                                type="text"
                                className="inputContainer_input" 
                                autoFocus
                                value={newTask}
                                onChange={e => setNewTask(e.target.value)}
                                // onKeyDown={getNewTodo(todoItem.id)}
                            />

                            <button onClick={e => handleClick(e,todoItem.id)}>+ New Todo</button>
                            
                        </span>
                            

                            

                        <div style={{paddingLeft: 15}}>
                            {todoItem.subtask.map(subitem => {
                                return(
                                    <div key={subitem.id}>

                                        <input type="checkbox" onChange={() => updateStatus(subitem.id)} checked={subitem.isCompleted} />

                                        <span style = {{textDecoration: subitem.isCompleted ? 'line-through' : 'none'}}>{subitem.task}</span>
                            
                                    </div>

                                )
                            })}
                                      
                        </div>
                                        
                    </div>
                )
            })}
                
        </div>

    )
}

export default Home;