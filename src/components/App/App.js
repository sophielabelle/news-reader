import { Redirect, Route, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Dashboard } from '../Dashboard/Dashboard';
import { SingleArticle } from '../SingleArticle/SingleArticle';
import { testData } from '../../data/dev-data';
import { NavBar } from '../NavBar/NavBar';
import './App.css';
import { fetchData } from '../../data/apiCalls';

export const App = () =>  {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchData()
      .then(data => {
        setArticles(data.articles);
      })
      .catch(err => {
        setError(`Sorry there was a ${err.message} error please try again`);
      });
  }, [])

  return (
    <div className='App'>
      <NavBar />
      <Switch>
        <Route 
          path='/article/:id' 
          render={({match}) => {
            const article = articles.find(a => {
              if(a.source.id === match.params.id){
                console.log(a)
                return a;
              }
            }); 
            return <SingleArticle article={article}/>
          }}
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