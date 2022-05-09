import Link from "next/link";
import Image from 'next/image';
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Erick Araujo | WebDesigner & Front-end Developer</title>
        <meta name="description" content="Web Designer e Front-end Developer estudante de analise e develvolvimento
        de sistemas, em busca de colaborar com marcas e negocios para contruir experiencias e impulsionar negocios." />
        <link rel="icon" href="/logo.svg" />
      </Head>

      <div className={styles.frame}>
        <Image src='/window2.svg' width={388} height={482} />
      </div>

      <div className={styles.info1}>
        <div className={styles.hello}>
          <p>WebDesigner e Desenvolvedor Front-end do Brasil! Bem vindo ao meu mundo.</p>
        </div>

        <div className={styles.container}>
          <div className={styles.profile}>
            <h1>Erick Nunes de Araújo</h1>
            <p>Web Designer & Front-end Developer</p>
          </div>
          <div className={styles.imgContainer}>
            <Image src='/profile.jpeg' width={348} height={348} />
          </div>
          
        </div>
      </div>

      <div className={styles.info2}>
        <h2>Meu trabalho</h2>
        <p>&nbsp;&nbsp;Sou um desenvolvedor front-end e web designer freelancer
          buscando colaborar com clientes que queiram conquistar mais visibilidade e
          reconhecimento para seu trabalho através da internet, visando o crescimento da
          marca ou de sua carreira profissional, com a criação de portfólios e paginas na web 
          que dêem ênfase em seus trabalhos, tendo em mente as melhores aproximações criativas
          de design e marketing no mercado.</p>
        <div className={styles.btn}>
        <a href="/files/ErickNunes-CV.pdf" alt="alt text" target="_blank" rel="noopener noreferrer">Curriculum Vitae</a>
        </div>
      </div>

      <div className={styles.info3}>
        <h2>Um pouco sobre mim</h2>
        <p>&nbsp;&nbsp;Desde de sempre passo bastante tempo no computador, e isso
           me proporcionou experiencias únicas que fazem de mim quem sou hoje, um apaixonado
            por tecnologia e arte. Sempre encontrando coisas novas sobre a área, fui muito
            incentivado pela minha própria curiosidade a estudar e aprender assuntos que me
            interessavam, fazendo com que eu tenha a possibilidade de trabalhar em projetos 
            onde posso expressar toda minha criatividade e evoluir ainda mais meus conhecimentos.</p>
      </div>

      <div className={styles.links}>
        <h2>Redes sociais</h2>
        <div className={styles.linkContainer}>
          <div className={styles.link}>
            <Image src='/github.svg' width={28} height={28} />
            <Link href={"https://github.com/erickNA1"}><a target="_blank">@erickNA1</a></Link>
          </div>

          <div className={styles.link}>
            <Image src='/instagram.png' width={24} height={24} />
            <Link href={"https://www.instagram.com/monotonia495/"}><a target="_blank">@monotonia495</a></Link>
          </div>

          <div className={styles.link}>
            <Image src='/behance.svg' width={28} height={28}  />
            <Link href={"https://www.behance.net/monotonia223"}><a target="_blank">@monotonia223</a></Link>
          </div>
        </div>
      </div>
    </>
  )
}
