import Footer from '@/Pages/Frontend/Partials/Footer'
import Header from '@/Pages/Frontend/Partials/Header'
import Nav from '@/Pages/Frontend/Partials/Nav'
import React from 'react'
import { Head, usePage } from '@inertiajs/react'

const FrontendLayout = ({children, title}) => {
  return (
    <div>
        <header>
        <Head title={title} />
            <Header />
          </header>
          {/* navbar  */}
          <div className='sticky top-0 z-50'>
            <Nav />
          </div>
        {<main>
            {children}
        </main>}
        <footer>
            <Footer />
        </footer>
    </div>
  )
}

export default FrontendLayout
