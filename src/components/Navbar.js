import React from 'react'
import "./Navbar.css"
import drpdn from "./drpdn.png"
function Navbar() {
  return (
    <div>
       <div className='navbar'>
        <div className="navContainer">

        <div className="navleft">

        <div className="LOGO">
               <p className='navtext'>EDYODA </p> 
        </div>
       
        </div>
        <div className="lab1">Course <img className='drp' src={drpdn} alt="" /> </div>
        <div className="lab1">Programs <img className='drp' src={drpdn} alt="" /></div>

  <div className="navright">
    
  <i className="fas fa-search search-icon"></i>
 Login<button className='navbutton'> <p style={{color:"#FFFFFF",fontSize:"14px"}}>JOIN NOW</p></button>
</div>
        </div>

    </div>
    </div>
  )
}

export default Navbar