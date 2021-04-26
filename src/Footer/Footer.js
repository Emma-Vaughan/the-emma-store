import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <p className={styles.locationInfo}>
        United Kingdom | English (UK) | £(GBP)
      </p>
      <a href="/Contact">Contact Us</a>
      <div className={styles.footerRight}>
        <p>&copy; 2021 Emma Inc.</p>
        <a href="http://www.google.com">Terms of Use</a>
        <a href="http://www.google.com">Privacy</a>
        <a href="http://www.google.com">Cookies</a>
      </div>
    </div>
  );
}

export default Footer;
