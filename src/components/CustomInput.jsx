import styles from './CustomInput.module.css'

function CustomInput(props) {
    const {type, value, placeholder} = props
    return (
      <input className={styles.customInput}
        type={type}
        value={value}
        placeholder={placeholder}
      />
    );
  }
  
  export default CustomInput;