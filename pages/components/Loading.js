import { Dna } from  'react-loader-spinner'
import React from 'react'

export default function Loading() {
  return (
    <div className='min-h=[50vh] flex justify-center items-center'>
      <Dna
  visible={true}
  height="150"
  width="150"
  ariaLabel="dna-loading"
  wrapperStyle={{}}
  wrapperClass="dna-wrapper"
/>
    </div>
  )
}
