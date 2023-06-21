import { Component } from "react";
import title from './Notes'

export class PaymentList extends Component {

     constructor (props){
        super(props);

            this.state={
                message: 'you are subscribed'
                

            }

     }

     render(){
        return(
            <div>
                <h1>{this.state.message}</h1>

            <h1> {title} </h1>
   





            </div>


        )
     }



}