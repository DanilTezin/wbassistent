import styles from "./submit-button.module.css";

function SubmitButton({ content, type = "primary", size = "medium", onClick }) {

  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${styles[size]} ${styles[type]}`}
    >
      {content}
    </button>
  );
}

export default SubmitButton;
