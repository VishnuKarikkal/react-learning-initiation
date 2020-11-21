import React from 'react';
import '../css/styles.css';

function Todoitem()
{

    return(
            <div className="todo-item">
                <input type="checkbox" /> <label>Item</label>    
            </div>
        );
}

export default Todoitem;