import React from 'react'
import Slider from '../../Components/Home/Slider'
import { HomeCategory } from './../../Components/Home/HomeCategory';
import Footer from '../../utilities/Footer';

export const HomePage = () => {
  return (
    <div className='font' style={{ minHeight: "670px" }}>

      <Slider />
      <HomeCategory />

    </div>
  )
}
