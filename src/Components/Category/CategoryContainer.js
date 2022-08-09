import React from 'react'
import { SubTitle } from './../../utilities/SubTitle';
import { CategoryCard } from './CategoryCard';
import { Container, Row } from 'react-bootstrap';
import mobile from "../../images/mobile.png";
import clothe from "../../images/clothe.png";
import { Pagination } from '../../utilities/Pagination';

export const CategoryContainer = () => {
  return (
    <Container>
      <div className='mt-3 admin-item-center'>كل التصنيفات</div>
      <Row className='my-3 d-flex justify-content-between'>
        <CategoryCard title=" هواتف محمولة" img={mobile} background="#F4DBA4" />
        <CategoryCard title=" ملابس " img={clothe} background="#F4DBA4" />
        <CategoryCard title=" أجهزة كهربائية" img={clothe} background="#F4DBA4" />
        <CategoryCard title="  أدوات مطبخ" img={mobile} background="#F4DBA4" />
        <CategoryCard title=" أجهزة لاب توب" img={clothe} background="#F4DBA4" />
        <CategoryCard title=" أجهزة كهربائية" img={mobile} background="#F4DBA4" />
        <CategoryCard title=" هواتف محمولة" img={mobile} background="#F4DBA4" />
        <CategoryCard title=" ملابس " img={clothe} background="#F4DBA4" />
        <CategoryCard title=" أجهزة كهربائية" img={clothe} background="#F4DBA4" />
        <CategoryCard title="  أدوات مطبخ" img={mobile} background="#F4DBA4" />
        <CategoryCard title=" أجهزة لاب توب" img={clothe} background="#F4DBA4" />
        <CategoryCard title=" أجهزة كهربائية" img={mobile} background="#F4DBA4" />
        <CategoryCard title=" هواتف محمولة" img={mobile} background="#F4DBA4" />
        <CategoryCard title=" ملابس " img={clothe} background="#F4DBA4" />
        <CategoryCard title=" أجهزة كهربائية" img={clothe} background="#F4DBA4" />
        <CategoryCard title="  أدوات مطبخ" img={mobile} background="#F4DBA4" />
        <CategoryCard title=" أجهزة لاب توب" img={clothe} background="#F4DBA4" />
        <CategoryCard title=" أجهزة كهربائية" img={mobile} background="#F4DBA4" />
      </Row>

      <Pagination />




    </Container>
  )
}
