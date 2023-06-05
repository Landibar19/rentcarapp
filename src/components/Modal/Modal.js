import React, { useState } from 'react';
import './Styles.scss';
import {AiOutlineCloseCircle} from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';

import { ADD_ITEM_TO_MODAL, SHOW_MODAL, selectModalItem, selectShowModal,  } from '../../redux/modalSlice';
import PersonalInfo from '../PersonalInfo/PersonalInfo';
import {selectPersonalInfoForm } from '../../redux/bookSlice';




const Modal = ({submitBookForm,bookForm,img}) => {

const showModal = useSelector(selectShowModal)
const modalItem = useSelector(selectModalItem)
const personalInfoForm = useSelector(selectPersonalInfoForm)



const [showReservation, setShowReservation] = useState(false)

const dispatch = useDispatch()

 const handleSubmit=  () => { 
    dispatch(ADD_ITEM_TO_MODAL({
    modalItem: [personalInfoForm,bookForm]
  })) 
   localStorage.setItem('reservation', JSON.stringify(modalItem))
   submitBookForm()
   setShowReservation(!showReservation)

 }
  return (
    
    <>
    <div>
      <div className='modal'>
      <div className='modal_full'> 
       <div className="modal_button" 
            onClick={()=> dispatch(SHOW_MODAL(!showModal))}
        >
          <AiOutlineCloseCircle/>
        </div>
        {!showReservation ? (
        <div>
        <div className='modal_reservation'>
          <h1>Complete your reservation</h1>
        </div>
        <div className='modal_reservation_done'> 
          <h2>Once reservation is done completing this form you will get : </h2>
          <div>
            <h3>Your rental voucher
              to produce on arrival at the rental desk and 
              a free customer support number.</h3>
          </div>
        </div>
        <div className='modal_form'>
          <div className='modal_book_form'>
            <h2>
              Location and time
            </h2>
            <div>
              <label>Pick-up time</label>
              <p>
                {bookForm.pickTime}
              <input type="time"/>
              </p>
            </div>
            <div>
              <label>Drop-of date</label>
            <p>
            {bookForm.dropTime}
              <input type="time"/>
              </p> 
            </div>
            <div>
              <label>Pick-up Location</label>
              <p>
              {bookForm.pickLocation}
              <input type="time"/>
              </p>
            </div>
            <div>
              <label>Drop-of Location</label>
              <p>
              {bookForm.dropLocation}
              <input type="time"/>
              </p>
            </div>
          </div>
      
          <div className='modal_book_photo'>
            <div>{bookForm.carModel}</div>
            <img src={img} alt=''/>
          </div>
        </div>
        <PersonalInfo handleSubmit={handleSubmit}/>
        </div>
        ):(
        <div className='reservation'>
          <div className='reservation_answer'>
              <div className='reservation_answer_done'>
              <h2> Thank you for your reservation</h2>
              <h3> Your reservation is now complete</h3>
              <div>
                  <h4> You will find a copy  of your data in your email</h4>
                  <h2> Thank you!</h2>
              </div>
              </div>
            
          </div>
        </div>
        )}

      
      </div>
   
      
    </div>
   </div>
  
    </>
  )
}

export default Modal;
