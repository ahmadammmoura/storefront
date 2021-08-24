import React from 'react'
import Header from './components/Header';
import Categories from './components/Categories';
import Footer from './components/Footer';
import Products from './components/Products';
import SimpleCart from './components/SimpleCart';
function App() {
  return (
    <>
      <Header/>
      <SimpleCart/>
      <Categories/>
      <Products/>
      <Footer/>
    </>
  )
}

export default App
