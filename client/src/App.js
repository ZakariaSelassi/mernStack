import React from 'react';
import { BrowserRouter as Router,Route,Switch} from "react-router-dom";
import './App.css';
import CreateFood from './components/CreateFood'
import FoodList from './components/FoodList'
import PageError from './components/PageError';
function App() {
  return (
    <>      
      <Router>
        <div>
          <Switch>
          <Route exact path='/' component={FoodList}/>
          <Route exact path='/CreateFood' component={CreateFood}/>
          <Route path='/' component={PageError}/>
          </Switch>
        </div>
      </Router>      
    </>
  );
}

export default App;
