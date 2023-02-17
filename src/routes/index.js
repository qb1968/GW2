import React, { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar/Main'
import Footer from '../components/Footer/Main'
import Home from '../components/Home/Main'
import HomeTwo from '../components/HomeTwo/Main'
import HomeThree from '../components/HomeThree/Main'
import AboutUs from '../components/AboutUs/Main'
import Service from '../components/Service/Main'
import ServiceDetails from '../components/Service/ServiceDetails/Main'
import ServiceDetails2 from '../components/Service/ServiceDetails/Main2'
import ServiceDetails3 from '../components/Service/ServiceDetails/Main3'
import ServiceDetails4 from '../components/Service/ServiceDetails/Main4'
import ServiceDetails5 from '../components/Service/ServiceDetails/Main5'
import ServiceDetails6 from '../components/Service/ServiceDetails/Main6'
import Gallery from '../components/Pages/Gallery/Main'
import Pricing from '../components/Pages/Pricing/Main'
import Faq from '../components/Pages/Faq/Main'
import Team from '../components/Pages/Team/Main'
import TeamDetails from '../components/Pages/TeamDetails/Main'
import Shop from '../components/Pages/Shop/Main'
import ShopDetails from '../components/Pages/ShopDetails/Main'
import Blog from '../components/BlogMain/Blog/Main'
import BlogDetails from '../components/BlogMain/BlogDetails/Main'
import Contact from '../components/Contact/Main'


const Routing = () => {

  const [homepage, sethomepage] = useState(false)

  const location = useLocation();
  const path = location.pathname
  useEffect(() => {
    if (location.pathname === "/home-three") {
      sethomepage(false)
    } else {
      sethomepage(true)
    }
  }, [location])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [path])

  return (
    <>
      {homepage && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home-two" element={<HomeTwo />} />
        <Route path="/home-three" element={<HomeThree />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/service" element={<Service />} />
        <Route path="/service-details" element={<ServiceDetails />} />
        <Route path="/service-details2" element={<ServiceDetails2 />} />
        <Route path="/service-details3" element={<ServiceDetails3 />} />
        <Route path="/service-details4" element={<ServiceDetails4 />} />
        <Route path="/service-details5" element={<ServiceDetails5 />} />
        <Route path="/service-details6" element={<ServiceDetails6 />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/team" element={<Team />} />
        <Route path="/team-details" element={<TeamDetails />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop-details" element={<ShopDetails />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog-details" element={<BlogDetails />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
      <Footer />
    </>
  )
}

export default Routing