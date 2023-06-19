import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

function ShowAcoes() {
  const navigate = useNavigate();
  const [response, setResponse] = useState(null);

  useEffect(() => {
    const storedResponse = localStorage.getItem('response');
    if (storedResponse) {
      const parsedResponse = JSON.parse(storedResponse);
      setResponse(parsedResponse);
    }
  }, []);

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
            <span>Última(R$)</span>
          </li>
          {response && (
            <li className="acoes-item">
              <span>{response.Codigo}</span>
              <span>{response.Nome}</span>
              <span>{response.Valor}</span>
            </li>
          )}
        </ul>
        <button className="button" onClick={handleGoBackBolsa}>
          Procurar outros valores
        </button>
      </div>
    </div>
  );
}

export default ShowAcoes;
