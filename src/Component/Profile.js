import React from "react";
import { AiOutlineEllipsis } from "react-icons/ai";
import girl from '../Assets/girl.jpg'
import mountain from '../Assets/mountain.jpg'

const Profile = () => {

    return (
        <div className="profile">

            <div className="background">
                <div className="color"></div>
                <img src={mountain} alt="mountain" />
                <AiOutlineEllipsis />
            </div>

           <div className="image-cover">
           </div>
           <div className="image">
                <img src={girl} alt="girl" />
            </div>

            <div className="name">
                <div className="mainName">
                    <h3>Jennifer Bennett</h3>
                    <p>Product Designer</p>
                </div>

                <div className="numbers">
                    <span>
                        <h4>1,269</h4>
                        <p>Products</p>
                    </span>
                    <span>
                        <h4>5.2K</h4>
                        <p>Followers</p>
                    </span>
                </div>
            </div>

            <div className="earning">
                <div className="namei"> 
                 <h3>Earning</h3>
                 <span>i</span>
                </div>

                <div class="container">
                <div class="ui-widgets">
                    <div class="ui-values">72%</div>
                </div>
                </div>

                <div className="money">
                  <div>
                  <h3>$26,256</h3>
                    <p>Earning this Month</p>
                  </div>

                    <span>
                        <span>+2.65%</span>
                        <p>From previous period</p>
                    </span>
                </div>               
            </div>

            <div className="recent">
                <h3>Recent Activity</h3>
                <div> 
                <span><p>12</p>  <p>Sep</p></span>
                <p>Responded to need "volunteer Activities"</p>
                </div>
                <div> 
                <span><p>11</p> <p>Sep</p></span>
                <p>Everyone realizes would be desirable..</p>
                </div>
            </div>

        </div>
    );
}

export default Profile;