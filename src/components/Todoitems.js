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

//class based component
class Todoitem extends React.Component
{
    render()
    {
        return(
            <div className="todo-item">
                <input type="checkbox" checked={this.props.item.completed} /> <label>{this.props.item.item}</label>    
            </div>
        );
    }
}

export default Todoitem;