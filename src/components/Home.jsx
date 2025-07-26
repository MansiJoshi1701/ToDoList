import { useState } from "react";

const Home = ( {ToDos , updateStatus} ) => {

    // const [newTodo , setNewTodo] = useState('');
    

    // const addToDo = (e) => {
    //     e.preventDefault();
    //     addNewTodo(newTodo); //add newToDo to the display list        
    //     setNewTodo('');
    // }



    return(
        
            <div style={ { marginTop: 5 }}>
                
                    {
                        ToDos.map((todoItem) => {
                            return(
                                <div key={todoItem.id}>

                                    <input type="checkbox" onChange={() => updateStatus(todoItem.id)} checked={todoItem.isCompleted} />

                                    <span style = {{textDecoration: todoItem.isCompleted ? 'line-through' : 'none'}}>{todoItem.task}</span>

                                    <div style={{paddingLeft: 25}}>
                                        <Home ToDos={todoItem.subtask} updateStatus={updateStatus} />
                                        {
                                            // todoItem.subtask.map((subItem) => {

                                            //     return(
                                            //         <Home key={subItem.id}  ToDos={subItem}  updateStatus={updateStatus} />
                                            //     )

                                            // })
                                        }

                                    </div>
                                        
                                </div>
                            )
                        }) 
                    }
                
            </div>

        
    )
}

export default Home;