import React from 'react'
import dynamic from 'next/dynamic'
import Banner from './Banner';
const Casestudies = dynamic(() => import('./Casestudies/page'));
const Video = dynamic(() => import('./Video/page'));
const InsdustrySolutions = dynamic(()=>import('./IndustrySolutions/page'));
export default function index() {
  return (
    <>
      <div>
        <Banner />
        <InsdustrySolutions/>
        <Video />
        <Casestudies />
      </div>
    </>

  )
}
