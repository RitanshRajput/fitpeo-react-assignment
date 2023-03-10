import React from 'react'
import { AiOutlineDown } from 'react-icons/ai';

const Middle = () => {
  return (
    <div className='middle'>
        
        <div className="overview">
            <h3>Overview</h3>
            <div>
                <h4>Sort By: </h4>
                <p> Yearly</p>
                <AiOutlineDown className="down" />
            </div>
        </div>

        <div className="left">
            <p>This Month</p>
             <h2>$24,568  <span className='green'>+ 2.65%</span></h2>
             <div className='orders'>
                <span className='spanOne'>
                    <p>Orders</p>
                    <h4>5,643</h4>
                </span>
                <span className='spanTwo'>
                    <p>Series</p>
                    <h4>16,273</h4>
                </span>
             </div>
             <div className='orders'>
                <span className='spanThree'>
                    <p>Orders Value</p>
                    <h4>12.03%</h4>
                </span>
                <span className='spanFour'>
                    <p>Customers</p>
                    <h4>21,456</h4>
                </span>
             </div>
             <div className='orders'>
                <span className='spanFive'>
                    <p>Income</p>
                    <h4>$35,652</h4>
                </span>
                <span className='spanSix'>
                    <p>Expenses</p>
                    <h4>$12,248</h4>
                </span>
             </div>
        </div>

        <div className="right">
             <div className='price'>
               <p>40k</p>
               <p>30k</p>
               <p>20k</p>
               <p>10k</p>
               <p> 0k</p>
             </div>
              
             <div className='bar'>
               <span className='bar1'></span>
               <span className='bar2'></span>
               <span className='bar3'></span>
               <span className='bar4'></span>
               <span className='bar5'></span>
               <span className='bar6'></span>
               <span className='bar7'></span>
               <span className='bar8'></span>
               <span className='bar9'></span>
             </div>
               
             <div className='month'>
                <p>Feb</p>
                <p>Mar</p>
                <p>Apr</p>
                <p>May</p>
                <p>Jun</p>
                <p>Jul</p>
                <p>Aug</p>
                <p>Sep</p>
                <p>Oct</p>
             </div>
        </div>
    </div>
  )
}

export default Middle ;
