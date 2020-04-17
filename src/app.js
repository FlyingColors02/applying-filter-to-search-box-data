import React, { Component } from "react";
import Search from "./component/search";
import axios from "axios";
import Users from "./component/user"
class App extends Component{
    constructor(props){
        super(props);
        this.state={
            userData:[],
            inputData:""
        }
    }

async componentDidMount(){
let response =await axios.get(`https://jsonplaceholder.typicode.com/users`);
this.setState({userData:response.data});
console.log(response);
    }

handleInputData = (event)=>{
    this.setState({inputData:event.target.value})
}
    render(){
        let filterUser = this.state.userData.filter(data=>(data.name.toLowerCase().includes(this.state.inputData.toLowerCase())));
        return(
            <div className="container">
                <Search input={this.handleInputData} placeholder="search user"/>
                <Users userData={filterUser}/>
            </div>
        )
    }
}
export default App;