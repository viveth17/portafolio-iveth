import styles from '..//styles/PagePrincipal.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import ContainerInfo from './ContainerInfo';


function PagePrincipal() {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.containerSup}>
                <p className={styles.textSup}>Sobre mi</p>
                <p className={styles.textSup}>Proyectos</p>
                <p className={styles.textSup}>Contacto</p>
                <FontAwesomeIcon icon={faLinkedinIn} className={styles.icon} />
                <FontAwesomeIcon icon={faGithub} className={styles.icon} />
            </div>
            <div className={styles.containerSub}>
                <ContainerInfo />
            </div>
        </div>
    )
}
export default PagePrincipal 
