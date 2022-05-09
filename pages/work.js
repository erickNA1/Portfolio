import Link from "next/link";
import Image from "next/image";
import styles from '../styles/Work.module.css';

const isImgOn = true

const Work = () => {



    function handleClick() {
        isImgOn = !isImgOn
        console.log(isImgOn)
    }


    return ( 
        
        <>
            <div className={styles.projects}>
                <h1>Alguns de meus trabalhos</h1>

                <div className={styles.container}>
                   <div className={styles.project}>
                       <div className={styles.title} onClick={handleClick}>
                           <h2>Le Chambre</h2>
                       </div>
                       <div className={styles.imgContainer}>
                        <Image src='/chambre.jpeg' width={600} height={380} />
                       </div>
                   </div>

                   <div className={styles.project}>
                       <div className={styles.title}>
                           <h2>Damaged Negatives</h2>
                       </div>
                       <div className={styles.imgContainer}>
                        <Image src='/negative.jpeg' width={600} height={380} />
                       </div>
                   </div>

                   <div className={styles.project}>
                       <div className={styles.title}>
                           <h2>SeaSide Hotel</h2>
                       </div>
                       <div className={styles.imgContainer}>
                        <Image src='/seaside.jpeg' width={600} height={380} />
                       </div>
                   </div>

                   <div className={styles.project}>
                       <div className={styles.title}>
                           <h2>Tais Portfolio</h2>
                       </div>
                       <div className={styles.imgContainer}>
                        <Image src='/tais.jpeg' width={600} height={380} />
                       </div>
                   </div>
                </div>
                
            </div>

            <div className={styles.how}>
                <h1>Como começo um projeto?</h1>
                <div className={styles.steps}>
                    <div className={styles.step}>
                        <p>
                            <span>1.</span>&nbsp;Converso com o cliente sobre o projeto, visando entender tudo
                            que esta procurando, entender todas suas ideias para que possa
                            traduzilas no projeto, oferecendo também dicas e sujestoes para atingir o
                            melhor resultado possivel.
                        </p>
                    </div>

                    <div className={styles.step}>
                        <p>
                            <span>2.</span>&nbsp;Começo a trabalhar em prototipos para apresentar um rascunho 
                            de como será o resultado final do projeto, normalmente apresento 3 modelos, sendo eles:
                             Um modelo apresentando de forma acurada tudo que foi pedido, um modelo apresentando as ideias 
                             porem com uma aproximação mais pessoal do desgin e por ultimo uma aproximação alternativa apresentando
                             uma forma diferente das ideias iniciais de design.
                        </p>
                    </div>

                    <div className={styles.step}>
                        <p>
                            <span>3.</span>&nbsp;Assim que for definido qual caminho seguir começo a trabalhar no projeto 
                            apresentando relatorios para um melhor acompanhamento do desenvolvimento do projeto para 
                            que fique claro para o cliente como esta sendo o andamento do projeto até o momento de 
                            sua entrega.
                        </p>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Work;
