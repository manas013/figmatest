import React from 'react'
import '../asset/middle_part2.css'
function Middle_part2() {
  return (
    <div className='decribtion_bmw'>
        <h1 id='bmw_heading'>THIS IS THE DUMMY CONTENT</h1>
        <div className='bmw_main_content'>
            <div className='bmw_left'>
            <div className='bmw_about'>
            We take pride in the high level of chauffeur service provided by all of our chauffeurs and the care and respect that they take in servicing the needs of our customers.
            </div>
            <div style={{marginTop:"56px"}}>
                <img className='bmw_engine' src='./rectangle-8145@2x.png' style={{width: "349px",height: "616px"}} alt='engine'/>
            </div>
            </div>
            <div className='bmw_right'>
                <div className='bmw-stir'>
                    <img className='bmw_insite' src='rectangle-8146@2x.png' style={{ width:"668px%",height: "391px"}} alt='handle'/>
                </div>
                <div className='bmw_about_handle'>
                We take pride in the high level of chauffeur service provided by all of our chauffeurs and the care and respect that they take in servicing the needs of our customers.
                </div>
                <div className='bmw_about_handle'>
                We take pride in the high level of chauffeur service provided by all of our chauffeurs and the care and respect that they take in servicing the needs of our customers.
                </div>
                <div className='bmw_about_handle'>
                We take pride in the high level of chauffeur service provided by all of our chauffeurs and the care and respect that they take in servicing the needs of our customers.
                </div>
                <div className='bmw_booking'>
                    <button className='bmw_book'>Book now</button>
                </div>

            </div>
        </div>
    
    
    </div>
  )
}

export default Middle_part2