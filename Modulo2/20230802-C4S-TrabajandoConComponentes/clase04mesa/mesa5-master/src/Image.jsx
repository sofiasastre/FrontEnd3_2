import styles from "./Image.module.css"; // Import css modules stylesheet as styles

export function Image({src,alt}) {

  return (
    <img src={src} alt={alt} className={styles.img} />
  );
}