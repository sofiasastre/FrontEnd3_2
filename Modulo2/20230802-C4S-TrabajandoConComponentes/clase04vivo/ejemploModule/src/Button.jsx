import styles from "./Button.module.css"; // Import css modules stylesheet as styles

export function Button() {
  function confirmar() {
    alert("confirmado!");
  }

  return (
    <button className={styles.button} onClick={confirmar}>
      Ok
    </button>
  );
}
