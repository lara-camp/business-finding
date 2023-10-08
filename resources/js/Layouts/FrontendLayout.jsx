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
          <Nav/>
        <main>
            {children}
        </main>
        <footer>
            <Footer />
        </footer>
    </div>
  )
}

export default FrontendLayout
