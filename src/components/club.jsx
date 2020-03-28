import img2 from '../assets/b.jpg';
import img1 from '../assets/c.jpg';
import img3 from '../assets/insat.png';
import {getClubs} from "../datafolder/clubData";
import './styling.css';

import React,{Component} from "react";
import "./styling.css";
import RBCarousel from "react-bootstrap-carousel";
import { Row, Col, Button, ButtonGroup } from "./bootstrap-component.jsx";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

const styles = { height: 400, width: "100%" };
const icon_glass = <span className="fa fa-glass" />;
const icon_music = <span className="fa fa-music" />;

class Club extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        clubs:getClubs(),
      autoplay: true
    };
  }
  onSelect = (active, direction) => {
    console.log(`active=${active} && direction=${direction}`);
  };
  visiableOnSelect = active => {
    console.log(`visiable onSelect active=${active}`);
  };
  slideNext = () => {
    this.slider.slideNext();
  };
  slidePrev = () => {
    this.slider.slidePrev();
  };
  goToSlide = () => {
    this.slider.goToSlide(1);
  };
  autoplay = () => {
    this.setState({ autoplay: !this.state.autoplay });
  };
  _changeIcon = () => {
    let { leftIcon, rightIcon } = this.state;
    leftIcon = leftIcon ? undefined : icon_glass;
    rightIcon = rightIcon ? undefined : icon_music;
    this.setState({ leftIcon, rightIcon });
  };
  render() {
    const{clubs}=this.state;
    const l=clubs.length;
    let i=0;
    

    return (
        <React.Fragment>    
            <div className="row">         
               <div className="jumbotron col-md-2" id="contour"
             style={{float:"right"}}
             ></div>
         
          <div  className="  root container-fluid col-md-8"  >
      <RBCarousel 
            
            className="carousel-fade roott  container-fluid     "
            
              animation={true}
              autoplay={this.state.autoplay}
              slideshowSpeed={5000}
              defaultActiveIndex={0}
              leftIcon={this.state.leftIcon}
              rightIcon={this.state.rightIcon}
              onSelect={this._onSelect}
              ref={r => (this.slider = r)}
              version={4}
            >
          
                    
               
               

               { 
               clubs.map((club,i)=>(

<div className="container-fluid" 
>
  
<img className="d-block w-100 images img-fluid"
  src={club.image}
/>


<div className="carousel-caption " id="clubLink">
  <button className="btn btn-secondary">
    Go to {club.title}

  </button>
 
  </div>
  </div>
            

             
            
            
         ))}
 

              
        
 </RBCarousel>
 

              
       
              
 </div>
        <div className="jumbotron col-md-2" id="countour"
             style={{float:"right"}}
             ></div>
       </div>
 
             
  </React.Fragment>
)

  
 

    
}
}
export default Club;
