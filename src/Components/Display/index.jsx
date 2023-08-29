import styles from './Display.module.css'

export default function Display(props) {
  return (
    <div className={styles.div}>
      <span>{props.result.toFixed(2)}</span> 
      <span>{props.mensagem}</span>
    </div>
  );
}
