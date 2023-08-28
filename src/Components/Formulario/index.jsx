import { useState } from "react";

const Formulario = () => {
  const [altura, setAltura] = useState(0);
  const [peso, setPeso] = useState(0);
  const [result, setResult] = useState(0);

  const renderizarResultado = () => {
    const imc = peso / (altura * altura);
    setResult(imc);
    if (result < 18.5) {
      return <p>Magreza</p>;
    } else if (result >= 18.5 && result <= 24.9) {
      return <p>Normal</p>;
    } else if (result >= 25 && result <= 29.9) {
      return <p>Sobrepeso</p>;
    } else {
      return <p>Obesidade</p>;
    }
    
  };

  return (
    <form>
      <input
        type="number"
        onChange={(e) => setAltura(parseFloat(e.target.value))}
        placeholder="Altura"
      />
      <br/>
      <input
        type="number"
        onChange={(e) => setPeso(parseFloat(e.target.value))}
        placeholder="Peso"
      /> <br/>
      
      <button onClick={renderizarResultado}>Calcular</button>
      {result}
      
    </form>
    
  );
};

export default Formulario;
