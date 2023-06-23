import { useState } from "react";

function AppTest (props){

    const title= 'welcome to react tutorial';
    const like=40;

    const  person={
        name:"john",
        age:50
    }
    const reactLink='https://www.google.com'

const [color,setColor]= useState('Red')



// function changeColor(){  
//     return setColor('paars')
// }
// onClick={changeColor} we can call the function inside the dom like this in react
    
return(





      <div className="test" style={{  // we can use css this way
        backgroundColor:'#1234' // and we do not use min- we use CamelCase
      }}>
        <h1>This is test App</h1>
        <div id="id">
            <h1>{title}</h1>
            <h1>my name is {person.name}</h1>
            <h1>my favorite color is {color}</h1>
            <button type="button" className="buttons"  onClick={()=>setColor('blue')}> Change color </button>
            <a href={reactLink}>google</a>
        </div>


        <div>

         {
          props.blogs.blogs.map((data)=> {
            return (
              <div>
            <b> {data.title} </b> 
            <b> {data.post} </b> 
          
            </div>
            )
          })
}

<b> {props.blogs.comment} </b> <br />
<b>{props.comment2}</b>
        </div>



        </div>
    
)
}




export default AppTest;