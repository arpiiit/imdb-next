'use client'
import React, { useEffect } from 'react'


export default function error({error, reset}) {
    useEffect(()=>{
        console.log(error);
    },[error]);
  return (
    <div className='mt-10 text-center'>
      <h1>Some thing wen wrong. Please try again</h1>
      <button className='hover:text-gray-300' onClick={()=>{
        reset()
      }}>Please try again</button>
    </div>
  )
}
