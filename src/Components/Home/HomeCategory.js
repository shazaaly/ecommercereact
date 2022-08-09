import React from 'react'
import { SubTitle } from './../../utilities/SubTitle';
import { Container, Row } from 'react-bootstrap';
import { CategoryCard } from '../Category/CategoryCard';
import clothe from '../../images/clothe.png'
import { ProductCardContainer } from './Products/ProductCardContainer';
import DiscountSection from './DiscountSection';
import { BrandCardsContainer } from '../Brands/BrandCardsContainer';

export const HomeCategory = () => {
  return (
    <Container>
      <SubTitle title="التصنيفات" btntitle="المزيد" pathText="/allcategories" />
      <Row className='my-2 d-flex justify-content-between'>
        <CategoryCard title=" أجهزة كهربائية" img={clothe} background="#F4DBA4" />
        <CategoryCard title=" أجهزة كهربائية" img={clothe} background="#F4DBA4" />
        <CategoryCard title=" أجهزة كهربائية" img={clothe} background="#F4DBA4" />
        <CategoryCard title=" أجهزة كهربائية" img={clothe} background="#F4DBA4" />
        <CategoryCard title=" أجهزة كهربائية" img={clothe} background="#F4DBA4" />
        <CategoryCard title=" أجهزة كهربائية" img={clothe} background="#F4DBA4" />
      </Row>

      <ProductCardContainer title="الأكثر مبيعا" btntitle="المزيد" />
      <DiscountSection />
      <ProductCardContainer title="الأعلى تقييما" btntitle="المزيد" />
      <BrandCardsContainer title="أشهر الماركات" btntitle="المزيد" />


    </Container>
  )
}
