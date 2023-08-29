import styles from './Reset.module.css'

export default function Reset(props) {
    const resetarValores = () => {
        props.setPeso(0);
        props.setAltura(0);
        props.setResult(0);
        props.setMensagem('');

    }
  return (
    <div className={styles.button}>
      <button onClick={resetarValores}>Reset</button>
    </div>
  );
}