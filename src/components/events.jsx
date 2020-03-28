import React, { Component } from 'react';

import './styling.css';
class Events extends Component {
    state = { 
        events:[]}
    render() { 
        return (
            <div className="col-md-3 col-sm-12  " >
            <div className="card h-200 text-center shadow">
                <div className="overflow">
                    <img src={this.props.imgsrc} alt="img1" className="card-img-top"/>

                </div>
                <div className="card-body text-dark">
                 <h4 className='card-title' > {this.props.title}</h4>
                    <p className="card-text text-secondary">
                    {this.props.dsc} 
                    </p>
                    <a href="#" className="btn btn-outline-success" > Learn More</a>
                
                </div>

            </div>
            </div>
        );
    }
}
 
export default Events;