import styles from '../styles/ContainerInfo.module.css';

function ContainerInfo() {
    return (
        <div className={styles.containerInfo}>
            <img className={styles.photo} src="/woman.jpg" alt="Mujer Programadora" />
            <div className={styles.textContainer}>
                <p className={styles.text}>
                    ¡Hola!
                    <br />
                    Soy Iveth Vizcarra
                    <br />
                    Desarrolladora Frontend
                    <br />
                    Apasionada por la tecnología y aprendíz de por vida
                </p>
            </div>
        </div>
    )
}
export default ContainerInfo