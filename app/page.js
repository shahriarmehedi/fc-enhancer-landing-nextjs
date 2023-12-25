import AppReviews from '@/components/AppReviews'
import CTA from '@/components/CTA'
import CustomerReviews from '@/components/CustomerReviews'
import Discord from '@/components/Discord'
import Extension from '@/components/Extension'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Youtube from '@/components/Youtube'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='text-white'>
      <Navbar />
      <Hero />
      <AppReviews />
      <Extension />
      <Discord />
      <Youtube />
      <CustomerReviews />
      <CTA />
      <Footer />

    </main>
  )
}
