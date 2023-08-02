import React, { useContext } from 'react'
import Loading from '../components/Loading'
import { ApiDataContext } from '../context/DataApi'
import Card from '../components/Card'
import Link from 'next/link'

export default function index() {
    const {products,loading} = useContext(ApiDataContext)
  return (
    <div>
      <div className=' flex flex-wrap items-center justify-center'>
        {!loading ? <Loading/> : products.length && products.map((data) => {
            return (
                <Link href={`/Product/${data.id}`} key={data.id}>
                    <Card {...data}/>
                </Link>
            )
        })} 
      </div>
    </div>
  )
}
