import React from 'react'
import { AiOutlineDown, AiOutlineEllipsis } from 'react-icons/ai';

const Bottom = () => {
  return (
    <div className='bottom'>
       
       <div className='first'>
         <span>
            <h4>User Activity</h4>
            <span>
            <p>Weekly</p>
            <AiOutlineDown />
            </span>
         </span>

         <div className='thisMonth'>
            <span className='heading'>
                <p>This Month</p>
                <h3>16,543</h3>
            </span>

            <span className='balls'>
                <span className='blueBall'></span>
                <p>Current</p>
                <span className='redBall'></span>
                <p>Previous</p>
            </span>
         </div>

           <div className='number'>
            <p>100</p>
            <p>80</p>
            <p>60</p>
            <p>40</p>
            <p>20</p>
            <p> 0</p>
           </div>

           <div className="bar">
            <div className='barContainer weekOne'>
            <div className="blueBar"></div>
            <div className="redBar"></div>
            </div>
            <div className='barContainer weekTwo'>
            <div className="blueBar"></div>
            <div className="redBar"></div>
            </div>
            <div className='barContainer weekThree'>
            <div className="blueBar"></div>
            <div className="redBar"></div>
            </div>
            <div className='barContainer weekFour'>
            <div className="blueBar"></div>
            <div className="redBar"></div>
            </div>
           <div className='barContainer weekFive'> 
            <div className="blueBar"></div>
            <div className="redBar"></div>
            </div>
           </div>

           <div className="week">
           <span> <h4>1</h4> <p>w</p> </span>
           <span> <h4>2</h4> <p>w</p> </span>
           <span> <h4>3</h4> <p>w</p> </span>
           <span> <h4>4</h4> <p>w</p> </span>
           <span> <h4>5</h4> <p>w</p> </span>
           </div>
       </div>

       <div className='second'>
           <div className='heading'>
            <h3>Order Stats</h3>
            <AiOutlineEllipsis />
           </div>

           <div class="container">
                <div class="ui-widgets">
                </div>
            </div>

          <div className="colors">
             <div>
                <p>Completed</p>
                <span className='blueColor'></span>
             </div>
             <div>
                <p>Pending</p>
                <span className='whiteColor'></span>
             </div>
             <div>
                <p>Cancel</p>
                <span className='redColor'></span>
             </div>
          </div>
       </div>

       <div className='third'>
           <div className='heading'>
            <h3>Top Product</h3>
             <span>
              <p>Monthly</p>
              <AiOutlineDown />
             </span>
           </div>

           <div className='content'>

             <div className='mainDiv'>
               <div className='left'>
                <span className='rank'>#1</span>
               <div>
                <p className='itemName'>Polo blue T-shirt</p>
                <p className='price'>$25.4</p>
               </div>
               </div>
               <span className='sale'>3.82k</span>
             </div>

             <div className='mainDiv'>
               <div className="left">
               <span className='rank'>#2</span>
               <div>
                <p className='itemName'>Hoodie for men</p>
                <p className='price'>$24.5</p>
               </div>
               </div>
               <span className='sale'>3.14k</span>
             </div>

             <div className='mainDiv'>
               <div className="left">
               <span className='rank'>#3</span>
               <div>
                <p className='itemName'>Red color Cap</p>
                <p className='price'>$22.1</p>
               </div>
               </div>
               <span className='sale'>2.84k</span>
             </div>

             <div className='mainDiv'>
                <div className="left">
                <span className='rank'>#4</span>
               <div>
                <p className='itemName'>Pocket T-shirt</p>
                <p className='price'>$20.2</p>
               </div>
                </div>
               <span className='sale'>2.05k</span>
             </div>
           </div>
       </div>
    </div>
  )
}
export default Bottom ;
