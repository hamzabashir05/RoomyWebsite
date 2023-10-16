import React from 'react'
import { Row, Col, Card, Container } from 'react-bootstrap'
import ContactForm from './ContactForm'

export default function ContactUs() {
    return (
        <Container className='px-0 position-relative  '>
            <Row>
                <Col md={6}>
                    <Card className='border-0 hide-on-small-screen'>
                        <Card.Body className=''>
                            <Card.Title className='contact'>  CONTACT US </Card.Title>
                            <Card.Text className='contactText'> Phone : 92-3-111-444-100 <br /> Email : reservation@roomy.pk </Card.Text>
                        </Card.Body>
                        
                    </Card>
                    <Card className='contactSmall show-on-small-screen'>
                            <Card.Body>
                        <Card.Title className='contactSmall'>  CONTACT US </Card.Title>
                        <Card.Text className='contactText'> Phone : 92-3-111-444-100 <br /> Email : reservation@roomy.pk </Card.Text>
                        </Card.Body>
                        </Card>
                    <Card className='contactCard border-0 hide-on-small-screen'>
                        <Card.Body>
                        </Card.Body>
                    </Card>
                    <Card className='contactCard2 border-0 hide-on-small-screen'>
                        <Card.Body>

                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <ContactForm />
                </Col>
                <Col md={2}>
                    <Card className='contactCard3  border-0 hide-on-small-screen'>
                        <Card.Body> </Card.Body>
                    </Card>
                    <Card className='contactCard border-0 hide-on-small-screen'>
                        <Card.Body> </Card.Body>
                    </Card>
                    <Card className='contactCard2 border-0 hide-on-small-screen'>
                        <Card.Body> </Card.Body>
                    </Card>
                </Col>
            </Row>


        </Container>

    )
}
