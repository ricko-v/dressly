import Hero from "../components/organism/Hero"
import ListBrand from "../components/organism/ListBrand"
import ListTopSelection from "../components/organism/ListTopSelection"
import ListBestSeller from "../components/organism/ListBestSeller"
import Navbar from "../components/organism/Navbar"
import Subscribe from "../components/organism/Subscribe"
import Footer from "../components/organism/Footer"
import StepToOrder from "../components/organism/StepToOrder"

function Home() {

  return (
    <>
      <Navbar />
      <Hero />
      <ListBrand />
      <ListTopSelection />
      <ListBestSeller />
      <StepToOrder />
      <Subscribe />
      <Footer />
    </>
  )
}

export default Home
