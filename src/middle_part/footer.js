import React from 'react'
import '../asset/footer.css'

function Footer() {
  return (
    <div className='last_portion'>
        <div className='footer_main'>
            <div className='footer_div1' style={{margin:'0px 50px'}}>
                <img src='./Group 2.png' alt='logo'/>
                <ul>
                    <li id='last_portion_cars'>cars</li>
                    <li style={{marginTop:'16px'}} id='last_portion_details'> We take pride in the high level of </li>
                    <li style={{marginTop:'2px'}} id='last_portion_details'> chauffeur service.</li>
                </ul>
            </div>
            <div className='footer_div2' style={{margin:'0px 50px'}}>
                <div className='footer_div2_title'>Business Solutions</div>
                <ul style={{marginBottom:'21px'}}>
                    <li style={{marginTop:'8px'}} id='last_portion_details'>Corporate </li>
                    <li style={{marginTop:'8px'}} id='last_portion_details'>Travel Agencies </li>
                    <li style={{marginTop:'8px'}} id='last_portion_details'>Event Management</li>
                </ul>
                <div className='footer_div2_title'>Our Fleets</div>
                <div className='footer_div2_title'>Become a Supplier</div>
            </div>
            <div className='footer_div3' style={{margin:'0px 50px'}}>
                <div className='footer_div2_title'>Services</div>
                <ul>
                    <li style={{marginTop:'8px'}} id='last_portion_details'>Airport Transfers</li>
                    <li style={{marginTop:'8px'}} id='last_portion_details'>Road Shows</li>
                    <li style={{marginTop:'8px'}} id='last_portion_details'>Event Transfers</li>
                    <li style={{marginTop:'8px'}} id='last_portion_details'>Intercity Transfers</li>
                </ul>
                <div className='footer_div2_title'>FAQ</div>
                <div className='footer_div2_title'>Blogs</div>
            </div>
            <div className='footer_div4' style={{margin:'0px 50px'}}>
                <div className='footer_div2_title'>Top Cities</div>
                <ul>
                    <li style={{marginTop:'8px'}} id='last_portion_details'>London</li>
                    <li style={{marginTop:'8px'}} id='last_portion_details'>Rome</li>
                    <li style={{marginTop:'8px'}} id='last_portion_details'>Dubai</li>
                    <li style={{marginTop:'8px'}} id='last_portion_details'>Istanbul</li>
                    <li style={{marginTop:'8px'}} id='last_portion_details'>Singapore</li>
                </ul>
            </div>
            <div className='footer_div5' style={{margin:'0px 50px'}}>
                <div className='footer_div2_title'>LEGALS</div>
                <ul>
                    <li style={{marginTop:'8px'}} id='last_portion_details'>Terms & Conditions </li>
                    <li style={{marginTop:'8px'}} id='last_portion_details'>Privacy Policy </li>
                    <li style={{marginTop:'8px'}} id='last_portion_details'>GDPR Policy</li>
                </ul>
                <div className='footer_div3_title'>Contact Us</div>
                <div className='footer_div3_title'>Chat with Us</div>
            </div>
            <div className='hide_show_div'>
                <h2 id='hide_text'>CALL US ON</h2>
                <h1 id='hide_text_2'>9323877725</h1>

                <img src='a.elementor-button-link (1).png' alt='button' style={{cursor:'pointer', marginTop:"16px"}}/>

                <p className='hide_text'>Download Our APP</p>
                <img src='applestore.png.png' style={{cursor:'pointer', marginTop:"16px"}}/>
               <div> <img src='./a.png' style={{cursor:'pointer', marginTop:"16px"}}/></div>
               <div> <img src='a (1).png' style={{cursor:'pointer', marginTop:"16px"}}/></div>
              <div>  <img src='a (2).png' style={{cursor:'pointer', marginTop:"16px"}}/></div>
                <p style={{cursor:'pointer', marginTop:"16px",color:'#fff',fontSize:'10px'}}>COPYRIGHT © 2022 FABCARS _ ALL RIGHTS RESERVED</p>
            </div>

        </div>


    </div>
  )
}

export default Footer