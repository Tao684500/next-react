import React, { useContext } from 'react'
import Header from './components/Header'
import Loading from './components/Loading'
import Link from 'next/link'
import Card from './components/Card'
import { ApiDataContext } from './context/DataApi'

export default function wonen() {
  const {wonen,loading} = useContext(ApiDataContext)

  return (
    <div className=' min-h-screen'>
      <Header name="wonen" image="/cat-4.jpg"/>

      <div>
      <div className=' flex flex-wrap items-center justify-center'>
        {!loading ? <Loading/> : wonen.length && wonen.map((data) => {
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
