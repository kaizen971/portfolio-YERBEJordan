import logo from './logo.svg';
import './App.css';
import NavBar from './Component/navBar';
import Home from './Component/home';
import About from './Component/about';
import Services from './Component/Services';
import CommentScreen from './Component/commentScreen';
import PortfolioScreen from './Component/portfolioScreen';
import ContactUs from './Component/contactUs';

function App() {
   
  return (
    <div className="App">

        <NavBar />
      <Home/> 
      <About/>
      <Services/>
      <PortfolioScreen/>
        <ContactUs/>


                </div>

  );
}

export default App;
