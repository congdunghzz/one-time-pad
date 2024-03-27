import {useState} from "react";
import './App.css';
import Solution from './components/Solution';

function App() {
  const [cards, setCards] = useState([]);
  const [text, setText] = useState('');
  const [key, setKey] = useState('');

  const handleBtnClick = () => {
    setCards(prev => ([...prev, {text, key}]));
    setText('');
    setKey('');
  }



  return (
    <div className="container p-5">

      <div className="input-group mb-3">

        <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroup-sizing-default">Plaintext</span>
        </div>
        <input type="text" className="form-control" aria-label="Sizing example input" value={text}
        onChange={(e)=>{setText(e.target.value)}}/>
      </div>
      <div className="input-group mb-3">

        <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroup-sizing-default">Key</span>
        </div>
        <input type="text" className="form-control" aria-label="Sizing example input" value={key}
        onChange={(e)=>{setKey(e.target.value)}}/>
      </div>
      
      <button type="button" className="btn btn-primary" onClick={handleBtnClick}>Encrypt</button>

      <div className="row mt-5">
        {
          cards.map(card => ( 
            <Solution plaintext={card.text} inputKey={card.key}/>

          ))
        }
      </div>
    </div>
  );
}

export default App;
