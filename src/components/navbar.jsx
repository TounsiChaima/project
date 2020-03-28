import React,{Component} from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import SearchPage from './searchpage'; 
import INSAT from '../INSAT.svg';
import "./styling.css";
import { Button } from './bootstrap-component';
class Navbar extends Component {
  state = { 
      navBackground:''}


      componentDidMount() {
        document.addEventListener("scroll", () => {
          const backgroundcolor = window.scrollY < 100 ? "transparent" : "	#A0A0A0";
    
          this.setState({ navBackground: backgroundcolor });
        });
      }



  render() { 
    const {navBackground}=this.state;
    return (
      <nav className="navbar navbar-expand-lg  scrolling-navbar fixed-top" 
      style={{backgroundColor: navBackground, opacity:"0.7"}} >
      <a className="navbar-brand ml-5" href="#">
          <img src={INSAT} alt="INSAT" style={{ width: '35px' }} />
        </a>
        <button
          className="navbar-toggler here" 
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span>
            <i className="fas fa-bars" style={{ color: '#fff' }} />
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          
          <ul className="navbar-nav m-auto">
          
            <li className="nav-item active" >
            <BrowserRouter>
              <Link className="nav-link text-white text-uppercase ml-5" to="/">
                About us
                <i className="fas fa-members" />
                <span className="sr-only">(current)</span>
              </Link>
              </BrowserRouter>
            </li>
            <li className="nav-item">
            <BrowserRouter>
              <Link
                className="nav-link text-white text-uppercase ml-5"
                to="/contacts">
              
                Contact Us
              </Link>
              </BrowserRouter>
            </li>
           
            <li className="nav-item">
            <BrowserRouter>
              <Link
                className="nav-link text-white text-uppercase ml-5"
                to="/log in">
                Clubs
              </Link>
              </BrowserRouter>
            </li>
            <li className="nav-item">
            <BrowserRouter>
              <Link
                className="nav-link text-white text-uppercase ml-5"
                to="/log in">
                Events
              </Link>
              </BrowserRouter>
            </li>
             <li className="nav-item log">
            <BrowserRouter>
              <Button
                className="nav-link text-white text-uppercase "
                to="/log in"
                >
                Log in 
              </Button>
              </BrowserRouter>
            </li>
            <li className="nav-item log">
            <BrowserRouter>
              <Button
                className="nav-link text-white text-uppercase "
                to="/log in"
                >
                Sign up 
              </Button>
              </BrowserRouter>
            </li>
           
          </ul>
          
         
        </div>
      </nav>
    );
  }
}

export default Navbar;

