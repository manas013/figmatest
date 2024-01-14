import React from 'react'
import Middle_part1 from './middle_part1'
import Middle_part2 from './middle_part2'
import Middle_part3 from './middle_part3'
import Middle_part_4 from './middle_part_4'
import Middle_part_5 from './middle_part_5'
import Footer from './footer'

function Middle() {
  return (
    <div className='section_middle'>
    <Middle_part1/>
    <Middle_part2/>
    <Middle_part3/>
    <Middle_part_4/>
    <Middle_part3/>
    <Middle_part_5/>
    <Footer/>
    </div>
  )
}

export default Middle