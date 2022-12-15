import React, { Component, useState } from 'react'
import './App.css'
import './Card.css'

export default function Card({frase1, frase2, frase3, nome}) {
    const[fraseAtual, setFraseAtual] = useState(frase1)
    const[open, setOpen] = useState(false)
    return (
        <div className='card'>
            <h1>{nome}</h1>
            <h2>Perguntas:</h2>
            <div className="allWrapper">
                <div className="fWrapper" onClick={() => setOpen(!open)}>
                    <p>{fraseAtual}</p>
                </div>
                <div className="restoPerguntas" style={{height: open ? '150px' : '0px', top: open ? '90px' : '0'}}>
                    <p onClick={() => {setFraseAtual(frase1)}} style={{marginTop: '40px'}}>{frase1}</p>
                    <p onClick={() => {setFraseAtual(frase2)}}>{frase2}</p>
                    <p onClick={() => {setFraseAtual(frase3)}}>{frase3}</p>
                </div>
            </div>
        </div>
    );
}

