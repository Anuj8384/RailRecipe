import React,{Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Ninja from './component/ninja';
import axios from 'axios';
import { config } from './config/config';




const initialState  = {
  loading:false,
  resData : {}
 
}

class App extends Component {
  
  constructor(){

    super();
    this.state = initialState;
    
  }

  componentDidMount(){
    axios.get(config.url+'/menu/336',{
      headers: { 
        'Authorization': config.key

      }
    }
   ).then((res) => {
console.log(res)
const resData = res.data;
this.setState({resData : {...resData},loading:true});

   })
  }
  render() {
    // const {id, name} = this.state;
    return (
      <div className="App">
        <header className="App-header">
    <p>Welcome App</p>
    <button></button>
        </header>
        <Ninja data={this.state} />
      </div>
     
    );
  }
}

export default App;
