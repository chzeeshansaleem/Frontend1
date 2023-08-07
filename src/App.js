import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Categories from "./Components/Categories/Categories";
import Jeans from "./Components/Jeans/Jeans";
import Jackets from "./Components/Jackets/Jackets";
import Footware from "./Components/Footware/Footware";
import Perfumes from "./Components/Perfumes/Perfumes";
import Cosmetics from "./Components/Cosmetics/Cosmetics";
import Shirts from "./Components/Shirts/Shirts";
import Home from "./Components/Home/Home";
import Dashboard from "./Components/Admin/Dashboard/Dashboard";
import Products from "./Components/Admin/Products/Products";
import Sidebar from "./Components/Admin/Sidebar/Sidebar";
import Customers from "./Components/Admin/Customers/Customers";
import AddProduct from "./Components/Admin/AddProduct/AddProduct";
import ShowProduct from "./Components/Admin/showProduct/ShowProduct";
import ShowSingleProduct from "./Components/Admin/showProduct/ShowSingleProduct";
import Update from "./Components/Admin/UpdateProduct/Update";
import Preview from "./Components/Admin/Preview/Preview";
import Cati from "./Components/Admin/Categories/Cati";
import AdminJeans from "./Components/Admin/Categories/AdminJeans";
import AdminCosmetics from "./Components/Admin/Categories/AdminCosmetics";
import AdminFootware from "./Components/Admin/Categories/AdminFootware";
import AdminPerfumes from "./Components/Admin/Categories/AdminPerfumes";
import AdminJackets from "./Components/Admin/Categories/AdminJackets";
import AdminShirts from "./Components/Admin/Categories/AdminShirts";
import Login from "./Components/Login/Login";
import Logout from "./Components/Logout/Logout";
import UserRergister from "./Components/UserRegister/UserRegister";
import Footer from "./Components/Footer/Footer";
import UserProducts from "./Components/UserProducts/UserProducts";
import Cartpage from "./Components/CartPage/Cartpage";
import NewArival from "./Components/New Arival/NewArival";
import Sale from "./Components/Sale/Sale";
import ProductList from "./Components/Pagination/ProductList";
import AboutUs from "./Components/AboutUs/AboutUs";
import ContactUs from "./Components/ContactUs/ContactUs";
import Wishlist from "./Components/WishList/Wishlist";
import Myorderuser from "./Components/MyOrderUser.js/Myorderuser";
import SingleProduct from "./Components/SingleProduct/SingleProduct";
import Error from "./Components/Error";
import Users from "./Components/Admin/AllUsers/Users";
import OrderUpdate from "./Components/Admin/OrderUpdate/OrderUpdate";
const App2 = () => {
  const [nav, setNav] = useState(false);
  let auth;
  useEffect(() => {
    auth = sessionStorage.getItem("token");
    if (auth) {
      setNav(true);
    } else {
      setNav(false);
    }
  }, []);
  return (
    <>
      {!nav ? null : <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/userproducts" element={<UserProducts />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/cosmetics" element={<Cosmetics />} />
        <Route path="/jackets" element={<Jackets />} />
        <Route path="/jeans" element={<Jeans />} />
        <Route path="/footwares" element={<Footware />} />
        <Route path="/perfumes" element={<Perfumes />} />
        <Route path="/shirts" element={<Shirts />} />
        <Route path="/newarival" element={<NewArival />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/previewuser/:id" element={<SingleProduct />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />

        <Route path="/cartpage" element={<Cartpage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<UserRergister />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/myorderuser" element={<Myorderuser />} />
        <Route path="*" element={<Error />} />
      </Routes>
      {!nav ? null : <Footer />}
    </>
  );
};
const App = () => {
  const admin = sessionStorage.getItem("Admintoken");

  return (
    <div>
      <Sidebar>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<UserRergister />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products" element={<ShowProduct />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/updateproduct/:id" element={<Update />} />
          <Route path="/addproducts" element={<AddProduct />} />
          <Route path="/singleproduct/:id" element={<ShowSingleProduct />} />
          <Route path="/preview/:id" element={<Preview />} />
          <Route path="/users" element={<Users />} />
          <Route path="/order/:id" element={<OrderUpdate />} />
          <Route path="/catigry/" element={<Cati />}>
            <Route path="adminjeans" element={<AdminJeans />} />
            <Route path="admincosmetics" element={<AdminCosmetics />} />
            <Route path="adminfootwares" element={<AdminFootware />} />
            <Route path="adminperfumes" element={<AdminPerfumes />} />
            <Route path="adminjackets" element={<AdminJackets />} />
            <Route path="adminshirts" element={<AdminShirts />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </Sidebar>
      <Footer />
    </div>
  );
};

export default App;
export { App2 };
