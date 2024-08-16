import styles from '../styles/ContainerInfo.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


function ContainerInfo() {
    const handleClick = () => {
        window.open('https://drive.google.com/file/d/15JbEVvTpVgd3_apUnNbPN9XBUDotp9P6/view?usp=drive_link', '_blank');
    };

    return (
        <div className={styles.containerInfo}>
            <img className={styles.photo} src="/woman.jpg" alt="Mujer Programadora" />
            <div className={styles.textContainer}>
                <span className={styles.text1}>
                    ¡Hola!, Soy
                </span>
                <span className={styles.text2}>
                    Iveth Vizcarra
                </span>
                <span className={styles.text3}>
                    Desarrolladora Frontend
                </span>
                <span className={styles.text4}>
                    Apasionada por la tecnología &
                </span>
                <span className={styles.text5}>
                    Aprendiz de por vida
                </span>
                <button className={styles.buttonCv} onClick={handleClick}>DESCARGAR CV</button>
            </div>
            <div className={styles.containerIcons}>
                <FontAwesomeIcon icon={faLinkedinIn} className={styles.icon} />
                <FontAwesomeIcon icon={faGithub} className={styles.icon} />
            </div >
        </div>
    )
}
export default ContainerInfo

