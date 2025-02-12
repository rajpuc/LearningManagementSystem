import React from 'react'
import { Outlet } from 'react-router-dom'

const Eduacator = () => {
  return (
    <div>
      <h1> Edu Educator page</h1>
      <div>
        {<Outlet/>}
      </div>
    </div>
  )
}

export default Eduacator
