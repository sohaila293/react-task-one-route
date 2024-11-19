import React from 'react'
import  "./Footer.css"
export default function Footer() {
  return (
   <>
   <section className='footer'>
    <div className='container'>
        <div className='item'>
            <h3>LOCATION</h3>
            <p>2215 John Daniel Drive</p>
            <span>Clark, MO 65243</span>
        </div>
        <div className='item'>
            <h3>AROUND THE WEB</h3>
            <div className='icons'>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-linkedin"></i>
            <i _ngcontent-kek-c21="" class="fa-solid fa-globe mx-1 icon"></i>
            </div>
        </div>
        <div className='item'>
            <h3>ABOUT FREELANCER</h3>
            <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
        </div>
    </div>
    <div className='copy'>
   <span> Copyright © Your Website 2021</span>
    </div>
   </section>
   </>
  )
}


