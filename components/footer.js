import Link from "next/link";
import Image from "next/image";
import styles from '../styles/Footer.module.css';

const Footer = () => {
    return ( 
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.contact}>
                    <p>Algum projeto em mente? entre em contato por email ou pelas redes sociais!</p>
                    <Link href={"mailto: araujoerick.n1@gmail.com"}><a>Enviar</a></Link>
                </div>
                <div className={styles.cr}>
                    <p>Codigo & Design por Erick Nunes. 2022</p>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;
