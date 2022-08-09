import React from 'react'
import BrandCard from './BrandCard'
import { SubTitle } from './../../utilities/SubTitle';
import { Container, Row } from 'react-bootstrap';
import brand1 from "../../images/brand1.png";
import brand2 from "../../images/brand2.png";
import brand3 from "../../images/brand3.png";

export const BrandCardsContainer = ({ title, btntitle, pathText }) => {
  return (
    <Container>
      <SubTitle title={title} btntitle={btntitle} pathText="/allbrands" />
      <Row className='my-2 d-flex justify-content-between'>
        <BrandCard img={brand1} />
        <BrandCard img={brand2} />
        <BrandCard img={brand3} />
        <BrandCard img={brand1} />
        <BrandCard img={brand1} />
        <BrandCard img={brand1} />

      </Row>


    </Container>)
}
