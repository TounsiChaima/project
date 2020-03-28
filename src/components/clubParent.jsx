import React, { Component } from 'react';
import {getClubs} from "../datafolder/clubData";
import './styling.css';
class ClubParent extends Component {
    state = { 
        clubs:getClubs()
     }

    
    render() { 
        const{clubs}=this.state;
        return ( 


           
     <div className="container-fluid d-flex justify-content-center jumbotron">
        <div className='row'>
                    
               
               

               { clubs.map(club=>(

    
            <div id="idc"className="col-md-3  col-sm-12 mt-2  mr-0 " >
                <div className="card text-center shadow">
                    <div className="overflow">
                     <img src={club.image} alt="img1" className="card-img-top"/>

                    </div>
                <div className="card-body text-dark">
                     <h4 className='card-title' > {club.title}</h4>
                     <p className="card-text text-secondary">
    
                     </p>
                    <a href="#" className="btn btn-outline-success" > Learn More</a>


                </div>

                

                  </div>
             </div>

             
            
            
         ))}
    </div>
  </div>
        )}

               }

 
export default ClubParent;
