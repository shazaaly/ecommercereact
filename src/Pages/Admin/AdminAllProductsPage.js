import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import AdminSideBar from './../../Components/Admin/AdminSideBar';
import { AdminAllProducts } from './../../Components/Admin/AdminAllProducts';
import { Pagination } from './../../utilities/Pagination';

export const AdminAllProductsPage = () => {
  return (
    <Container>
      <Row className='py-3'>
        <Col sm="3" xs="2" md="2">
          <AdminSideBar />

        </Col>

        <Col sm="9" xs="10" md="10">
          <AdminAllProducts />

        </Col>


      </Row>

      <Pagination />




    </Container>
  )
}
