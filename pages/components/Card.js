import React from 'react'

export default function Card({id,title,price,image}) {
  return (
    <div className='w-[300px] h-[400px] my-4 mx-2 shadow-md fold:w-[250px] fold:h-[450px] '>
       <div className="w-full h-full border-2 flex flex-col justify-between ">
  <div className='flex justify-center mt-4'>     <img src={image} alt={id} className='w-[150px] h-[200px] ' /></div>

 <h1 className='ml-4 text-xl text-bgwhite/70'><span className='text-bgwhite '>Title :</span> {title}</h1>
      <p className='mb-4 ml-4 text-bgwhite/70'><span className='text-bgwhite '>Price :</span> {price} $</p>

       </div>
    </div>
  )
}