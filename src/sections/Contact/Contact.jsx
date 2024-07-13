import styles from './ContactStyles.module.css';

function Contact() {
  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Get in Touch</h1>

      <div className={styles.cards}>
        <div className={styles.card}>

          <p><a href="mailto:examplemail@gmail.com">Gmail</a></p>

        </div>
        <div className={styles.card}>

          <p><a href="https://www.linkedin.com/in/simi-gracia-sunil-christopher-47362720a/">LinkedIn</a></p>

        </div>
      </div>

    </section>
  );
}

export default Contact;
