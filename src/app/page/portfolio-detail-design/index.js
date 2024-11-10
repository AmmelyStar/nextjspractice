/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { useEffect } from 'react';


export default function PortfolioDetailDesign({id, data, DataArray}) {
    useEffect(() => {
        console.log(data.images); // Log images to check if they exist
      }, [data]);
  return (
    <>
    <div className='overlay h-[400px] lg:top-[96px] sm:top-0 z-20 border-gray-300'></div>
    <div className='relative'>
        <img
        alt='bg photo'
        className='h-[400px] lg:mt-24 sm:mt-0 object-fill'
        src={data.images[0]}
        style={{backgroundSize: 'cover'}}
        width={"100%"}
        />
    </div>

    <div className='absolute z-30 top-[42px] sm:top-[200px] sm:left-[65px] justify-center items-center w-full px-10 sm:w-3/4 xl:w-1/2 sm:px-0 sm:text-left'>
    <div className='container m-auto'>
        <div className='max-w-[650px] w-[100%] m-auto'>
            <p className='opacity-3 sm:text-left text-center font-sans text-[#223740] md-3'>
                Project Sample
            </p>
            <h1 className='opacity-3 sm:text-left text-[#223740] text-center w-full sm:w-3/4 font-rocoletaBold text-2xl md:text-4xl lg:text-4xl xl:text-4xl'>{data.title}</h1>
        </div>
    </div>
    </div>

    <div className='grid grid-cols-12 relative space-x-0 lg:space-x-0'
    style={{
        background: 'linear-gradient(90deg, rgba(238, 247, 251, 1) 58%, rgba(255, 255, 255, 1) 52%'
    }}>
        <div  className='col-span-12 lg:col-span-8 mb-20 scroll lg:px-0 sm:px-20'>
            {data.images.map((item)=>(
                <div key={item} className='flex justify-center lg:justify-end items-center'>
                    <img 
                    src={item}
                    alt='portfolio photos'
                    height="auto"
                    width={800}
                    className='mt-20 rounded-lg'
                     />
                </div>
            ))}
        </div>
    </div>
    </>
    
  )
}
