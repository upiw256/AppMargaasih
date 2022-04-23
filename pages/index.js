import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>SMAN 1 Margaasih</title>
        <meta name="description" content="aplikasi SMAN 1 Margaasih" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div><h1>Header</h1></div>
    </div>
  )
}
