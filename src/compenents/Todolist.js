import React from 'react'

const Todolist = ({todos,setTodos,setEditTodo}) => {

  const handleComplete = (todo) =>{
    setTodos(
      todos.map((item) =>{
        if(item.id === todo.id ){
            return {...item,completed: !item.completed};
         }   
         return item;       
      })
    );
  };




  const handleDelete = ({id}) =>{
    setTodos(todos.filter((todo) => todo.id !== id ));
  };

  return (
    <div>
      {todos.map((todo)   => (
        <li className='list-item' 
            key={todo.id}>
            <input type="text"  
            value={todo.title}  
            className={`list ${todo.completed ? "complete" : "" }`} 
            onChange={(event) => event.preventDefault() } />
        

        <div>
                         
            <button className='button-sup'  onClick={() => handleDelete(todo)}>Supp</button>
            <button className='button-sup' onClick={ () => handleComplete(todo)} >Valid</button>

        </div>
        </li>
      )

      )}
    </div>
  );
};

export default Todolist;
