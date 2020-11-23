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
        style={color:"red",backgroundColor:"yellow"};
    }
    else
    {
        timeOfTheDay='night';
        style={color:"white",backgroundColor:"black"};
    }

    <p style={style}>Good {timeOfTheDay}</p>

    const jokes=jokesData.map(
        joke=>{
            return( 
<Jokes key={joke.id} question={joke.question} ans={joke.ans} />
        )});

const products=ProductsData.map(
product=>
{
return <Products key={product.id} item={product.item} description={product.description} />
}
)


{/* card data */}
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
{/* jokes list */}
<div className="jokes-list container">
{jokes}
</div>
{/* products list */}
<div className="products-list container">
    {products}
</div>
