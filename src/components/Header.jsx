import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <h1>Contact App</h1>
      <p>
        <a href="#">Pjmzr</a> | React.js Second project
      </p>
    </div>
  );
}

export default Header;
