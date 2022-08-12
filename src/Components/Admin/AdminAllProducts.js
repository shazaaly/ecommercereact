import React from 'react'
import { AdminAllProductsCard } from './AdminAllProductsCard';
import { Row, Col, Container } from 'react-bootstrap';

export const AdminAllProducts = () => {
  return (
    <div>
      <div className='admin-content-text'>إدارةجميع المنتجات</div>
      <Row className='justify-content-start'>
        <AdminAllProductsCard />
        <AdminAllProductsCard />
        <AdminAllProductsCard />
        <AdminAllProductsCard />
        <AdminAllProductsCard />
        <AdminAllProductsCard />
        <AdminAllProductsCard />


      </Row>



    </div>
  )
}
