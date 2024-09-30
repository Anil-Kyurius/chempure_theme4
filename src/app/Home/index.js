
import React from 'react'
import dynamic from 'next/dynamic'
import Banner from './Banner';
const Casestudies = dynamic(() => import('./casestudies/page'));
const Video = dynamic(() => import('./video/page'));
const InsdustrySolutions = dynamic(()=>import('./industrysolutions/page'));
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
