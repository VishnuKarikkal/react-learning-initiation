import React from 'react';

function ContentCard(props)
{
    return(
        <div className="card">
            <div className="card-body">
               <img display={!props.cardContent.src && "none"} src={props.cardContent.src} alt="img"/>
                <h4>{props.cardContent.caption}</h4>
                <p>{props.cardContent.parg}</p>
            </div>
        </div>
    )
}

export default ContentCard;