import FrontendLayout from '@/Layouts/FrontendLayout'
import React from 'react'

const Home = () => {
  return (
    <div>
      this is home page 
    </div>
  )
}

Home.layout = page => <FrontendLayout title="Home" children={page} />
export default Home
