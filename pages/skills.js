import Image from "next/image";
import styles from '../styles/Skills.module.css';

const Skills = () => {
    return ( 
        <>
            <div className={styles.skills}>
                <h1>Principais habilidades</h1>
                <div className={styles.container}>
                    <div className={styles.skill}>
                        <div className={styles.imgContainer}>
                            <Image src='/design.svg' width={58} height={58} />
                        </div>
                        <h2>Design</h2>
                        <p>Aproximações de design modernas e consistente, com o uso de fundamentos
                            de design faço meu melhor para entregar ideias unicas e atraentes para 
                            os projetos em que trabalho.
                        </p>
                    </div>

                    <div className={styles.skill}>
                        <div className={styles.imgContainer}>
                            <Image src='/prototype.svg' width={58} height={58} />
                        </div>
                        <h2>Prototipação</h2>
                        <p>Com o uso de ferramentas como Figma e AdobeXD crio prototipos para representarem
                            minhas ideias e ajudar meus clientes a terem uma persectiva de qual será o resultado
                            final do projeto.
                        </p>
                    </div>

                    <div className={styles.skill}>
                        <div className={styles.imgContainer}>
                            <Image src='/build.svg' width={58} height={58} />
                        </div>
                        <h2>Construção</h2>
                        <p>Utilizando de tecnologias como HTML, CSS, JavaScript, React, Next.js, Wordpress e mais, sou 
                            capaz de transformar projetos em realidade, entregando aplicações funcionais e visualmente
                            atrativas, ajudando a tirar ideias do papel e a expandir negocios para a web.
                        </p>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Skills;