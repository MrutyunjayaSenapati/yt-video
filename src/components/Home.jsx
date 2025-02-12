import React from 'react'
import Sidebar from './Sidebar'
import Video from './Video'
import { useAuth } from './context/AuthProvider'

export default function Home() {
  const {data}=useAuth();
  console.log(data);
  return (
    <div className="flex ">
       <Sidebar/>
      <div className=' flex-1 h-[calc(100vh-6.625rem)] overflow-y-scroll overflow-x-hidden'>
          <div className=' grid grid-cols-1 md:grid-cols-3 gap-2 p-5 '>
        {
        data.map((item)=>{
          return <Video key={item.id} video={item}/>
        })
        }
       </div>
      </div>
    </div>
  )
}
