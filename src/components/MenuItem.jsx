import React from 'react'
import Link from 'next/link';
export default function MenuItem({title, address, Icon}) {
  return (
    <Link className='hover:text-gray-400' href={address}>
      <Icon className="text-3xl sm:hidden"/>
      <p className='uppercase hidden sm:inline text-sm '>{title}</p>
    </Link>
  )
}
