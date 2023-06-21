import { Component } from "react";
import axios from "axios";

export default class LifeCycle extends Component {

    constructor(props) {
        super(props)
        this.state={
            user:null
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
    .then((data)=> { console.log(data.data[0])})
    .catch((err)=> console.log(err))
}



componentWillMount(){
console.log('this is will mount');
}

   

    render() {
        return (
             <div>
                <h1>{this.state.user}</h1>
             </div>
        );
    }

}