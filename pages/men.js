import React, { useContext } from 'react'
import { ApiDataContext } from './context/DataApi'
import Header from './components/Header'
import Loading from './components/Loading'
import Link from 'next/link'
import Card from './components/Card'

export default function men() {
  const {men,loading} = useContext(ApiDataContext)

  return (
    <div className=' min-h-screen'>
      <Header name="men" image="/cat-2.jpg"/>

      <div>
      <div className=' flex flex-wrap items-center justify-center'>
        {!loading ? <Loading/> : men.length && men.map((data) => {
            return (
                <Link href={`/Product/${data.id}`} key={data.id} className=' transition ease-in-out hover:scale-110'>
                    <Card {...data}/>
                </Link>
            )
        })} 
      </div>
    </div>
    </div>
  )
}
