import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import EventsParent from './components/eventsParent';
import ClubParent from './components/clubParent';
import ClubSlider from './components/clubSlider';
import Contact from './components/contact';

class App extends Component {
  render(){
    return (
     <div   >
      <div className='j2'>         <EventsParent/></div>
    <div className='j2'>
            <ClubSlider /> 
            
 
      <div className="jumbotron row"
      style={{backgroundColor:"#f4f0c0"}}>
      <div className='col-md-2'></div>
       <Contact className="col-md-8"/>  </div>
       <div className='col-md-2'></div>
     
     </div>
     </div> 
    
     
    );
  }
}
export default App;