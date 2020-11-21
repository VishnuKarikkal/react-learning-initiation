import React from 'react';
import ContentCard from './ContentCard';
import Todoitems from './Todoitems';
import Jokes from './Jokes';
import jokesData from '../services/JokesData';

function MainContent()
{
    var date=new Date();
    var hours=date.getHours();
    var timeOfTheDay;
    var style;
    if(hours<12)
    {
        timeOfTheDay='Morning';
        style={color:"goldenyellow",backgroundColor:"black"};
    }
    else if(hours>=12 && hours<=16)
    {
        timeOfTheDay='afternoon';
        style={color:"black",backgroundColor:"yellow"};

    }
    else if(hours>16 && hours<=19)
    {
        timeOfTheDay='evening';
        style={color:"red",backgroundColor:"royalblue"};
    }
    else
    {
        timeOfTheDay='night';
        style={color:"white",backgroundColor:"black"};
    }

    const jokes=jokesData.map(
                            joke=>{
                                return( 
            <Jokes key={joke.id} question={joke.question} ans={joke.ans} />
                            )})

    return(
        <div> 
            <h3 className="myH3" style={{color:'purple'}}>This is Main Content</h3>
            <p style={style}>Good {timeOfTheDay}</p>

            <div className="container todo-list">
                <Todoitems />
                <Todoitems />
                <Todoitems />
            </div>

            <div className="container">
                <ContentCard 
                    cardContent=
                    {
                        {
                            src:'https://www.clipartmax.com/png/middle/459-4594987_tom-and-jerry-clipart-catching-tom-and-jerry-png.png',
                            caption:'img caption',
                            parg:'img parg'
                        }
                    }
                />
                <ContentCard 
                    cardContent=
                    {
                     {
                         src:'https://www.clipartmax.com/png/middle/459-4594987_tom-and-jerry-clipart-catching-tom-and-jerry-png.png',
                         caption:'img caption',
                         parg:'img parg'
                     }
                    }
                />
                <ContentCard 
                    cardContent=
                    {
                     {
                        //  src:'https://www.clipartmax.com/png/middle/459-4594987_tom-and-jerry-clipart-catching-tom-and-jerry-png.png',
                         caption:'img caption',
                         parg:'img parg'
                     }
                    }
                />
            </div>
        
        
            <div className="jokes-list container">
                {jokes}
            </div>
        </div>
    );
}

export default MainContent;