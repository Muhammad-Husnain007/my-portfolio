import React from 'react'
import './style.contact.css'
import github from '../../assets/github.png'
import facebook from '../../assets/facebook.png'
import linekin from '../../assets/linkedin.png'
import gmail from '../../assets/email.png'
import pointing from '../../assets/pointing-up.png'

const Contactme = () => {
  return (
    <div className='contactDiv'>
    <div  className='contactMe'>
      <span>Contact Me</span>
      <p>DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL.</p>
      <p>+92-3368516534</p>
      <a href="mailto:hasnainilyas007@gmail.com"><p>hasnainilyas007@gmail.com</p></a>
      </div>
      <div className='social-media'>
       <a href="https://github.com/Muhammad-Husnain007" target="_blank"><img src={github} alt="" /> </a>
       <a href="mailto:hasnainilyas007@gmail.com" target="_blank"> <img src={gmail} alt="" /> </a>
       <a href="https://www.linkedin.com/in/muhammad-husnain-617b5a282/" target="_blank"> <img src={linekin} alt="" /> </a>
       <a href="https://www.facebook.com/hasnai.khan.948" target="_blank"> <img src={facebook} alt="" /> </a>
        </div>
        <div className='lastDiv'>
<span>Muhammad Husnain</span>
<p>© All right reserved by Muhammad Husnain 2023</p>
        </div>
        {/* <img className='pointing' src={pointing} alt="" /> */}
    </div>
  )
}

export default Contactme
