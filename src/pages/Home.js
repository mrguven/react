import LifeCycle from "../components/LifeCycle";
import Notes from "../components/Notes";
import { Link } from "react-router-dom";

export default function Home (){

    return (


        <div className="App">
        <header className="App-header">
  
  
  
     
  
          <img src="logo512.png" className="App-logo" alt="logo" />
  
         <Link  to= "https://youtube.com" className="App-link"
            id= 'animated-text'
            
            target="_blank"
            rel="noopener noreferrer">

          
          
            JOIN MY JOURNEY
  
            
  
            </Link>
            
         
  
      
          <h1>this is test</h1>
         
        </header>
       
  <Notes />
   
   <LifeCycle />
  
  </div>
  
  
  
    );


    

}