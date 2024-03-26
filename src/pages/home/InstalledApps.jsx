import React,{useState} from 'react'
import TableData from '../../assets/data/TableData'

const InstalledApps = () => {
  const [page, setpage] = useState(1);

  return (
    <div className='rounded-xl bg-white my-4'>
      <div className="w-full flex rounded-xl h-[62px] mt-[24px] px-6 py-6   border-b border-gray-200 items-center ">
        <p className="w-full text-zinc-800 text-lg font-semibold font-['Inter']">Installed apps</p>
      </div>
      <div className='w-full '>
        <div className='overflow-x-auto '>
        <table className='w-full '>
            <thead className='grid-cols-6'>
                <tr className="w-full h-[54px] px-6 py-4 bg-gray-50 gap-[148px]">
                    <th className="text-left px-3 text-gray-500 text-sm font-normal font-['Inter'] leading-snug">Source</th>
                    <th className="text-left px-3 text-gray-500 text-sm font-normal font-['Inter'] leading-snug">Amount</th>
                    <th className="text-left px-3 text-gray-500 text-sm font-normal font-['Inter'] leading-snug">Status</th>
                    <th className="text-left px-3 text-gray-500 text-sm font-normal font-['Inter'] leading-snug">USer ID</th>
                    <th className="text-left px-3 text-gray-500 text-sm font-normal font-['Inter'] leading-snug">Joined</th>
                    <th className="text-left px-3 text-gray-500 text-sm font-normal font-['Inter'] leading-snug">Group</th>
                </tr>
            </thead>
            <tbody className='grid-cols-6'>
                {TableData.map((element)=>{
                    return(<tr key={element.SourceName} className="w-full h-[76px] bg-white border-b border-gray-200">
                        <th className=' justify-start items-center gap-3 inline-flex'>
                            <div className="justify-start items-center inline-flex">
                               <div><img src={element.SoucrceImg}/></div><div>{element.SourceName}</div> </div></th>
                        <th className=" text-gray-500 text-sm font-normal font-['Inter'] leading-snug text-start">{element.Amount}</th>
                        <th className={ `text-gray-500 text-sm font-normal font-['Inter'] leading-snug text-start`}><button className={`${(element.Status=="Active")?"bg-green-100":"bg-gray-100 "} rounded-lg`}>

                          <p className={`${(element.Status=="Active")?"text-yellow-700":"text-gray-500"}`}>{(element.Status)}</p>
                        </button>
                          </th>
                        <th className=" text-gray-500 text-sm font-normal font-['Inter'] leading-snug text-start">{element.USerID}</th>
                        <th className=" text-gray-500 text-sm font-normal font-['Inter'] leading-snug text-start">{element.Joined}</th>
                        <th className=" text-gray-500 text-sm font-normal font-['Inter'] leading-snug text-start">{element.Group}</th>
                    </tr>)
                })}

            </tbody>
        </table>
        <div className='w-full inline-flex justify-center items-center p-[10px]'> <div>&larr;&nbsp;{page}/15&nbsp;&rarr;</div></div>
      </div>
      </div>
    </div>
  )
}

export default InstalledApps
