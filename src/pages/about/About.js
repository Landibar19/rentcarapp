import React from 'react';
import './Styles.scss';

import photo from '../../assets/vlora.jpg';

import GoogleMaps from '../../components/GoogleMaps/GoogleMaps';


const About = () => {

  
  return (
    <div className='about'>
     <div className='about_us'>
     <h5>We are located in Vlore,Albania</h5>
     <img src={photo} alt='Vlore'/>
          <p> 
          CarRental Vlora is a rental car business located in Vlora City,Albania.
          Our company was founded in 2001 and since there we continue to expand and offer 
          best services in our city and further.
          How we serve our clients: In all Albania territory
          We offer convenient locations such as airports, train stations, cruise ports, and hotels, where you can get
          great car rental deals on suvs, convertibles, passenger vans and more.
          </p>
     </div> 
     <div className='about_choose_us'>
      <h5>
      Why choose us?
      </h5>
      <p>-     this will give you better flexibility in terms of vehicle choices;</p>         
      <p>-    vehicle make and model will be confirmed, and not “similar” 
              to those you selected;</p>
      <p>-     you can directly negotiate some of the terms and conditions, 
              payment options, especially if you require unique or long term rental service;</p>
      <p>-     you can book “commission free”;</p>

      <p>-     you can reach us 24/7 on our mobile numbers;</p>

      <p>-     you can call us free from the “Free call” service on our website;</p>

      <div className='about_cars'>
      We offer a varied fleet of cars, ranging from the compact Ford CMax  to 
      Toyota the 8-seater VW Multivan. All our vehicles have air conditioning,  
      power steering,electric windows. All our vehicles are bought and maintained 
      at official dealerships only.Automatic transmission cars are available in every 
      booking class.We pride ourselves on personalized service, great 
      cars and excellent rates.
      </div>
     </div>
     <GoogleMaps className='about_maps'/>
    </div>
  )
}

export default About
