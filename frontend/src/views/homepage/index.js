import { useNavigate } from 'react-router-dom';
import './index.css';

function HomePage() {
  const navigate = useNavigate();

  const navigateToPage = () => {
    navigate('/AskForValue');
  };

  return (
    <div className='body'>
      <div className="back">
        <div className="guys"></div>
        <button onClick={navigateToPage} className="button">
          <span>Investir!</span>
        </button>
      </div>
    </div>
  );
}

export default HomePage;
