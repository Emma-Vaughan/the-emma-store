import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <p className={styles.locationInfo}>
        United Kingdom | English (UK) | £(GBP)
      </p>
      <div className={styles.footerRight}>
        <p>&copy; 2021 Emma Inc.</p>
        <a href="#">Terms of Use</a>
        <a href="#">Privacy</a>
        <a href="#">Cookies</a>
      </div>
    </div>
  );
}

export default Footer;
