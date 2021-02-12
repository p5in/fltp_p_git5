import React, { Component } from 'react'
import "./App.css";
import Card from './ftlp_components/Card';

class App extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
         name:"Praveen",
         members:[],
         isData:false    
        }
    }


    componentDidMount(){
        fetch('./ftlp.json')
        .then((res) => res.json())
        .then((data) => {

            // console.log('data 123:', typeof(data.ok));
            this.setState({
              members:data.members,
              isData: data.ok
            })

        })
    }

    render() {
      // console.log("HIII",this.state);
        return (
            <div className="container custom_container">
                 <div className="row">
                   {
                     this.state.members.map((member,index) => (
                      <div className="col-md-6 custom_col"  key={index}>
                       <Card member={member} />
                       </div>
                     ))
                   }
                 </div>
            </div>
        )
    }
}

export default App
