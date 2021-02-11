
import React from 'react';
import Fixtures from './components/fixtures';
import {Switch, Route} from 'react-router-dom';
import TopScorers from './components/topscorers'
const App = () =>{
  return(
    <div className="app">

       <Switch>
          <Route path="/" exact component={Fixtures } />
         <Route path="/topscorers" component={TopScorers } />
       </Switch>


    </div>
  )
}
export default App;  
 
