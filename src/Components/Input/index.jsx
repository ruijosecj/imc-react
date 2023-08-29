import styles from './Input.module.css'

export default function Input(props) {
  return(
    <div className={styles.input}>
      <label>
        {props.label}
      </label>
      <input type='number' value={props.estado} onChange={(e) => {props.setEstado(+e.target.value)}}/>
    </div>
  )
}

