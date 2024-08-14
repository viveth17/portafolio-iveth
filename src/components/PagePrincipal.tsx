import styles from '..//styles/PagePrincipal.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import ContainerInfo from './ContainerInfo';
// import HamburgerMenu from './HamburgerMenu';


function PagePrincipal() {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.containerSup}>
                <FontAwesomeIcon icon={faBars} className={styles.iconMenu} />
                {/* <HamburgerMenu /> */}
            </div>
            <div className={styles.containerSub}>
                <ContainerInfo />
            </div>
        </div>
    )
}
export default PagePrincipal 
