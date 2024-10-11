import React from 'react'
import "./home.css"
import { Link } from 'react-router-dom'
import diwaliImage from '../../images/Diwali.jpg';
import { Carousel } from 'react-responsive-carousel' 
import 'react-responsive-carousel/lib/styles/carousel.min.css' 
import courier1 from "../../images/courier1.webp"
import courier2 from "../../images/courier2.jpg"
import courier3 from "../../images/courier3.webp"
import img1 from "../../images/Carousel1.jpeg"
import img2 from "../../images/Carousel2.jpg"

const Home = () => {
  return (
    <div className="homeContainer">
        <section className='homeIntro'>
          <div className="welcomeSection">
            <h2 className="welcomeText">Welcome to Global-GI Pune</h2>
            <p className="introText">
              Global-GI Pune is your trusted partner in express logistics and courier services, delivering unparalleled international air express solutions for all your courier and cargo needs. We offer a comprehensive range of services across all known countries and territories worldwide.
            </p>
            <p className="introText">
              Our domestic courier service ensures reliable door-to-door delivery across India. We specialize in packing and moving services, offering large shipments via air, land, and sea with utmost care and efficiency.
            </p>
          </div>

          {/* Carousel Section */}
          <div className="carouselContainer">
            <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
              <div>
                <img src={diwaliImage} alt="Diwali celebration" className="carouselImage" />
              </div>
              <div>
                <img src={img1} alt="Courier1" className="carouselImage" />
              </div>
              <div>
                <img src={img2} alt="Courier2" className="carouselImage" />
              </div>
            </Carousel>
          </div>
        </section>

        {/* Services Section */}
        <section className="servicesSection">
          <h1 className="servicesTitle">Our Services</h1>
          <div className="servicesContainer">
            <ServiceCard 
              title="International Courier and Cargo" 
              image={courier2}
              link="/international-courier"
              services={[
                "International Express Services (Fast Service)",
                "International Economy Services (Cost-effective Delivery)",
                "Occasion & Seasonal Express",
                "University Application Shipment",
                "International Excess Baggage"
              ]}
            />
            <ServiceCard 
              title="Domestic Courier and Cargo" 
              image={courier3}
              link="/domestic-courier"
              services={[
                "Domestic Air Express (Quick and Efficient Delivery)",
                "Economy Surface (By Road)",
                "Occasion and Seasonal Express",
                "Domestic Excess Baggage",
                "Student Express"
              ]}
            />
            <ServiceCard 
              title="Packers and Movers Services" 
              image={courier1}
              link="/packers-and-movers"
              services={[
                "Packers, Movers & Couriers",
                "House Relocation Services",
                "Corporate Relocation Services",
                "Vehicle Relocation Services",
                "International Relocation Services"
              ]}
            />
          </div>
        </section>

        <p className="closingText">
          Experience the difference with Global-GI Pune – where your satisfaction is our top priority. We ensure that all your logistics needs are met with precision and care.
        </p>
    </div>
  )
}

const ServiceCard = ({ title, image, link, services }) => (
  <div className="serviceCard">
    <div className="headerWithBackground">
      <h2><Link to={link}>{title}</Link></h2>
      <img src={image} alt={title} className="headerImage" />
    </div>
    <ul>
      {services.map((service, index) => (
        <li key={index}>{service}</li>
      ))}
    </ul>
  </div>
)

export default Home;
