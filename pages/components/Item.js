import React from 'react'

export default function Item({
    title,
    price,
    category,
    description,
    image,
    id,
}) {
  return (
    <div className="my-4">
    <h1 className="text-[3rem] text-center sm:text-[2rem] font-bold text-bgwhite mb-4">{title}</h1>
    <div className="flex justify-center mb-4"><img src={image} alt={id} className="w-[350px] h-[500px]" /></div>
    <p className=" text-bgwhite/70 mx-4 my-4 text-[1.5rem]">
      <span className="font-bold text-bgwhite mr-2  ">Category :</span> {category}
    </p>
    <p className=" text-bgwhite/70 mx-4 my-4 text-[1.5rem]">
      <span className="font-bold text-bgwhite mr-2  ">Price :</span> {price} $
    </p>
    <p className=" text-bgwhite/70 mx-4 my-4 text-[1.5rem]">
      <span className="font-bold text-bgwhite mr-2 ">Description : </span> {description}
    </p>
  </div>
  )
}
