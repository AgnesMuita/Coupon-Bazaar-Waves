import * as React from 'react';
import ReactDOM from "react-dom";

//class based component
class App extends React.Component{
    constructor(props){
      super(props);
      this.state = {}
      this.authorizationFunction = this.authorizationFunction.bind(this)
    }
    authorizationFunction(){
        const authData = {data:"Auth on my site"};
        if (WavesKeeper){
            WavesKeeper.auth(authData)
            //authData for verifying signed data from user 
            .then(auth=>{
                console.log(auth)
            })
            .catch(e=>{
                console.log(e)
            })
        }
        else{
            alert("Install Auth Waves Keeper")
        }
    }
    
    render(){
      return (
          <div className='container'>
              <input className='btn btn-primary' type="submit" value="Auth" onClick={this.authorizationFunction}/>
          </div>
      )
    }
}
const app = document.getElementById("app");
if (app){
    ReactDOM.render(<App/>, app)
}



//functional component
export const Application = ()=>{
    function authorizationFunction(){
        const authData = {data:"Auth on my site"};

        if (WavesKeeper){
            WavesKeeper.auth(authData)
            .then((response)=>{
                console.log(response)
            })
            .catch(e=>{
                console.log(e)
            })
        }
        else{
            alert("Install Auth Waves Keeper")
        }


    }
    return (
          <div className='container'>
              <input className='btn btn-primary' type="submit" value="Auth" onClick={()=>{authorizationFunction();console.log("")}}/>
          </div>
      )
}
const application = document.getElementById("application");
if (application){
    ReactDOM.render(<Application/>, application)
}




