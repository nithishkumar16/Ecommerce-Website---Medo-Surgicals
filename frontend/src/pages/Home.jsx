import React from 'react'
import Hero from '../components/Hero'
import FeaturedProducts from '../components/FeaturedProducts'
import OurPolicy from '../components/OurPolicy'
import Categories from '../components/Categories'

const Home = () => {
  return (
    <div>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <OurPolicy />
    </div>
  )
}

export default Home
