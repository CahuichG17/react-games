import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MainContent from './components/HomeComponent';
import GameCard from './components/GameSelectorComponent';
import './App.css';

function App() {
  return (
    <div>
      <MainContent /> 
      <GameCard />
    </div>
  );
}

export default App;