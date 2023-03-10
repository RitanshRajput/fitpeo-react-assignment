import React from 'react'
import { AiFillPieChart } from 'react-icons/ai'
import {BsBagCheckFill, BsPeopleFill} from 'react-icons/bs'

const top = () => {
  return (
    <div className='top'>
    
       <div className="first">
         <span className='icon'>
            <AiFillPieChart />
         </span>
          <span className='data'>
           <p>Revenue</p>
           <h4>$21,456</h4>
          </span>
          <span className='rate'> + 2.65%</span>
       </div>
       
       <div className="second">
       <span className='icon'>
          <BsBagCheckFill />
       </span>
          <span className='data'>
           <p>Orders</p>
           <h4>$5,643</h4>
          </span>
          <span className='rate'> - 0.82%</span>
       </div>

       <div className="third">
       <span className='icon'>
       <BsPeopleFill />
       </span>
          <span className='data'>
           <p>Customers</p>
           <h4>$45,254</h4>
          </span>
          <span className='rate'> - 1.04%</span>
       </div>
    </div>
  )
}

export default top
