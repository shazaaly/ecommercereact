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
import { CartPage } from './Pages/Cart/CartPage';
import ChoosePaymentMethod from './Pages/Checkout/ChoosePaymentMethod';
import { AdminAllProductsPage } from './Pages/Admin/AdminAllProductsPage';
import { AdminAllOrdersPage } from "./Pages/Admin/AdminAllOrdersPage"
import { AdminOrderDetailsPage } from './Pages/Admin/AdminOrderDetailsPage';
import { AdminAddBrandPage } from './Pages/Admin/AdminAddBrandPage';
import AdminAddCategoryPage from './Pages/Admin/AdminAddCategoryPage';
import { AdminAddSubCategoryPage } from './Pages/Admin/AdminAddSubCategoryPage';
import { AdminAddProductPage } from './Pages/Admin/AdminAddProductPage';
import { UserAllOrdersPage } from './Pages/User/UserAllOrdersPage';
import UserFavouriteProductsPage from './Pages/User/UserFavouriteProductsPage';
import UserAllAddressesPage from './Pages/User/UserAllAddressesPage';
import UserAddAddressPage from './Pages/User/UserAddAddressPage';
import { UserEditAddessPage } from './Pages/User/UserEditAddessPage';
import { UserProfilePage } from './Pages/User/UserProfilePage';

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
          <Route path='/cart' element={<CartPage />} />
          <Route path="/order/paymentmethod" element={<ChoosePaymentMethod />} />


          {/* Admin/ */}

          <Route path="/admin/allproducts" element={<AdminAllProductsPage />} />
          <Route path="/admin/allorders" element={<AdminAllOrdersPage />} />
          <Route path="/admin/orders/:id" element={<AdminOrderDetailsPage />} />
          <Route path="/admin/addbrand" element={<AdminAddBrandPage />} />
          <Route path="/admin/addcategory" element={<AdminAddCategoryPage />} />
          <Route path="admin/addsubcategory" element={<AdminAddSubCategoryPage />} />
          <Route path="/admin/addproduct" element={<AdminAddProductPage />} />



          {/* User/ */}
          <Route path="/user/allorders" element={<UserAllOrdersPage />} />
          <Route path="/user/favoriteproducts" element={<UserFavouriteProductsPage />} />
          <Route path="/user/addresses" element={<UserAllAddressesPage />} />
          <Route path="/user/add-address" element={<UserAddAddressPage />} />
          <Route path="/user/edit-address" element={<UserEditAddessPage />} />
          <Route path="/user/profile" element={<UserProfilePage />} />









        </Routes>
      </BrowserRouter>

      <Footer />


    </div>
  );
}

export default App;
