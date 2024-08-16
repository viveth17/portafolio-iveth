import styles from '../styles/ContainerInfo.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


function ContainerInfo() {
    const handleClickButton = () => {
        window.open('https://drive.google.com/file/d/15JbEVvTpVgd3_apUnNbPN9XBUDotp9P6/view?usp=drive_link', '_blank');
    };
    const handleClickLinkedin = () => {
        window.open('https://www.linkedin.com/in/iveth-vizcarra-desarrolladoraweb/', '_blank');
    }
    const handleClickGithub = () => {
        window.open('https://github.com/viveth17', '_blank');
    }

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
                <button className={styles.buttonCv} onClick={handleClickButton}>DESCARGAR CV</button>
            </div>
            <div className={styles.containerIcons}>
                <FontAwesomeIcon icon={faLinkedinIn} className={styles.icon} onClick={handleClickLinkedin} />
                <FontAwesomeIcon icon={faGithub} className={styles.icon} onClick={handleClickGithub} />
            </div >
        </div>
    )
}
export default ContainerInfo

