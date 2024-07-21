import React from 'react'
import {star} from '../assets/icons'

const PopularProductCard = ({imgURL,name,price}) => {
  return (
    
    <div className='flex flex-1 flex-col w-full max-sm:w-full'><img src={imgURL} alt={name} className='w-[280px] h-[280px]'>
    </img>
    <div className='mt-8 flex justify-start gap-2.5'>
        <img src={star} alt='rating' width={24} height={24}></img>
        <p className='font-mono text-xl text-slate-500'>4.5</p>
    </div>
    <h3 className='mt-4 text-wrap font-montserrat text-slate-700 text-2xl'>{name}</h3>
    <p className='mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal'>{price}</p>
    </div>
   
  ) 
}

export default PopularProductCard