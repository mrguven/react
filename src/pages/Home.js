import LifeCycle from "../components/LifeCycle";
import Notes from "../components/Notes";

export default function Home (){

    return (


        <div className="App">
        <header className="App-header">
  
  
  
     
  
          <img src="logo512.png" className="App-logo" alt="logo" />
  
          <a
            className="App-link"
            id= 'animated-text'
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
          
            JOIN MY JOURNEY
  
            
  
           
            
          </a>
  
      
          <h1>this is test</h1>
         
        </header>
       
  <Notes />
   
   <LifeCycle />
  
  </div>
  
  
  
    );


    

}