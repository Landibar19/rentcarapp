import React, {useState,useRef } from 'react';

import './Styles.scss';

import emailjs from '@emailjs/browser';

import {AiFillCar} from 'react-icons/ai';
import {GoLocation} from 'react-icons/go';
import {BiTimeFive} from 'react-icons/bi';

import { useDispatch, useSelector } from 'react-redux';
import { SAVE_BOOK_FORM } from '../../redux/bookSlice';
import { SHOW_MODAL } from '../../redux/modalSlice';


import image1 from '../../assets/IMG-20230428-WA0001.jpg';
import image2 from '../../assets/caddy.jpg';
import image3 from '../../assets/car_3-removebg-preview.png';
import image4 from '../../assets/IMG-20230504-WA0002.jpg';
import image5 from '../../assets/golf (2).png';
import Modal from '../Modal/Modal';
import { ShowonModal } from '../ShowHideLinks/ShowHideModal';
import { selectShowModal } from '../../redux/modalSlice';



const initialFormState = {
  carModel:"",
  pickLocation:"",
  dropLocation:"",
  pickTime:"",
  dropTime:"",
  
}

const BookForm = () => {
  
  const form = useRef()

  const showModal = useSelector(selectShowModal)

  const dispatch = useDispatch()

 const [bookForm, setBookForm] = useState({
  ...initialFormState})


  const handleSubmit = () => {
    dispatch(SAVE_BOOK_FORM(bookForm))
    localStorage.setItem('cars', JSON.stringify(bookForm))

    emailjs.sendForm('service_3sw60ix', 'template_nb7d49r', form.current, '6oZcRMEOWlBbfRtDA')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    setBookForm(initialFormState)
  }

  

  const handleBook = (e) => { 
    const {name,value} = e.target
    setBookForm({
      ...bookForm,
      [name]:value,
    })
  }


  const showModalForm = (e) => {
      e.preventDefault()
    if (
      bookForm.pickTime === "" ||
      bookForm.dropTime === "" ||
      bookForm.pickLocation === "" ||
      bookForm.dropLocation === "" ||
      bookForm.carModel === ""
         ){
      alert("All fields required")
        } else {
          dispatch(SHOW_MODAL({
            showModal:!showModal
          }))
        }
  }

let imageUrl;

switch (bookForm.carModel) {
  case "Golf 6":
    imageUrl = image1
    break
  case "Caddy":
    imageUrl=image2
    break
  case "Opel Astra":
    imageUrl=image3
    break
  case "Ford":
    imageUrl=image4
    break
  case "Audi":
    imageUrl=image5
    break
    default:
      imageUrl = "";
}

  return (
    
    <>
    <div className='book_form'>
      <form  ref={form}>
        <div>
            <label>
             <i ><AiFillCar/></i>
             Select your Car
             <b>*</b>  
            </label>
            <select 
              required
              name='carModel'
              value={bookForm.carModel} 
              onChange={(e) => handleBook(e)}>
                <option value='Select Car' >Select Car</option>
                <option value='Audi'> Audi</option>
                <option value='Golf 6'> Golf 6</option>
                <option value='Opel Astra'> Opel Astra </option>
                <option value='Caddy'> Caddy</option>
                <option value='Ford'> Ford</option>  
            </select> 
        </div>
        <div>
            <label>
             <i ><GoLocation/></i>
             Pick-up
             <b>*</b> 
            </label>
            <select
            name='pickLocation'
            required
            value={bookForm.pickLocation}
            onChange={(e) => handleBook(e)}>
                <option>Select your pick-up location</option>
                <option>Tirana Airport</option>
                <option>Durres </option>
                <option> Vlore</option>
                <option>Sarande</option>
                <option>Other location</option>
            </select> 
        </div>
        <div>
            <label>
             <i ><GoLocation/></i>
              Drop-of
             <b>*</b> 
            </label> 
            <select
             name='dropLocation'
             required
             value={bookForm.dropLocation}
             onChange={(e) => handleBook(e)}
            >
                <option>Select your Drop-of location</option>
                <option>Tirana Airport</option>
                <option>Durres </option>
                <option> Vlore</option>
                <option>Sarande</option>
                <option>Other location</option>
            </select>  
        </div>
        <div>
            <label>
             <i ><BiTimeFive/></i>
             Pick-up time
             <b>*</b>  
            </label>
            <input 
              id='pickup_time' 
              type='date'
              name='pickTime'
              required
              value={bookForm.pickTime}
              onChange={(e) => handleBook(e)}
            />
        </div>
        <div>
            <label>
             <i ><BiTimeFive/></i>
             Drop-of time
             <b>*</b>  
            </label> 
            <input 
              id='pickup_time' 
              type='date'
              required
              name='dropTime'
              value={bookForm.dropTime}
            onChange={(e) => handleBook(e)}
            />
        </div>
        <div>
        <button type='button' onClick={showModalForm}>Book your Car</button>    
        </div>
      </form>
   
    </div>
    <ShowonModal>
      <Modal bookForm={bookForm} img={imageUrl} submitBookForm={handleSubmit} />
    </ShowonModal>
    </>
  )
}

export default BookForm
