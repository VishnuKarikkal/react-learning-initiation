import React from 'react';

function MainContent()
{
    return(
        <div> 
            <h3 className="myH3" style={{color:'purple'}}>This is Main Content</h3>
            <input type='checkbox'></input><label>Chek 1</label>
            <input type='checkbox'></input><label>Chek 2</label>
            <input type='checkbox'></input><label>Chek 3</label>
        </div>
    );
}

export default MainContent;