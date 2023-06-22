import { useState } from "react";
import AppTest from "./AppTest";

const Notes = () => {

    //let name='mario';
//     const [name,setName]=useState('mario'); // inside value in useState, that can array,object
// const [age,setAge]=useState(32);
// const handleClick=()=> {
//    setName('sdljfs');
//    setAge(45)

// }



const [blogs,setBlog]=useState([
    {title:'this is test 1', post:'this is post part 1 ', author:'herrry', id:1},
    {title:'this is test 2', post:'this is post part 2', author:'sdf', id:2},
    {title:'this is test 3', post:'this is post part 3', author:'sdfghgfh fdg', id:3},
]);




//why we use 'key' inside div element
    return ( // with map method we can write the object or data to webpage. or we can return it after the map.
        <div className="notes">
                                                    
            {blogs.map((blog)=>( 
                <div className="blog" key={blog.id}>
                    <h2>{ blog.title}</h2>
                    <p><i> written by {blog.author} </i></p>
                </div>
            ))}




      <form>
        <input type="text" />
        <button type="submit">add user</button>
      </form>

   {/* <h2><i>{name}</i></h2> 
   <h2><i>{age}</i></h2>
  <button onClick={handleClick}>change color</button> */}



<AppTest blogs={{blogs ,comment:'this is comment'}} />


            </div>
       



     );
}
 
export default Notes;