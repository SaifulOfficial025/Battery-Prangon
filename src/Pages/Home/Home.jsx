import Container from "../../Layout/Container/Container"
import Header from "../../Shared/Header"
import Hero from "./Slider"
import FeaturedProduct from "./FeaturedProducts"
import Usecase from "./Usecase"
import Why from "./Why"
import YTVideosSlider from "./YTVideosSlider"
import Testimonials from "./Testimonials"
import Faqs from "./FAQs"
import Dealership from "./Dealership"
import Enquire from "./Enquire"
import Footer from "../../Shared/Footer"


const Home = () => {
  return (
    <div>
      <Header />
      <Container>
        <div className="my-8 flex flex-col gap-16">
      <Hero/>
          <FeaturedProduct/>
          <Usecase/>
          <Why/>
          <YTVideosSlider/>
          <Testimonials/>
          <Faqs/>
        </div>
      </Container>
      <Dealership/>
      <Enquire/>
      <Footer/>
    </div>
  )
}

export default Home
