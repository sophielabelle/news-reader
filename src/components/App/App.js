import { Redirect, Route, Switch } from 'react-router-dom';
import { Dashboard } from '../Dashboard/Dashboard';
import { SingleArticle } from '../SingleArticle/SingleArticle';
import { testData } from '../../data/dev-data';
import { NavBar } from '../NavBar/NavBar';
import './App.css';
import { useEffect, useState } from 'react';

export const App = () =>  {
  const [articles, setArticles] = useState(testData);

  useEffect(() => {
    setArticles(testData)
  }, [])

  return (
    <div className='App'>
      <NavBar />
      <Switch>
        <Route 
          path='/article/:title' 
          render={({match}) => {
            const article = articles.find(a => {
              if(a.title === match.params.title){
                console.log(a.title)
                return a
              }
            }) 
            return <SingleArticle article={article}/>
          }
        }
        />
        <Route 
          exact path='/' 
          render={() => <Dashboard articles={articles}/>}
        /> 
        <Redirect from='*' to='/'/>
      </Switch>
    </div>
  );
}