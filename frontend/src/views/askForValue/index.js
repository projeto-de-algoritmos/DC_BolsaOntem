import React, { useState } from 'react';
import './index.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AskForValue() {
  const navigate = useNavigate();
  const [investimento, setInvestimento] = useState('');

  const fetchData = async () => {
    try {
      localStorage.removeItem('response');
      const response = await axios.get(`http://127.0.0.1:9944/info/${investimento}`);
      localStorage.setItem('response', JSON.stringify(response.data));
      navigateToPage(); // Navega para a página após a conclusão bem-sucedida da solicitação
    } catch (error) {
      console.error(error);
    }
  };

  function navigateToPage() {
    navigate('/ShowAcoes');
  }

  const handleInputChange = (event) => {
    setInvestimento(event.target.value);
  };

  return (
    <div className='body'>
      <div className="back">
        <div className="men"></div>
        <p> Digite no campo abaixo a quantia que está disposto a investir</p>
        <input
          className="input-field"
          placeholder="Digite o valor de investimento"
          value={investimento}
          onChange={handleInputChange}
        />
        <button className="button" onClick={fetchData}>  <span>Buscar investimentos</span> </button>
      </div>
    </div>
  );
}

export default AskForValue;
