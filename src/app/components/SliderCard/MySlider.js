import React from 'react'
import Slider from "./SliderCard"
import { DataArray } from '../../data'

export default function MySlider() {
  return (
    <div>
        {
            DataArray.map((item, index)=>(
                <div 
                key={index}
                className='my-slider'>
                    <Slider
                     item={item} 
                     index={index} />

                </div>
            ))
        }
    </div>
  )
}
