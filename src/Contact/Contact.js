import styles from "./Contact.module.css";

function Contact() {
  return (
    <div>
      <div className={styles.formContainer}>
        <iframe
          title="contactForm"
          className={styles.contactForm}
          src="https://us7.list-manage.com/contact-form?u=212c4a083493d43bbeedca31a&form_id=5de40e1076136145fca9898cb81f0ae4"
          scrolling="no"
        />
      </div>
    </div>
  );
}

export default Contact;
