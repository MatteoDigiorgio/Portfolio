import Head from 'next/head'
import Navbar from '../components/Navbar'
import Content from '../components/Content'
import { profile, portfolio, foodazon, http3 } from '../components/Content/data'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio ~ Matteo Digiorgio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar></Navbar>
      <section id="profile">
        <Content {...profile}></Content>
      </section>
      <section id="projects">
        <Content {...portfolio}></Content>
        <Content {...foodazon}></Content>
      </section>
      <section id="articles">
        <Content {...http3}></Content>
      </section>
      <section id="social">
        <Footer></Footer>
      </section>
    </>
  )
}
