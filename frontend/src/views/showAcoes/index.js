import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

function ShowAcoes() {
  const navigate = useNavigate();

  const handleGoBackBolsa = () => {
    navigate('/AskForValue');
  };

  return (
    <div className='body'>
      <div className="back">
        <h1 className="acoes-title-title">Resultado da busca de ações</h1>
        <ul className="acoes-list">
          <h2 className="acoes-title">Ações encontradas:</h2>
          <li className="acoes-header">
            <span>Código</span>
            <span>Nome</span>
            <span>Volume</span>
            <span>Última(R$)</span>
            <span>Variação</span>
          </li>
          <li className="acoes-item">
            <span>HAPV3</span>
            <span>Hapvida</span>
            <span>134.813.200</span>
            <span>4,35</span>
            <span>-2,47%</span>
          </li>
          <li className="acoes-item">
            <span>PETR4</span>
            <span>Petrobras</span>
            <span>94.337.700</span>
            <span>29,64</span>
            <span>+0,85%</span>
          </li>
          <li className="acoes-item">
            <span>MGLU3</span>
            <span>Magazine Luiza</span>
            <span>85.676.400</span>
            <span>3,71</span>
            <span>-1,07%</span>
          </li>
          <li className="acoes-item">
            <span>B3SA3</span>
            <span>B3</span>
            <span>68.323.500</span>
            <span>14,62</span>
            <span>-0,61%</span>
          </li>
          <li className="acoes-item">
            <span>VIIA3</span>
            <span>Via</span>
            <span>55.311.800</span>
            <span>2,55</span>
            <span>-4,14%</span>
          </li>
        </ul>
        <button className="button" onClick={handleGoBackBolsa}>
          Procurar outros valores
        </button>
      </div>
    </div>
  );
}

export default ShowAcoes;
