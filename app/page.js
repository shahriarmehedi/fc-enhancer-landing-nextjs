import AppReviews from '@/components/AppReviews'
import CTA from '@/components/CTA'
import CustomerReviews from '@/components/CustomerReviews'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import SingleViewData from '@/components/SingleViewData'


export default function Home() {
  return (
    <main className='text-white'>
      <Navbar />
      <Hero />
      <AppReviews />
      <SingleViewData />
      <CustomerReviews />
      <CTA />
      <Footer />

    </main>
  )
}
