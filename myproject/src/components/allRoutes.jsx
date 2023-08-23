import { Container } from '@chakra-ui/react'
import { Routes, Route } from "react-router-dom"
import Home from '../pages/home';
import AboutUs from '../pages/about';
import Results from '../pages/Result';
import Course from '../pages/Course';
import Lecture from '../pages/Lectures';
import Blogs from '../pages/Blogs';



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
  
    </Routes>
    
    </Container>
  );
}

export default AllRoutes;