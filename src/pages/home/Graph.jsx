import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Graph = () => {
  const data = [
    {
      name: 'Sun',
      Instagram: 400,
      facebook: 240,
      amt: 240,
    },
    {
      name: 'Mon',
      Instagram: 300,
      facebook: 139,
      amt: 221,
    },
    {
      name: 'Tue',
      Instagram: 200,
      facebook: 980,
      amt: 229,
    },
    {
      name: 'Wed',
      Instagram: 278,
      facebook: 390,
      amt: 200,
    },
    {
      name: 'Thu',
      Instagram: 189,
      facebook: 480,
      amt: 218,
    },
    {
      name: 'Fri',
      Instagram: 239,
      facebook: 380,
      amt: 250,
    },
    {
      name: 'Sat',
      Instagram: 349,
      facebook: 430,
      amt: 210,
    },
  ];
  
  return (
    <div className='w-full h-full bg-white rounded-xl'>
      <div className="w-full h-[62px] px-6 py-4 bg-white border-b border-gray-200 rounded-xl">
        <p className="w-full text-zinc-800 text-lg font-semibold font-['Inter'] text-start leading-[30px]">Performance</p>
      </div>
      <div className=' mt-[32px] pb-[24px]'>
        <ResponsiveContainer width="100%"  height={300} >
        <AreaChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="Instagram" stroke="#ff0000"/>
          <Area type="monotone" dataKey="facebook" stroke="#00ff00" />
        </AreaChart>
        </ResponsiveContainer>
        </div>
      </div>
  )
}

export default Graph
