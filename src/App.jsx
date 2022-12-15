import './App.css';
import React from 'react'
import { useState } from 'react';
import Card from './Card';

function App() {
  const[page, setPage] = useState(false)
  return (
    <div className='App'>
      {!page && <div className='btnWrapper'><button onClick={() => setPage(true)}>Start Game!</button></div>}
      {page && <div className='page'>
        <Card nome="Disciplina" frase1={"O que é a disciplina?"} frase2={"Por que a disciplina é importante?"} frase3={"Explique a Disciplina?"}/>
        </div>}
    </div>
  );
}

export default App;
