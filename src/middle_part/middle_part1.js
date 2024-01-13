import React from 'react'
import '../asset/middle_part1.css'
function Middle_part1() {
  return (
    <div className='section_first'>
      <h1>THIS IS THE DUMMY CONTENT</h1>
      <div className='cars_items'>
        <div className='cars_details'style={{marginRight:'46px',marginTop:'36px'}}>
          <div className='cars_image'>
            <img src='./mercedesbenzsclasscar-1@2x.png'  style={{width: "280px",height: "149.333px"}} alt='cars'/>
            </div>
            <p>Mercedes s class</p>
            <div>
            <img src='./Vector (1).png'/><span style={{color: '#A0A0A0',fontFamily:'Poppins',fontSize:'10px',marginLeft:'5px'}}>max 2</span>
            < img src='./Vector (2).png' style={{marginLeft:"16px"}}/><span style={{color: '#A0A0A0',fontFamily:'Poppins',fontSize:'10px',marginLeft:'5px'}}>max 3</span>
            </div>
            <div>
              <button className='cars_book_now'>click me</button>
            </div>

          

        </div>
        <div className='cars_details'style={{marginRight:'46px',marginTop:'36px'}}>
          <div className='cars_image'>
            <img src='./bmw7seriespngisolatedimage-1@2x.png'  style={{width: "280px",height: "149.333px"}} alt='cars'/>
            </div>
            <p>Mercedes s class</p>
            <div>
            <img src='./Vector (1).png'/><span style={{color: '#A0A0A0',fontFamily:'Poppins',fontSize:'10px',marginLeft:'5px'}}>max 2</span>
            < img src='./Vector (2).png' style={{marginLeft:"16px"}}/><span style={{color: '#A0A0A0',fontFamily:'Poppins',fontSize:'10px',marginLeft:'5px'}}>max 3</span>
            </div>
            <div>
              <button className='cars_book_now'>click me</button>
            </div>

          

        </div>
        <div className='cars_details_1'style={{marginTop:'26px'}}>
          <div className='cars_image'>
            <img src='./197-1@2x.png'  style={{width: "280px",height: "149.333px"}} alt='cars'/>
            </div>
            <p id='cars_heading'>Mercedes s class</p>
            <div>
            <img src='./Vector (1).png'/><span style={{color: '#A0A0A0',fontFamily:'Poppins',fontSize:'10px',marginLeft:'5px'}}>max 2</span>
            < img src='./Vector (2).png' style={{marginLeft:"16px"}}/><span style={{color: '#A0A0A0',fontFamily:'Poppins',fontSize:'10px',marginLeft:'5px'}}>max 3</span>
            </div>
            <div>
              <button className='cars_book_now'>click me</button>
            </div>

          

        </div>
        
      </div>
    </div>
  )
}

export default Middle_part1