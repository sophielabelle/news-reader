import { Redirect, Route, Switch } from 'react-router-dom';
import { Dashboard } from '../Dashboard/Dashboard';
import { SingleArticle } from '../SingleArticle/SingleArticle';
import { NavBar } from '../NavBar/NavBar';
import './App.css';

export const App = () =>  {
  return (
    <div className='App'>
      <NavBar />
      <Switch>
        <Route 
          path='/' 
          render={() => <Dashboard />}
        /> 
        <Route 
          path='/article/:title' 
          render={({match}) => 
            <SingleArticle 
              key={match.params.title} 
              // id={match.params.id}
            />
          }
        />
        <Redirect from='*' to='/'/>
      </Switch>
    </div>
  );
}