import styles from './CalcularIMC.module.css'

export default function CalcularIMC(props) {
  const calcularIMC = () => {
    const imc = props.peso / (props.altura * props.altura);
    props.setResult(imc);
    if (imc <= 18.5) {
      props.setMensagem("Abaixo do peso");
    } else if (imc >= 18.6 && imc <= 24.9) {
      props.setMensagem("Peso ideal");
    } else if (imc >= 25 && imc <= 29.9) {
      props.setMensagem("Sobrepeso");
    } else {
      props.setMensagem("Obesidade");
    }
  };
  return (
    <div className={styles.button}>
      <button onClick={calcularIMC}>Calcular IMC</button>
    </div>
  );
}
