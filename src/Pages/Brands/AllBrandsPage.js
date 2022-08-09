import React from 'react'
import { BrandCardsContainer } from '../../Components/Brands/BrandCardsContainer'
import { Container } from 'react-bootstrap';
import { Pagination } from '../../utilities/Pagination';

export const AllBrandsPage = () => {
  return (
    <div style={{ minHeight: "670px" }}>


      <Container>
        <BrandCardsContainer />
        <Pagination />
      </Container>
    </div>
  )
}
