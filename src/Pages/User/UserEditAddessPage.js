import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import UserSidebar from './../../Components/User/UserSidebar';
import UserEditAddress from './../../Components/User/UserEditAddress';

export const UserEditAddessPage = () => {
  return (
    <Container >
      <Row className='py-3'>
        <Col sm="3" xs="2" md="2">
          <UserSidebar />
        </Col>

        <Col sm="9" xs="10" md="10">
          <UserEditAddress />
        </Col>
      </Row>
    </Container>
  )
}
