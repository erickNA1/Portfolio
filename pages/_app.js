import '../styles/globals.css'
import Layout from '../components/layout'

function MyApp({ Component, pageProps }) {
  return (

      <Layout>
        <div className='content'>
          <Component {...pageProps} />
        </div>
      </Layout>

  )
}

export default MyApp
