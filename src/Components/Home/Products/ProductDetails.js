import React from 'react'
import { Row, Col } from 'react-bootstrap';
import { ProductGallery } from './ProductGallery';
import { ProductTest } from './ProductTest';



export const ProductDetails = () => {
  return (
    <div>

      <Row className='py-3'>
        <Col lg="4" >
          <ProductGallery />
        </Col>

        <Col lg="8" >
          <ProductTest />





        </Col>


      </Row>
    </div>
  )
}
