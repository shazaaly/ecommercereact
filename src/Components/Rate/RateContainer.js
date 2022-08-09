import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import rate from '../../images/rate.png'
import { Pagination } from '../../utilities/Pagination'
import RateItem from './RateItem';
import { RatePost } from './RatePost';

export const RateContainer = () => {
  return (
    <Container className='rate-container'>
      <Row>
        <Col className="d-flex">
          <div className="sub-tile d-inline p-1 ">التقيمات</div>
          <img className="mt-2" src={rate} alt="star" height="16px" width="16px" />
          <div className="cat-rate  d-inline  p-1 pt-2">4.3</div>
          <div className="rate-count d-inline p-1 pt-2">(160 تقييم)</div>
        </Col>
      </Row>

      <RateItem />
      <RatePost />


      <Pagination />
    </Container>
  )
}

