import { Dashboard } from '../Dashboard/Dashboard';
import { SingleArticle } from '../SingleArticle/SingleArticle';
import { NavBar } from '../NavBar/NavBar';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';

export const App = () =>  {
  return (
    <div className="App">
      <NavBar />
      <Switch >
        <Route 
          exact path='/'
          reder={() => <Dashboard />}
        /> 
        <Route 
          exact path='/article/:title'
          reder={() => <SingleArticle key={match.params.title}/>}
        />
      </Switch>
    </div>
  );
}