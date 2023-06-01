import { Dashboard } from '../Dashboard/Dashboard';
import { NavBar } from '../NavBar/NavBar';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';

export const App = () =>  {
  return (
    <div className="App">
      <NavBar />
      <Dashboard />
    </div>
  );
}