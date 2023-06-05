import React from 'react';
import './Styles.scss';

import { Link } from 'react-router-dom';

import { AiOutlineRight ,AiOutlineLinkedin, AiOutlineMail} from 'react-icons/ai';
import { BsFacebook, BsPinterest,BsReddit,BsTelegram} from 'react-icons/bs';
import { FaWhatsappSquare, FaTwitter } from 'react-icons/fa';
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  RedditShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,

} from "react-share";


import car from '../../assets/golf (2).png'
import image from '../../assets/Photo_1683208116656.png';
import image1 from '../../assets/Photo_1683208372446.png';
import image2 from '../../assets/getcar.jpg';

import BookForm from '../../components/BookForm/BookForm'


const Home = () => {

  const scrollToForm = () => {
   document.getElementById('form').scrollIntoView();
  }
  const currentUrlPage = window.location.href
  
  return (
    <>
   <section className='home'>
    <div className='home_info'>
      <div className='home_text'>
          <div className='home_description'>
            <h1>Car Rental <span>best</span> options</h1>
            <h3>
              High quality. 
              Unbeateable prices.Flexible pick-up options.
            </h3>
            <div>
              <p>
              Whether it's a business trip or a holiday, 
              we can make it easy to hire a car. Thanks 
              to our years of experience in car rentals and the 
              customer-oriented philosophy that characterizes us, 
              we offer high-quality car rental services in Vlora
              </p>
            </div>
            <div >
              <Link onClick={(e) => scrollToForm(e.form)} to='/'>
              <button>Book now <AiOutlineRight/></button> 
              </Link>
            </div>
          </div>
      </div>
      <div className='home_photo'> 
        <img src={car} alt=''/>
      </div> 
    </div>
  </section>
  <section className='info'>
    <h3>Plan your trip with us </h3>
    <div className='info_main'>
      <div className='info_text'>
        <h1>
          Get fast and easy the right car for you
        </h1>
      </div>
      <div className="info_get_car">
        <div>
          <h4>Select Your Car</h4>
          <img src={image} alt=''/>
          <p>Chekck our models and find what is more suitable to your needs.
            We have all cars and models that fulfill or your vacations transport needs.
          </p>
        </div>
        <div>
          <h4>Contact us</h4>
          <img src={image1} alt=''/>
          <p> Contact us for any question and concern.We are 24/7 available.</p>
        </div>
        <div>
          <h4>Welcome! Lets Drive</h4>
          <img src={image2} alt=''/>
          <p> Get yor car to travel in one Vlora or 
            any other destination do discover dhe beauty of Albania
            </p>
        </div> 
      </div>
    </div>
  </section> 
  <section className='form' id='form'>
    <BookForm/>
  </section>
  <section className='social'>
    <div className='social_media'>
      <h1>Connect with us</h1>
      <div className='social_media_contact'>
        <p>
        Like and Share us on social Media Facebook, LinkedIn, Instagram etc.
        Contact us via WhatsApp
        .We are 24/7 available 
        </p>
      </div>
      <div className='social_media_networks'>
        <div className='social_facebook'>
          <FacebookShareButton url={currentUrlPage} >
           <p>Facebook</p>
          <BsFacebook/>
          </FacebookShareButton>  
        </div>
        <div className='social_whatsapp'>
          <WhatsappShareButton url={currentUrlPage}>
            <p>WhatsApp</p>
            <FaWhatsappSquare/>
          </WhatsappShareButton>
        </div>
        <div className='social_linkedIn'>
          <LinkedinShareButton url={currentUrlPage}>
           <p>LinkedIn</p>
           <AiOutlineLinkedin/>
          </LinkedinShareButton> 
        </div>
        <div className='social_twitter'>
         <TwitterShareButton url={currentUrlPage}>
          <p>Twiter</p>
          <FaTwitter/>
          </TwitterShareButton>
        </div>

        <div className='social_pinterest'>
         <PinterestShareButton url={currentUrlPage}>
          <p>Pinterest</p>
          <BsPinterest/>
          </PinterestShareButton>
        </div>
        <div className='social_reddit'>
         <RedditShareButton url={currentUrlPage}>
          <p>Reddit</p>
          <BsReddit/>
          </RedditShareButton>
        </div>
        <div className='social_telegram'>
         <TelegramShareButton url={currentUrlPage}>
          <p>Telegram</p>
          <BsTelegram/>
          </TelegramShareButton>
        </div>
        <div className='social_emails'>
         <EmailShareButton url={currentUrlPage}>
          <p>Email</p>
          <AiOutlineMail/>
          </EmailShareButton>
        </div>
      </div>
    </div>
  </section>
  </>
  
  )
}

export default Home
