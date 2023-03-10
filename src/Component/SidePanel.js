import React from 'react'
import { AiFillAppstore, AiFillBook, AiFillDatabase, AiFillEdit, AiFillFolder, AiFillMail, AiFillMessage, AiFillProject, AiFillSchedule, AiOutlineClose, AiOutlineCodeSandbox, AiOutlineContacts, AiOutlineDown, AiOutlineShopping, AiOutlineUp, AiOutlineUserAdd } from 'react-icons/ai'

const SidePanel = ({menu, setMenu}) => {
 
  return (
    <div className={`sidePanel ${menu ? "menuComes" : ""}`}>
    
    <div className='name'>
        <h2>Ritansh.</h2>
        <AiOutlineClose onClick={()=> setMenu(!menu)}  />
    </div>

    <div className="dashboard">
       <div className='head'> 
        <span><AiFillAppstore /> <h4>Dashboards</h4></span>
        <AiOutlineUp className='up' />
       </div>
        
       <div className='dashChild'>
       <p>Ecommerce</p>
       <p>Saas</p>
       <p>Crypto</p>
       </div>
    </div>

    <div className="application">
        <h4>APPLICATIONS</h4>
        <div className='calender common'>
        <span className='nameSymbol'><AiFillSchedule /> <p>Calendar</p></span>
        </div>

        <div className='chat common'>
        <span className='nameSymbol'><AiFillMessage />  <p>Chat</p></span>
        <p className='hot'>Hot</p>
        </div>

        <div className='file common'>
        <span className='nameSymbol'><AiFillFolder /> <p>File Manager</p> </span>
        </div>

        <div className='ecommerce common'>
        <span className='nameSymbol'><AiFillProject /> <p>Ecommerce</p> </span>
        <span className='down'><AiOutlineDown /></span>
        </div>

        <div className='mail common'> 
        <span className='nameSymbol'><AiFillMail />  <p>Mail</p></span>
        <span className='down'><AiOutlineDown /></span>
        </div>

        <div className='invoice common'>
        <span className='nameSymbol'><AiFillBook />   <p>Invoice</p> </span>
        <span className='down'><AiOutlineDown /></span>
        </div>

        <div className='project common'>
        <span className='nameSymbol'><AiOutlineShopping /> <p>Projects</p> </span>
        <span className='down'><AiOutlineDown /></span>
        </div>

        <div className='contact common'>
        <span className='nameSymbol'><AiOutlineContacts />   <p>Contacts</p></span>
        <span className='down'><AiOutlineDown /></span>
        </div>

    </div>

    <div className="layout">
        <h4>PAGES</h4>
        <div className='authentication laycomm'>
          <span className='sybName inner'><AiOutlineUserAdd /><p>Authentication</p></span>
          <span className='no'>8</span>
        </div>
        <div className='utility laycomm'>
          <span className='sybName inner'><AiOutlineCodeSandbox /> <p>Utility</p></span>
          <span className='down'><AiOutlineDown /></span>
        </div>
    </div>

    <div className="components">
      <h4>Components</h4>

        <div className='component1 comp1'>
        <span className='SN first'><AiFillDatabase /> <p>UI Elements</p></span>
        <span className='down'><AiOutlineDown /></span>
        </div>

        <div className='component2 comp1'>
        <span  className='SN second'><AiFillEdit /> <p>Forms</p></span>
        <span className='down'><AiOutlineDown /></span>
        </div>
    </div>

    <div className='button'>
    <button className='login'>Login</button>
    <button className='signup'>SignUp</button>
    </div>

    </div>
  )
}

export default SidePanel ;