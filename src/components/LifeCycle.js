import { Component } from "react";
import axios from "axios";


export default class LifeCycle extends Component {

    constructor(props) {
        super(props)
        this.state={
            user:null,
            users:[],
            isLoading:true,
            age:20
        }
    }

// life
    // componentDidMount(){
    //     this.setState({
    //         user:'ted'
    //     })
    //     console.log('component is didMount');
    // }


componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((data)=> { console.log(data.data);
        setTimeout(() => {
            this.setState({users:data.data ,isLoading:false,age:25})
            
        }, 3000);
        
    })
    .catch((err)=> console.log(err))
}



componentWillMount(){
console.log('this is will mount');
}

   

    render() {
        return (
             <div>





                <h1>{this.state.user}</h1>
                <h1>{this.state.age}</h1>
                {
                    this.state.isLoading 
                    ? 

                    <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div> 
                                :
                    this.state.users.map((person)=>{
                        return (
                            <div>
                        <ul>
                            <li>
                        <h1>{person.name}</h1> 
                        <h1>{person.phone}</h1>
                        <h1>{person.email}</h1>
                        </li>
                        </ul>
                        </div>
                        )
                    })

}
             </div>
        );
    }

}