import logo from '../../logo.svg';
import './Base.css';
import Zoom from 'react-reveal/Zoom';

function Base() {
  return (
    <div className="Base">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            SAZUMAIN
          </p>
        </header>   
    </div>
  );
}

export default Base;
