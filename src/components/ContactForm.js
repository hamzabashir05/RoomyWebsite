import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Card } from 'react-bootstrap'

export default function ContactForm() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 550 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 550, min: 0 },
      items: 1
    }
  };

  return (
  
         <Form className='w-100  border-0' responsive={responsive}>
        <div className='cfHead'>WE'RE HERE TO HELP YOU</div>
        <Form.Group className='contactFormtxt'>
        <Form.Label>Name</Form.Label>
        <Form.Control className='cfInput' type="text"  />
        <div className='contact-form'> 
        <div className='contact-label'>
        <Form.Label >Email </Form.Label>
        <Form.Control className='cfInput' type="email"  />
        </div>
        <div className='contact-label'> 
        <Form.Label>Phone</Form.Label>
        <Form.Control className='cfInput' type="number" /> 
        </div>
        </div>
        <Form.Label>Subject </Form.Label>
        <Form.Control className='cfInput' type="text" />
        <Form.Label>Message </Form.Label>
        <Form.Control className='cfInput' type="text"/>
      </Form.Group>
      <Button  className='sendMsg' variant="primary" type="submit"> Submit </Button>
    </Form>
   


  )
}
