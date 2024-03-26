import React from 'react'
import SearchBar from '../searchbar/SearchBar'
import calendar from '../../assets/icons/calendar.svg'
import notification from '../../assets/icons/Notification.svg'
import apps from '../../assets/icons/layout-grid.svg'
import admin from '../../assets/icons/Admin.png'
import icon1 from '../../assets/icons/icon1.svg'

const Header = () => {
  return (
    <header className='w-full h-[66px] pl-8 pr-[31px] py-2.5 bg-white border-b border-gray-200 justify-between items-center gap-8 sm:inline-flex grid-flow-col z-[1]'>
      <div className='sm:hidden'>
        <img src={icon1} className='pl-[20px] pt-[18px]'/>
      </div>
      <div className='w-full'>
      <SearchBar placeholder={"Search..."}/></div>
      <div className='w-1/5 justify-between sm:flex hidden'>
        <img src={notification} />
        <img src={calendar} />
        <img src={apps} />
        <img src={admin} />
      </div>
    </header>
  )
}

export default Header
