import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import AdminSideBar from './../../Components/Admin/AdminSideBar';
import { Pagination } from './../../utilities/Pagination';
import AdminAllOrders from './../../Components/Admin/AdminAllOrders';

export const AdminAllOrdersPage = () => {
  return (
    <Container>
      <Row className='py-3'>
        <Col sm="3" xs="2" md="2">
          <AdminSideBar />

        </Col>

        <Col sm="9" xs="10" md="10">
          <AdminAllOrders />

        </Col>


      </Row>

      <Pagination />




    </Container>
  )
}
