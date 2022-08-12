import React from 'react'
import { Row } from 'react-bootstrap';
import { Pagination } from './../../utilities/Pagination';
import { ProductCard } from './../Home/Products/ProductCard';
const UserFavoriteProduct = () => {
  return (
    <div>
      <div className="admin-content-text pb-4">قائمة المفضلة</div>
      <Row className='justify-content-start'>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />

      </Row>
      <Pagination />
    </div>
  )
}

export default UserFavoriteProduct
