import FrontendLayout from '@/Layouts/FrontendLayout'
import React from 'react'
import Search from './components/Search'
import Hero from './components/Hero'
import HomeInfo from './components/HomeInfo'
import FeatureBusiness from './components/FeatureBusiness'
import OurBlog from './components/OurBlog'
import FeatureCategories from './components/FeatureCategories'
import FeatureLocations from './components/FeatureLocations'

const Home = ({categories, locations, businesses, blogs}) => {
  return (
    <div className='bg-yellow-50'>
      <div className='relative'>
        {/* Hero section starts  */}
          <Hero />
        {/* Hero section ends  */}

        {/* Search Component Starts */}
          <Search />
        {/* Search Component Ends */}
      </div>
      {/* inform section starts  */}
        <HomeInfo />
      {/* inform section ends  */}

      {/* feature business starts  */}
        <FeatureBusiness />
      {/* feature business ends */}

      {/* Our blogs section starts */}
        <OurBlog />
      {/* Our blogs section ends */}

      {/* feature categories starts */}
        <FeatureCategories />
      {/* feature categories ends */}

      {/* feature locations starts */}
        <FeatureLocations />
      {/* feature locations ends */}
    </div>
  )
}

Home.layout = page => <FrontendLayout title="Home" children={page} />
export default Home
