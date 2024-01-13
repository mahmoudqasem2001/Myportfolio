import React from 'react'
import './contact.css'
import { HiOutlineMail } from 'react-icons/hi'
import { BsMessenger } from 'react-icons/bs'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';
const Contact = () => {
  const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_14zd6ec', 'template_darnkgr', form.current, 'MfLdmNKWHiTT9LKyz')
      e.target.reset()
    };
  return (
    <section id='contact'>

      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className='contact_option'>
            <HiOutlineMail className='contact_option-icon' />
            <h4>Email</h4>
            <h5>mahmoudqasem543@gmail.com</h5>
            <a href="mailto:mahmoudqasem543@gmail.com" target='_blank'>Send a Message</a>

          </article>
          <article className='contact_option'>
            <BsWhatsapp className='contact_option-icon' />
            <h4>WhatsApp</h4>
            <h5>+970599344870</h5>
            <a href="https:/api.whatsapp.com/send?phone=+970599344870" target='_blank'>Send Message</a>

          </article>

        </div>
        {/*end contact options*/}
      </div>
    </section>
  )
}

export default Contact
