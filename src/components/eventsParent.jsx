import React, { Component } from 'react';
import img1 from '../assets/cstc.png';
import img2 from '../assets/back.png';
import img3 from "../assets/cap.png";
import ReactBootstrapCarousel from "react-bootstrap-carousel";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import "./styling.css";
import {getCategories} from "../categoriesData";
import {getEvents} from "../eventData";

//color #f4f0c0

import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    CardFooter,
    Badge,
    Button
  } from "shards-react";
import CategoriesList from '../common/categoriesList'
import Login from './login';
import Navbar from './navbar';
import SearchPage from './searchpage';
import Slides from './slides';
import ClubParent from './clubParent';
class EventsParent
 extends Component {
    state = { 
        events:[],
        categories:[],
       // filtered:'',
        selectedCategorie:''
    
     }

     componentDidMount(){
        this.setState({events: getEvents(), categories: getCategories()});

    }
 
    handleCategorieSelect=categorie=>{
        //const{selectedCategorie,events,filtered}=this.state;
    
        this.setState({selectedCategorie: categorie});
       /* filtered= selectedCategorie
        ? events.filter(m=>m.categorie._id=== selectedCategorie._id)
        : events;
        */
        
        
    }
   
    render() { 
        const{selectedCategorie,events}=this.state;
        
        const filtered= selectedCategorie
        ? events.filter(m=>m.categorie._id=== selectedCategorie._id)
        : events;
        const l=filtered.length;
        const nb=l/5;
        let i=0;

        return ( 
        <React.Fragment>

       <div className="root"style={{ position: 'relative'}}>
      

         <Navbar className="ab"  style={{position: 'absolute'}}/>
  
     
           
           
<Slides className="root sliderr" style={{ position: 'relative',minHeight: '100vh', height: '100vh' }} />
       </div>
       <div style={{backgroundColor:"#f5f5dc"}}> 
       <div className="row ">
           <div className="col-md-6" style={{paddingLeft:'4%'}} backgroundImage={img2}>
               <h1 style={{textAlign:"center", paddingTop:"20%", paddingRight:'4%'}}>
                   INSAT BRIGHT is here for you !
               </h1>
               <h2  style={{textAlign:"center"}}>
                   You missed some interesting events because there's just too much to remember? <br/>
                   INSAT BRIGHT is here for you ! <br/> Being aware of all the upcoming events has never been easier ! 

               </h2>

           </div>
           <div className="col-md-6">
               <img style={{ height:'80%',width:'100%', float:'right'}}
                src= {img3}/>
           </div>
       </div>
       
       
       
       </div>
       <div className="jumbotron " id="the" style={{backgroundColor:'#f4f0c0 !important', marginBottom:'0%'}} >
                       <div className ="jumbotron"id="eventsection"
                       style={{backgroundColor: `white !important`,
                       paddingTop:'0%',
                       width:"100%",
                       marginLeft:"0%"
                       }} >
                            

     <h1 id="withCarousel" style={{ height:'10%'}}>TOUS NOS CATEGORIES</h1>

     
    <div >
          <CategoriesList
          style={{height:'20%'}}
            items={this.state.categories} 
            onItemSelect={this.handleCategorieSelect}
            selectedItem={this.state.selectedCategorie}
           />
           </div>
           <div className='jumbotron j2'>
          
            <div className="row"
                  >
            
            
                {l ===0
                ? 
                    <h1 style={{paddingLeft:'15%'}}> no events in this categorie</h1>
              


                :(filtered.map(event=>(

                <div id="idc"className="col-md-3 col-sm-12 mt-2  mr-0 " >
            <div className="card text-center shadow">
                <div className="overflow">
                    <img src={event.image} alt="img1" className="card-img-top"/>

                </div>
                <div className="card-body text-dark">
                 <h4 className='card-title' > {event.title}</h4>
                    <p className="card-text text-secondary">
                    
                    </p>
                    <a href="#" className="btn btn-outline-success" > Learn More</a>
                
                
                </div>

            </div>
           
           
        
               
                </div>)))}
               
               
                </div>
               
              </div>
            
         
         </div>
         </div>

            </React.Fragment>);
    }
}
 
export default EventsParent
;
