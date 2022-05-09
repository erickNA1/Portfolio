import Link from "next/link";
import Image from "next/image";
import styles from '../styles/Nav.module.css';

const Navbar = () => {
    return ( 
        <nav className={styles.navigation}>
            <div className={styles.container}>
                <div className={styles.container2}>
                    <div className={styles.logo}>
                        <Image src='/logo.svg' width={68} height={50} />
                        <Link href={'/'}>
                            <a>Erick Nunes</a>
                        </Link>
                    </div>

                    <div className={styles.links}>
                        <Link href={"/work"}><a>Trabalhos</a></Link>
                        <Link href={"/skills"}><a>Habilidades</a></Link>
                        <Link href={"https://github.com/erickNA1"}><a target={'_blank'}>GitHub</a></Link>
                    </div>

                </div>
            </div>  
        </nav>
     );
}
 
export default Navbar;