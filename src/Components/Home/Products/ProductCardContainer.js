import React from 'react'
import { ProductCard } from './ProductCard'
import { Container, Row } from 'react-bootstrap';
import { SubTitle } from './../../../utilities/SubTitle';

export const ProductCardContainer = ({ title, btntitle, pathText }) => {
  return (
    <Container>
      <SubTitle title={title} btntitle={btntitle} pathText={"/products"} />
      <Row className='my-2 d-flex justify-content-between'>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />

      </Row>


    </Container>
  )
}
