import React from 'react'
import './Home.scss'
import Hero from '../../components/Hero/Hero'
import EasyBank from '../../components/EasyBank/EasyBank'
import Articles from '../../components/Articles/Articles'

function Home() {
  return (
   <main className="home">
    <Hero />
    <EasyBank />
    <Articles />
   </main>
  )
}

export default Home