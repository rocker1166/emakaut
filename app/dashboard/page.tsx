import React from 'react'
import { Dashboard } from '@/components/component/dashboard'
function page() {
  return (
    <div>
        <div className="  w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative ">
      {/* Radial gradient for the container to give a faded look */}
     
      <div className="epointer-events-none  dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <Dashboard />
    </div>
    </div>
  )
}

export default page