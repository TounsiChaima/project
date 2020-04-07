import React from 'react';

// import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import AboutUs from './components/aboutus';
import PastEvents from './components/pastevents';
import Upcoming from './components/upcoming';
import Team from './components/team';


function App() {
  

  return (
    <div className="App">
      

      <div className='j2'>         
      <Navbar/></div>
   

   
<header className="masthead">
    <div className="container">
      <div className="intro-text">
        <div className="intro-lead-in">Welcome To Club Section</div>
        <div className="intro-heading text-uppercase">Be Part of our family</div>
        <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Tell Me More</a>
      </div>
    </div>
  </header>

  <div className='j2'>         
      <AboutUs/></div>

  
 
      <div className='j2'>         
      <Upcoming/></div>
  
    
      <div className='j2'>         
      <PastEvents/></div>

      

      <div className='j2'>         
      <Team/></div>
  

  

    </div>
  );
}

export default App;
