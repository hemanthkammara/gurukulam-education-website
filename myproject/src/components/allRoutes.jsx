import { Container } from '@chakra-ui/react'
import { Routes, Route } from "react-router-dom"
import Home from '../pages/home';
import AboutUs from '../pages/about';
import Results from '../pages/Result';
import Course from '../pages/Course';
import Lecture from '../pages/Lectures';
import Blogs from '../pages/Blogs';
import Signin from '../Authcontext/signin';
import Login from '../Authcontext/login';
import JeeBook from '../pages/paidcourses/jee';
import JeeEnroll from '../pages/paidcourses/jeeenroll';
import PaymentForm from '../pages/paidcourses/payment';




function AllRoutes() {


  return (
    <Container maxW="container.xl">{/* add all the routes here */}
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<AboutUs />} />
    <Route path="/results" element={<Results/>} />
    <Route path="/courses" element={<Course/>} />
    <Route path="/lectures" element={<Lecture/>} />
    <Route path="/blogs" element={<Blogs/>} />
    <Route path="/signin" element={<Signin/>} />
    <Route path="/login" element={ <Login/> } />
    <Route path="/jee" element={ <JeeBook/> } />
    <Route path="/jeeEnroll" element={ <JeeEnroll/> } />
    <Route path="/payment" element={ <PaymentForm/> } />
  
    </Routes>
    
    </Container>
  );
}

export default AllRoutes;