import React from 'react'
import '../asset/middle_part_5.css'
function Testing() {
  return (
    <div className='testing'>
  <div className='middle_part_5' style={{padding:'50px', backgroundColor:'#F5F5F5'}}>
    <div style={{ display:'flex', justifyContent:'center'}}>
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
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
      </div>
      <div className="carousel-item">
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
      </div>
      <div class="carousel-item">
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
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  </div>
</div>
  </div>
  )
}

export default Testing