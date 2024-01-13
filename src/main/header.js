import React from 'react'
import '../asset/header_2.css'

function Header() {
  return (
<div className='header'>
  <div className='header_main_contant'>

<div className='_logo'>
  <div className='logo'> <img className="group-child" alt="" src="Group 2.png"/></div>
  </div>
  <div className='toggle_buttom'>
    <img src='/Burger menu.png'/>
  </div>

  <div className='mainheaer_upper'>
  <div className='header_upper'>
      <div className='header_text'><img className="call_icon" alt="" src="/Group 773.png" />+445667845645</div>
      <div className='header_text'><img className="address_icon" alt="" src="/Group 774.png" />+445667845645</div>
      <div className='header_text'><img className="clock_icon" alt="" src="/Group 775.png" />+445667845645</div>
  </div>
  <div className='left_site'>
    
     <div style={{margin:'0px 16px'}}> <img className="address_icon" alt="" src="/Union.png" /></div>
     <div style={{margin:'0px 16px'}}>  <img className="clock_icon" alt="" src="/Vector.png" /></div>
     <div style={{margin:'0px 16px'}}>  <img className="call_icon" alt="" src="/ri_linkedin-fill.png" /></div>
     <div style={{margin:'0px 16px'}}> <img className="address_icon" alt="" src="/ri_facebook-fill.png" /></div>
      
  </div>
  </div>
   </div>
   <div className='main_header_lower'>
    <hr className='hr'/>
    {/* <div className='style_hr'></div> */}
    <div className='main_lower'>
      <div className='content_style'>
    <div className='logo' style={{marginRight:"35px"}}> <img className="group-child" alt="" src="Group 2.png"/></div>
    <div className='lower_titles'>
      <div className='style_hr'></div>
      <p>Home</p>
    </div>
    <div className='lower_title_style'>About Us</div>
    <div className='lower_title_style'>Services</div>
    <div className='lower_title_style'>Icars Choices</div>
    <div className='lower_title_style'>Gallery</div>
    <div className='lower_title_style'>Contact Us</div>
    
    </div>
    </div>

  </div>
  <div className='middle_part_underline'>
 <div className='left_style_text'>
  <ul>
      <li style={{fontFamily:'Montserrat',fontSize:"20",color:"#fff"}}>P</li>
      <li style={{fontFamily:'Montserrat',fontSize:"20",color:"#fff"}}>R</li>
      <li style={{fontFamily:'Montserrat',fontSize:"20",color:"#fff"}}>E</li>
      <li style={{fontFamily:'Montserrat',fontSize:"20",color:"#fff"}}>V</li>
    </ul>
  </div>
  <div className='middle_title_portion_part'>
    <div className='text_title'>
      <div style={{padding:'0px 111px'}}>
<h2 className='Dummy'>THIS IS THE DUMMY CONTENT</h2>
</div>
<h1 className='Your'>YOUR TRAVELCOMPANION</h1>

    </div>

  </div>
  <ul className='left_style_text'>
      <li style={{fontFamily:'Montserrat',fontSize:"20",color:"#F8D849"}}>N</li>
      <li style={{fontFamily:'Montserrat',fontSize:"20",color:"#F8D849"}}>E</li>
      <li style={{fontFamily:'Montserrat',fontSize:"20",color:"#F8D849"}}>X</li>
      <li style={{fontFamily:'Montserrat',fontSize:"20",color:"#F8D849"}}>T</li>
    </ul>
  </div>  
  <div className='buttom'>
  <button className='text_buttom'>Find Services</button>
  </div>
  <div className='footer'>
    <img src='Group 783.png' alt='scroll'/>
  </div>

</div>
  )
}

export default Header