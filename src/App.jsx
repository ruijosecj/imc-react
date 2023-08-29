import './App.css';
import { useState } from 'react';
import Input from './Components/Input';
import CalcularIMC from './Components/CalcularIMC';
import Display from './Components/Display';
import Header from './Components/Header';
import Reset from './Components/Reset';

function App() {

  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [result, setResult] = useState(0);
  const [mensagem, setMensagem] = useState('IMC');
  
  return (
    <div className="App">
      <Header/>
      {result > 0 &&
        <Display result={result} mensagem={mensagem}/>
      }
      <Input label={'Peso'} estado={peso} setEstado={setPeso}/>
      <Input label={'Altura'} estado={altura} setEstado={setAltura}/>
      <CalcularIMC peso={peso} altura={altura} setResult={setResult} setMensagem={setMensagem}/>
      <Reset setPeso={setPeso} setAltura={setAltura} setResult={setResult} setMensagem={setMensagem}/>
      
              
    </div>
  );
}

export default App;
