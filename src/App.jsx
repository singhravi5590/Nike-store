import React from 'react'
import Hero from './components/Hero'
import Sales from './components/Sales'
import Stories from './components/Stories'
import Footer from './components/Footer'
import Cart from './components/Cart'
import { footerAPI, heroapi, highlight, sneaker, story } from './Data/Data'
import { popularsales, toprateslaes } from './Data/Data'
import Flexcontent from './components/Flexcontent'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
    <Navbar/>
    <Cart/>
    <main className='flex flex-col gap-16 relative'>
      <Hero {...heroapi} />
      <Sales endpoint = {popularsales} ifExists/>
      <Flexcontent {...highlight} ifExists />
      <Sales endpoint = {toprateslaes}/>
      <Flexcontent {...sneaker} />
      <Stories {...story}/>
    </main>
      <Footer {...footerAPI}/>
    </>
  )
}

export default App