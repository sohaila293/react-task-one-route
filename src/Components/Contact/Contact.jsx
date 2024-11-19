import React from 'react'
import "./Contact.css"
export default function Contact() {
  return (
    <>
    <section className='contact'>
      <div className='container'>
        <h1>conatct section</h1>
        <input type='text' placeholder='User Name'/>
        <input type='number' placeholder='userAge'/>
        <input type='email' placeholder='userEmail'/>
        <input type="password"placeholder='userPassword'/>
        <input type="submit" value="send Message"/>
      </div>
    </section>
    </>
  )
}
