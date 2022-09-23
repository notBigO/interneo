import Image from 'next/image'
import React from 'react'

const IconCard = (props) => {
  return (
    <div className='rounded-lg bg-white drop-shadow-xl w-64 h-64 flex-col flex justify-center items-center'>
        <Image src={props.info.icon} width="90px" height="110px" />
        <div className='font-semibold pt-7 text-xl'>{props.info.name}</div>
    </div>
  )
}

export default IconCard