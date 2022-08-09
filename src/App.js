import { HomePage } from './Pages/Home/HomePage';
import NavBarLogin from './utilities/NavBarLogin'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage } from './Pages/Auth/LoginPage';
import Footer from './utilities/Footer';
import { RegisterPage } from './Pages/Auth/RegisterPage';
import { AllCategoryPage } from './Pages/Categories/AllCategoryPage';
import { AllBrandsPage } from './Pages/Brands/AllBrandsPage';
import { ShopProductsPage } from './Pages/Products/ShopProductsPage';
import { ProductsDetailsPage } from './Pages/Products/ProductsDetailsPage';

function App() {
  return (
    <div className="font">
      <NavBarLogin />

      <BrowserRouter>

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/allcategories' element={<AllCategoryPage />} />
          <Route path='/allbrands' element={<AllBrandsPage />} />
          <Route path='/products' element={<ShopProductsPage />} />
          <Route path='/products/:id' element={<ProductsDetailsPage />} />
        </Routes>
      </BrowserRouter>

      <Footer />


    </div>
  );
}

export default App;
