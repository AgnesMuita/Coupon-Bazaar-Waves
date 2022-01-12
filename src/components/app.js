import * as React from 'react';
import ReactDOM from "react-dom";


class App extends React.Component{
    constructor(props){
      super(props);
      this.state = {}
    }
    render(){
      return (
          <div className='container'>
              <input className='btn btn-primary' type="submit" value="Alert" onClick={()=>{alert("Alert button clicked")}}/>
          </div>
      )
    }
}
const app = document.getElementById("app");
if (app){
    ReactDOM.render(<App/>, app)
}



export const Application = ()=>{
    return (
          <div className='container'>
              <input className='btn btn-primary' type="submit" value="Alert" onClick={()=>{alert("Alert button clicked")}}/>
          </div>
      )
}
const application = document.getElementById("application");
if (application){
    ReactDOM.render(<Application/>, application)
}




