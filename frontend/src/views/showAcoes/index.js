import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

function ShowAcoes() {
  const navigate = useNavigate();
  const [response, setResponse] = useState(null);
  const [duplicateIndex, setDuplicateIndex] = useState(null);

  useEffect(() => {
    const storedResponse = localStorage.getItem('response');
    if (storedResponse) {
      const parsedResponse = JSON.parse(storedResponse);
      if (Array.isArray(parsedResponse)) {
        const filteredResponse = parsedResponse.filter(
          item => item.Codigo && item.Nome && item.Valor !== null
        );
        const sortedResponse = filteredResponse.sort((a, b) => a.Valor - b.Valor);
        setResponse(sortedResponse);
        const valueToCompare = parsedResponse[5]?.Valor;
        const duplicateIndex = sortedResponse.findIndex(item => item.Valor === valueToCompare);
        setDuplicateIndex(duplicateIndex);
      }
    }
  }, []);

  const handleGoBackBolsa = () => {
    navigate('/AskForValue');
  };

  return (
    <div className='body'>
      <div className="back">
        <h1 className="acoes-title-title">Resultado da busca de ações</h1>
        {response && response.length > 0 ? (
          <ul className="acoes-list">
            <h2 className="acoes-title">Ações encontradas:</h2>
            <li className="acoes-header">
              <span>Código</span>
              <span>Nome</span>
              <span>Última(R$)</span>
            </li>
            {response.map((item, index) => (
              item.Nome !== null && (
                <li
                  className={`acoes-item ${index === duplicateIndex ? 'duplicate' : ''}`}
                  key={item.Codigo}
                >
                  <span>{item.Codigo}</span>
                  <span>{item.Nome}</span>
                  <span>{item.Valor}</span>
                </li>
              )
            ))}
          </ul>
        ) : (
          <p>Nenhuma ação encontrada.</p>
        )}
        <button className="button" onClick={handleGoBackBolsa}>
          Procurar outros valores
        </button>
      </div>
    </div>
  );
}

export default ShowAcoes;
