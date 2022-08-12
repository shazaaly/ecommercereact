import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import CartItem from './CartItem';
import CartCheckout from './CartCheckout';

export const CartPage = () => {
  return (

    <Container style={{ minHeight: "670px" }}>
      <Row>
        <div className='cart-title mt-4'>عربة التسوق     </div>

      </Row>

      <Row className='d-flex justify-content-center'>
        <Col md="9" xs="12">

          <CartItem />
          <CartItem />
          <CartItem />
        </Col>


        <Col md="3" xs="6">
          <CartCheckout />


        </Col>


      </Row>




    </Container>
  )
}
