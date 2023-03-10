import React from 'react' ;
import {AiOutlineMenu, AiOutlineSearch, AiOutlineSetting, AiOutlineUser} from 'react-icons/ai';
import { GrAppsRounded } from 'react-icons/gr';
import { IoNotificationsOutline} from 'react-icons/io5' ;

const Header = ({menu, setMenu}) => {
  return (
    <div id='header'>
      <span><AiOutlineMenu onClick={()=> setMenu(!menu)} /> <h2>Dashboard</h2></span>
       
       <div className='icons'>
        <AiOutlineSearch />     
        <GrAppsRounded />   
        <IoNotificationsOutline />   
        <AiOutlineSetting />
        <AiOutlineUser />
       </div>
    </div>
  ) ;
}

export default Header ;
