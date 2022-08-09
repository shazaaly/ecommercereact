import React from 'react'
import CategoryHeader from '../../Components/Category/CategoryHeader'
import { SearchCountResults } from './../../utilities/SearchCountResults';
import { Container, Col, Row } from 'react-bootstrap';
import SideFilter from '../../utilities/SideFilter';
import { ProductCardContainer } from './../../Components/Home/Products/ProductCardContainer';

export const ShopProductsPage = () => {
  return (
    <div >
      <CategoryHeader />
      <Container>
        <SearchCountResults title={" 23 نتيجة بحث "} />

        <Row className='d-flex flex-row'>
          <Col sm="2" xs="2" md="1" className='d-flex'>
            <SideFilter />
          </Col>
          <Col sm="10" xs="10" md="11">
            <ProductCardContainer title="" btntitle="" pathText="" />

          </Col>


        </Row>



      </Container>
    </div>
  )
}
