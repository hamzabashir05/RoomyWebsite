import React from 'react'
import { Row, Col,Card } from 'react-bootstrap'
import flogo from '../assets/roomy_logo_desktop.png'
import b1 from '../assets/hblpay.png'
import b2 from '../assets/mastercard_desktop.png'
import b3 from '../assets/visa_desktop.png'

export default function Footer() {
  return (
    <Card  className='footerStyle d-flex'> 

<Row>
<Col md={1} xs={0}></Col>
<Col md={2} xs={3}>
<img src={flogo} className='w-100 h-100' alt='' />
</Col>
<Col md={2} xs={1}>

</Col>
<Col md={3} xs={2}>

</Col>
<Col md={1} xs={2}>
<img src={b2} className='w-50' alt='' />
</Col>
<Col md={1} xs={2}>
<img src={b3} className='w-100 ' alt='' />
</Col>
<Col md={1} xs={2}>
<img src={b1} className='w-100 ' alt='' />
</Col>
<Col md={1} xs={0}>

</Col>

</Row>


    </Card>
  )
}

