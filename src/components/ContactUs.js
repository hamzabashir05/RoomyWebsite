import React from 'react'
import { Row, Col, Card, Container } from 'react-bootstrap'
import ContactForm from './ContactForm'

export default function ContactUs() {
    return (
        <Container className='px-0 position-relative  '>
            <Row>
            <Card className='contactSmall show-on-small-screen'>
                            <Card.Body>
                        <Card.Title className='contactSmall'>CONTACT&nbsp;US</Card.Title>
                        <Card.Text className='contactText'> Phone : 92-3-111-444-100 <br /> Email : reservation@roomy.pk </Card.Text>
                        </Card.Body>
                        </Card>
                <Col md={6} className='hide-on-small-screen'>
                    <Card className='border-0'>
                        <Card.Body >
                            <Card.Title className='contact'>CONTACT&nbsp;US</Card.Title>
                            <Card.Text className='contactText'> Phone : 92-3-111-444-100 <br /> Email : reservation@roomy.pk </Card.Text>
                        </Card.Body>
                        
                    </Card>
                   
                    <Card className='contactCard border-0 hide-on-small-screen'>
                        <Card.Body>   </Card.Body>
                    </Card>
                    <Card className='contactCard2 border-0 hide-on-small-screen'>
                        <Card.Body> </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <ContactForm />
                </Col>
                <Col md={2} className='hide-on-small-screen'>
                    <Card className='contactCard3 border-0 '>
                        <Card.Body> </Card.Body>
                    </Card>
                    <Card className='contactCard border-0 '>
                        <Card.Body> </Card.Body>
                    </Card>
                    <Card className='contactCard2 border-0 '>
                        <Card.Body> </Card.Body>
                    </Card>
                </Col>
            </Row>


        </Container>

    )
}
