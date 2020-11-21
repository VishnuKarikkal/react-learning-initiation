import React from 'react';

function Products(props)
{
    return(
        <div className="products">
            <h5>{props.item}</h5>
            <p>{props.description}</p>
        </div>
    );
}

export default Products;