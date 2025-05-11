import React from 'react'
import Navbar from "../components/NavBar"
import Hero from "../components/Hero"
import HIWS from "../components/HIWS"
import WCUS from "../components/WCUS"
import ContactForm from "../components/ContactForm"
import Footer from "../components/Footer"
import Testimonials from '../components/Testimonials'
function LandingPage() {
  return (
    <div>
       <Navbar />
      <Hero />
      <HIWS />
      <WCUS />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default LandingPage
