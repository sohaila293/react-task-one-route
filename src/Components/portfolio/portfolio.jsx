import React from 'react'
import "./portfolio.css"
import imageone from "../../assets/images/poert1.png"
import imgtwo from "../../assets/images/port2.png"
import imgthree from "../../assets/images/port3.png"

export default function portfolio() {
  return (
    <>
    <section className='portfolio'>
      <div className='container'>
      <h1>portfolio component</h1>
      <div className='content'>
        <div className='item'>
         <div className='image'>
         <img src={imageone} alt="image"/>
         </div>
          <div className='layout'>
          <i class="fa-solid fa-plus"></i>
          </div>
        </div>
        <div className='item'>
         <div className='image'>
         <img src={imgtwo} alt="image"/>
         </div>
          <div className='layout'>
          <i class="fa-solid fa-plus"></i>
          </div>
        </div>
        <div className='item'>
         <div className='image'>
         <img src={imgthree} alt="image"/>
         </div>
          <div className='layout'>
          <i class="fa-solid fa-plus"></i>
          </div>
        </div>
        <div className='item'>
         <div className='image'>
         <img src={imageone} alt="image"/>
         </div>
          <div className='layout'>
          <i class="fa-solid fa-plus"></i>
          </div>
        </div>
        <div className='item'>
         <div className='image'>
         <img src={imgtwo} alt="image"/>
         </div>
          <div className='layout'>
          <i class="fa-solid fa-plus"></i>
          </div>
        </div>
        <div className='item'>
         <div className='image'>
         <img src={imgthree} alt="image"/>
         </div>
          <div className='layout'>
          <i class="fa-solid fa-plus"></i>
          </div>
        </div>
      </div>
      </div>
    </section>
    </>
  )
}
