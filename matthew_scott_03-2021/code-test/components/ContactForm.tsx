import { useState } from 'react'
import { useForm } from 'react-hook-form'

import styles from '../styles/ContactForm.module.scss'

type Inputs = {
  contactEmail: string
  contactSubject: string
  contactMessage: string
}

const emailValidationRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|',\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

const ContactForm = () => {
  const { register, handleSubmit, errors } = useForm<Inputs>();

  const [hasSubmitted, setHasSubmitted] = useState(false)
  const [emailValue, setEmailValue] = useState('')
  const [subjectValue, setSubjectValue] = useState('')
  const [messageValue, setMessageValue] = useState('')


  const onSubmit = formData => {
    setHasSubmitted(true)
    setEmailValue(formData.contactEmail)
    setSubjectValue(formData.contactSubject)
    setMessageValue(formData.contactMessage)
  }

  const contactTitle = hasSubmitted ? 'Thank you for your submission!' : 'contact'

  return (
    <div className={styles.contactFormWrapper}>
      <h2 className={styles.contactFormTitle}>{contactTitle}</h2>
      {/* Default Form */}
      {!hasSubmitted && <form onSubmit={handleSubmit(onSubmit)} className={styles.contactForm} noValidate >
        <label htmlFor="contactEmail">Email
                {errors.contactEmail && errors.contactEmail.type === 'required' && <span>This field is required.</span>}
          {errors.contactEmail && errors.contactEmail.type === 'pattern' && <span>Must use a valid email.</span>}
        </label>
        <input
          type='email'
          name='contactEmail'
          ref={register({
            required: true,
            pattern: emailValidationRegex
          })} />
        <label htmlFor="contactSubject">Subject {errors.contactSubject && <span>This field is required.</span>}</label>
        <input
          type='text'
          name='contactSubject'
          ref={register({ required: true })} />
        <label htmlFor="contactMessage">Message {errors.contactMessage && <span>This field is required.</span>}</label>
        <textarea
          name='contactMessage'
          rows={10}
          ref={register({ required: true })} />
        <input type='submit' />
      </form>}
      {/* Submitted Values */}
      {hasSubmitted && <div className={styles.submittedValues}>
        <p>Email: {emailValue}</p>
        <p>Subject: {subjectValue}</p>
        <p>Messege: {messageValue}</p>
      </div>}
    </div>
  )
}

export default ContactForm