import React from 'react'

const Cards = (props) => {
  console.log(props)
  return (
    <div>
      <div className="w-[262px] h-[162px] p-5 bg-white rounded-xl shadow flex-col justify-start items-start gap-2 inline-flex">
        <div className="self-stretch h-[122px] flex-col justify-start items-start gap-8 flex">
            <div className="self-stretch h-[66px] flex-col justify-start items-start flex">
                <div className="self-stretch text-gray-500 text-base font-normal font-['Inter'] leading-relaxed">{props.title}</div>
                <div className="self-stretch text-zinc-800 text-[26px] font-semibold font-['Inter'] leading-10">${props.number}</div>
             </div>
            <div className="self-stretch justify-start items-center gap-2 inline-flex">
                <div className={`px-2.5 py-0.5 bg-[${props.bg}] rounded-[100px] justify-center items-center gap-2.5 flex`}>
                    <div className="justify-start items-center gap-1 flex">
                        <div className="text-center text-white text-xs font-semibold font-['Inter'] leading-tight">{props.percent}</div>
                    </div>
                 </div>
                <div className="grow shrink basis-0 text-neutral-400 text-xs font-semibold font-['Inter'] leading-tight">{props.from}</div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Cards
