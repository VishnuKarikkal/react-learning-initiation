import React from 'react';
import '../css/styles.css';

// function Todoitem(props)
// {

//     return(
//             <div className="todo-item">
//                 <input type="checkbox" checked={props.item.completed} /> <label>{props.item.item}</label>    
//             </div>
//         );
// }

//class component
class Todoitem extends React.Component
{
   // constructor()
   // {
        //first call the ' super() ' => call to the React.Component
        //super();
        //defining state variables
        // this.state=
        // {
           // stateVar:"This is state var"  //defining the state variable for the Todoitems component
        //}
        //if any class methods uses the state variables bind them like follows
        //this.clickCheck=this.clickCheck.bind(this);
    //}

    //a method that handles an event
    // clickCheck() 
    // {
        //updating state variables
            //setState returns the updated state variables
    //     this.setState(prevState=>
    //         {
    //             console.log(`prevstate:${prevState.stateVar}`);
    //             return prevState.stateVar=Date();
    //         }
    //         )
    // }

    render()
    {
        return(
            <div className="todo-item">
                <input 
                type="checkbox" 
                checked={this.props.item.completed} 
                onChange={()=>{this.props.handleClick(this.props.item.id)}} 
                /> 
                <label className={this.props.item.completed?"completed-todo":null}>{this.props.item.item}</label>    
            </div>
        );
    }
}

export default Todoitem;