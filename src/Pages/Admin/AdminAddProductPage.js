import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import AdminSideBar from './../../Components/Admin/AdminSideBar';
import { Pagination } from './../../utilities/Pagination';
import AdminAddProduct from './../../Components/Admin/AdminAddProduct';

export const AdminAddProductPage = () => {
  return (
    <Container>
      <Row className='py-3'>
        <Col sm="3" xs="2" md="2">
          <AdminSideBar />

        </Col>

        <Col sm="9" xs="10" md="10">
          <AdminAddProduct />

        </Col>


      </Row>

      <Pagination />




    </Container>
  )
}
