import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import AdminSideBar from './../../Components/Admin/AdminSideBar';
import { Pagination } from './../../utilities/Pagination';
import AdminAddBrand from './../../Components/Admin/AdminAddBrand';

export const AdminAddBrandPage = () => {
  return (
    <Container>
      <Row className='py-3'>
        <Col sm="3" xs="2" md="2">
          <AdminSideBar />

        </Col>

        <Col sm="9" xs="10" md="10">
          <AdminAddBrand />

        </Col>


      </Row>

      <Pagination />




    </Container>
  )
}
