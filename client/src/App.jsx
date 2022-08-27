import React from 'react'
import Footer from './layouts/Footer'
import Header from './layouts/Header'
import Home from './pages/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Blog from './pages/Blog'
import Testi from './pages/Testi'
import Gallery from './pages/Gallery'
import Order from './pages/Order'
import Test from './pages/Test'

export default function App() {
  return (
    <Router>
    <Header/>
        <main className='min-h-screen'>
          <Routes>
            <Route path='/' element={ <Home/> }/>
            <Route path='/about/*' element={ <About/>} />
            <Route path='/contact' element={ <Contact/>} />
            <Route path='/product' element={ <Product/>} />
            <Route path='/gallery' element={ <Gallery/>}/>
            <Route path='/order' element={<Order/>} />
            <Route path='/blog' element={ <Blog/>} />
            <Route path='/testi' element={ <Testi/>} />
            <Route path='/test' element={<Test/>} />
          </Routes>
        </main>
    <Footer/>
   </Router>
  )
}
