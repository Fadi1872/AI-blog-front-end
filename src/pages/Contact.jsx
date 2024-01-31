import React from 'react'
import AskedQuestions from '../components/AskedQuestions/AskedQuestions'
import ContactForm from '../components/ContactForm/ContactForm'

function Contact() {
  return (
    <div className='mt-5 pt-5'>
      <ContactForm />
      <AskedQuestions />
    </div>
  )
}

export default Contact