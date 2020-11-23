import React from 'react';
import ContentCard from './ContentCard';
import Todoitems from './Todoitems';
import Jokes from './Jokes';
import Products from './Products';
import TodosData from '../services/TodosData';
import jokesData from '../services/JokesData';
import ProductsData from '../services/ProductsData';

class MainContent extends React.Component
{
    constructor()
    {
        super();
        this.state=
        {
            todos:TodosData,
            log:false
        }
        this.handleClick=this.handleClick.bind(this);
        this.changeLog=this.changeLog.bind(this);
    }

    handleClick(id)
    {
        this.setState(prevState=>
            {
                let newTodo = prevState.todos.map(todo=>
                    {
                        if(todo.id === id)
                        {
                            todo.completed=!todo.completed;
                        }
                        return todo;
                    });

                    return {todos:newTodo};
            })
    }

    changeLog()
    {
        console.log("cli")
        this.setState(prevState=>
            {
                return {log:!prevState.log}
            })
    }
    render()
    {
        
const todos=
this.state.todos.map(todo=><Todoitems key={todo.id} item={todo} handleClick={this.handleClick} />)

return(
<div> 
<h3 className="myH3" style={{color:'purple'}}>This is Main Content</h3>


{/* todos list */}
<button onClick={this.changeLog}>{this.state.log?"logout":"login"}</button>
<div className="container todo-list">
{todos}
</div>

</div>
);
    }
}

export default MainContent;