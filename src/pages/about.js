import axios from "axios"
import { Component, useEffect, useState } from "react"



export default function About () {

    const [mission,setMission]=useState([]);
    const [isLoading,setIsLoading]=useState(true);

   

    
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then((result)=>   setTimeout(() => {
            {setMission(result.data)};setIsLoading(false)
        }, 4000)      )
        .catch((err)=> console.log(err))
      
           
        

    




return(
    <div>
        <h1>this is about page</h1>
       { isLoading ?

        <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div> 
                  :

                  mission.map((user) => {
                    return (
<ul>
    <li> userID : {user.userId} -  title:{user.title} and mission is completed : {user.completed ? <i>succeed</i> : <i>failed</i> }  </li>
</ul>
                    )
                  })



                }




</div>
)


}