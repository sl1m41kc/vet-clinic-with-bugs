import React from 'react'
import Image from 'next/image'

import menu from '/public/burger_menu.svg'

const BurgerMenu = () => {
  return (
    <>
    <Image className='cursor-pointer' src={menu} alt='Burger_menu'/>
    </>
  )
}

export default BurgerMenu