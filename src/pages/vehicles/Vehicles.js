import React, { useEffect } from 'react';
import './Styles.scss';

import { useDispatch, useSelector } from 'react-redux';
import { carData } from '../../components/data';
import { CAR_DATA, selectCarData } from '../../redux/carSlice';
import { AiFillStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Vehicles = () => {

  const carItem = useSelector(selectCarData)

  const dispatch = useDispatch()
  const data = carData

  
  
  useEffect(()=> {
    dispatch(CAR_DATA({
    carData: data
    }))
     },[dispatch,data])

  return (
    <div className='vehicle'>
      <div className='vehicle_title'>
        <h1> Vehicle Models</h1>
        <h3>All models and specifications for our vehicles are in description below.</h3>
      </div>
      
      <div className='vehicle_container'>
      {carItem.map((item,idx)=> (
       <div className='vehicle_item' key={idx}>
        <img src={item.image} alt=''/>
        <div className='vehicle_item_data'>
        <div className='vehicle_item_props'>
          <span>
          <div>{item.name}</div>
          <span><AiFillStar/>
          <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></span>
          </span>
          <span>
            {item.price}$/day
            </span>
        </div>
        <div className='vehicle_item_props'>
          <span>{item.category} </span>
          <span>4/5 icon</span>
        </div>
        <div className='vehicle_item_props'>
          <span>Manual</span>
          <span>Diesel</span>
        </div>
      </div>
      <div >
        <Link onClick={() => window.scrollTo(0, 0)} to='/'>
        <button type='button' >Book car</button>
       </Link>
       </div>
      </div>
      ))}
      </div>
    </div>
  )
}

export default Vehicles;
