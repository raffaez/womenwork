import './App.css';
import 'react-toastify/dist/ReactToastify.css';

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

import { useAppSelector } from './common/hooks';
import AddCategory from './components/categories/addCategory/AddCategory';
import DeleteCategory from './components/categories/deleteCategory/DeleteCategory';
import ListCategory from './components/categories/listCategory/ListCategory';
import AddCourses from './components/courses/addCourses/AddCourses';
import DeleteCourses from './components/courses/deleteCourses/DeleteCourses';
import ListCourses from './components/courses/listCourses/ListCourses';
import Search from './components/courses/search/Search';
import ShowCourse from './components/courses/showCourse/ShowCourse';
import Footer from './components/static/footer/Footer';
import Navbar from './components/static/navbar/Navbar';
import About from './pages/about/About';
import { Cart } from './pages/Cart/Cart';
import Home from './pages/home/Home';
import { Login } from './pages/login/Login';
import NotFound from './pages/notFound/NotFound';
import Signup from './pages/signup/Signup';
import { resetToken, selectToken } from './store/tokenSlice';



function App() {
  const token = useAppSelector(selectToken);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      //check if token is valid
      const checkToken = async () => {
        const response = await fetch('https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan', {
          method: 'POST',
          headers: {
            'Authorization': token
          }
        });
        const data = await response.json();
        if (data.statusCode === 401) {
          toast.warn("Sessão expirada. Faça login novamente.");
          dispatch(resetToken());
        }}
      checkToken();
    }
  }, [token]);
  
  return (
    <Router>
      <Navbar />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
        theme="light"
      />
      
      <div style={{minHeight: 'calc(100vh - 100px)'}} > 
      <Routes>
        <Route path='/' element={<Navigate to='/home' replace />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/courses' element={<ListCourses />} />
        <Route path='courses/:id' element={<ShowCourse />} />
        <Route path='/courses/add' element={<AddCourses />} />
        <Route path='/courses/add/:id' element={<AddCourses />} />
        <Route path='/courses/delete' element={<DeleteCourses />} />
        <Route path='/courses/delete/:id' element={<DeleteCourses />} />
        <Route path='/categories' element={<ListCategory />} />
        <Route path='/categories/add' element={<AddCategory />} />
        <Route path='/categories/add/:id' element={<AddCategory />} />
        <Route path='/categories/delete' element={<DeleteCategory />} />
        <Route path='/categories/delete/:id' element={<DeleteCategory />} />
        <Route path='/search' element={<Search />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      </div>
      <Footer />
      {/* <Vlibras forceOnload={true} /> */}
    </Router>
  );
}

export default App;
