import Head from 'next/head'
import Image from 'next/image'
import { Header, Footer, Specialities, OurBlog } from "../components";
import Styles from "../styles/Home.module.scss";
export default function Home() {
  return (
    <div className={Styles['home']}>
      <Head>
        <title>doctor online</title>
        <meta name="description" content="doctor online" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <Specialities />
        <OurBlog />
      </main>

      <Footer />

    </div>
  )
}
