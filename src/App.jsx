import React from "react";
import {BrowserRouter as Router,Route,Redirect, Switch} from 'react-router-dom'
import UserDemo from "./users/pages/User";

 const App = ()=> {
  

  return (
    <Router>
      <Switch>
      <Route path="/users" >
            <UserDemo/>
       </Route>

       <Redirect to="/" exact/>
         
      </Switch>
     
      
    </Router>
  )
}

export default App
