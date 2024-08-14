import { slide as Menu } from 'react-burger-menu';
import styles from '../styles/HamburgerMenu.module.css';

function HamburgerMenu() {
    return (
        <Menu>
            <a id="home" className={styles.menuItem} href="/">Sobre mi</a>
            <a id="about" className={styles.menuItem} href="/about">Proyectos</a>
            <a id="contact" className={styles.menuItem} href="/contact">Contacto</a>
        </Menu>
    );
}

export default HamburgerMenu;