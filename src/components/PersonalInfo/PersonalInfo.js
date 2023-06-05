import React, { useRef, useState } from 'react';
import './Styles.scss';

import emailjs from '@emailjs/browser';

import { CountryDropdown } from "react-country-region-selector";
import { useDispatch } from 'react-redux';
import {SAVE_PERSONAL_INFO_FORM } from '../../redux/bookSlice';

export const initialInfoFormState = {
  firstName:"",
  lastName:"",
  age:"",
  phoneNumber:"",
  email:"",
  address:"",
  country:"",
  city:"",
  zipCode:"",
}

 const PersonalInfo = ({handleSubmit}) => {
    const dispatch = useDispatch()
     const form = useRef();
    const [personalInfoForm, setPersonalInfoForm] = useState({
        ...initialInfoFormState})

    
    const submitInfo = (e) => {
        e.preventDefault()
        handleSubmit()  
      setPersonalInfoForm(initialInfoFormState)
      emailjs.sendForm('service_3sw60ix', 'template_nb7d49r', form.current, '6oZcRMEOWlBbfRtDA')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    }

    const handlePersonalInfo = (e) => {
    dispatch(SAVE_PERSONAL_INFO_FORM({
        personalInfoForm: personalInfoForm
    }))
    localStorage.setItem('personalInfo', JSON.stringify(personalInfoForm))
        const {name,value} = e.target
        setPersonalInfoForm({
          ...personalInfoForm,
          [name]:value,
        })
    }

  return (
<section className='personal'>
    <div className='personal_info'>
        <form ref={form} onSubmit={submitInfo}>
            <h3>Personal Information</h3>
            <div className="personal_info_form">
                <div className="personal_info_item">
                <label> First Name</label>
                <input
                    type="text"
                    placeholder="First Name"
                    required
                    name="firstName"
                    value={personalInfoForm.firstName}
                    onChange={(e) => handlePersonalInfo(e)}
                />
                </div>  
                <div className="personal_info_item">
                <label> Last Name</label>
                <input
                    type="text"
                    placeholder="Last Name"
                    required
                    name="lastName"
                    value={personalInfoForm.lastName}
                    onChange={(e) => handlePersonalInfo(e)}
                />
                </div>
                <div className="personal_info_item">
                    <label>Age</label>
                    <input 
                    type="number"
                    placeholder="Age"
                    required
                    name="age"
                    value={personalInfoForm.age}
                    onChange={(e) => handlePersonalInfo(e)}
                    />
                </div>
                <div className="personal_info_item">
                <label>Phone Number</label>
                <input
                    type="text"
                    placeholder="Phone Number"
                    name="phoneNumber"
                    value={personalInfoForm.phoneNumber}
                    onChange={(e) => handlePersonalInfo(e)}
                />
                </div>
                <div className="personal_info_item">
                <label>Email</label>
                    <input
                    type="email"
                    placeholder="Email"
                    required
                    name="email"
                    value={personalInfoForm.email}
                    onChange={(e) => handlePersonalInfo(e)}
                    />
                </div>
                <div className="personal_info_item">
                    <label>Address</label>
                <input
                    type="text"
                    placeholder="Address"
                    required
                    name="address"
                    value={personalInfoForm.address}
                    onChange={(e) => handlePersonalInfo(e)}
                />
                </div>
                <div className="personal_info_item">
                    <label>Zip code</label>
                <input
                    type="text"
                    placeholder="Zip code"
                    required
                    name="zipCode"
                    value={personalInfoForm.zipCode}
                    onChange={(e) => handlePersonalInfo(e)}
                />
                </div>
                <div className="personal_info_item">
                    <label>City</label>
                <input
                    type="text"
                    placeholder="City"
                    required
                    name="city"
                    value={personalInfoForm.city}
                    onChange={(e) => handlePersonalInfo(e)}
                />
                </div>
                <div className="personal_info_item">
                    <CountryDropdown
                    className='personal_info_country'
                    valueType="short"
                    value={personalInfoForm.country}
                    onChange={(val) =>
                    handlePersonalInfo({
                        target: {
                        name: "country",
                        value: val,
                        },
                    })
                    }
                />
                </div>
            </div>
            <button type='submit'>Confirm reservation</button>
        </form>
    </div>   
</section>

  )
}

export default  PersonalInfo;
