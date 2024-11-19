import React from 'react'
import "./Main.css"
import avatar from "../../assets/images/avataaars.svg"
export default function Main() {
  return (
    <>
    <section className='main'>
        <div className='container'>
            <div className='img'>
                <img src={avatar} alt='avater'/>
            </div>
            <div className='info'>
                <h1>start Framework</h1>
                <p>Graphic Artist - Web Designer - Illustrator</p>
            </div>
        </div>
    </section>
    </>
  )
}
