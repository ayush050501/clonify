import React from 'react'
import SeachIcon from '../../assets/icons/search.svg'

const SearchBar = ({placeholder}) => {
  return (
    <div className='w-4/5 h-[46px] px-4 bg-white rounded-md border border-gray-200 justify-start items-center gap-2 inline-flex'>
        <div className="grow shrink basis-0 h-[22px] justify-start items-center gap-2 flex">
            <img className="w-[13.88px] h-[13.88px]" src={SeachIcon} alt="" />
            <input className="w-full grow shrink basis-0 text-neutral-400 text-sm font-normal font-['Inter'] leading-snug" placeholder={placeholder} type="text" />
        </div>
    </div>
  )
}

export default SearchBar
