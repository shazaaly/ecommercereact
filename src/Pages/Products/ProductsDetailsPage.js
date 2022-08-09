import React from 'react'
import CategoryHeader from './../../Components/Category/CategoryHeader';
import { Container } from 'react-bootstrap';
import { ProductDetails } from './../../Components/Home/Products/ProductDetails';
import { RateContainer } from '../../Components/Rate/RateContainer';
import { ProductCardContainer } from './../../Components/Home/Products/ProductCardContainer';

export const ProductsDetailsPage = () => {
  return (
    <div>


      <CategoryHeader />
      <Container>
        <ProductDetails />
        <RateContainer />

        <ProductCardContainer title="منتجات قد تعجبك" btntitle="" pathText="" />



      </Container>
    </div>
  )
}
