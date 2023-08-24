import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import AllRoutes from './components/allRoutes';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
    <Navbar/>
    <AllRoutes/>
    <Footer/>
    </div>
  );
}

export default App;
