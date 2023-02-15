import styles from "./input.module.css";

function Input({
  placeholder,
  size = "large",
  onChange,
  name,
  minLength = 0,
  type,
  value
}) {
  return (
    <label className={styles.label}>
      <input
        className={`${styles.input} ${styles[size]}`}
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        minLength={minLength}
        type={type}
        value={value}
      />
    </label>
  );
}

export default Input;
