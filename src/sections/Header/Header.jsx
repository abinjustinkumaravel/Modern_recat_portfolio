import styles from './HeaderStyles.module.css';
import Logo from '../../assets/logo.jpeg'

function Header() {
  return (
    <section className={styles.container}>
    <nav>
      <img src={Logo} alt="" />
      <ul>
        <li> <a href="/">Home</a></li>
        <li> <a href="#projects">Projects</a></li>
        <li> <a href="#contact">Contact</a></li>
      </ul>
    </nav>
    </section>
  );
}

export default Header;

