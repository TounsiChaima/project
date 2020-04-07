import React from 'react';


class AboutUs extends React.Component {
    state = {  }
    render() { 
        return (



<section className="page-section" id="services">
<div className="container">
  <div className="row">
    <div className="col-lg-12 text-center">
      <h2 className="section-heading text-uppercase">About Us</h2>
      <h3 className="section-subheading text-muted">Founded since 2000, our club doesn't stop improving its theme and goals in order to enlarge its community.</h3>
    </div>
  </div>
  <div className="row text-center">
    <div className="col-md-4">
      <span className="fa-stack fa-4x">
        <i className="fa fa-circle fa-stack-2x text-primary"></i>
        <i className="fa fa-info fa-stack-1x fa-inverse"></i>
      </span>
      <h4 className="service-heading">Our Theme</h4>
      <p className="text-muted">We make all our activitie around the ... field, a field that's considering a treding nowadays .</p>
    </div>
    <div className="col-md-4">
      <span className="fa-stack fa-4x">
        <i className="fa fa-circle fa-stack-2x text-primary"></i>
        <i className="fa fa-laptop fa-stack-1x fa-inverse"></i>
      </span>
      <h4 className="service-heading">Our goals</h4>
      <p className="text-muted">We aim to raise awareness in the ... field and make it spread among students, as we believe it's a crucial field for students during their univeristy life as well as their career later on</p>
    </div>
    <div className="col-md-4">
      <span className="fa-stack fa-4x">
        <i className="fa fa-circle fa-stack-2x text-primary"></i>
        <i className="fa fa-group fa-stack-1x fa-inverse"></i>
      </span>
      <h4 className="service-heading">Our Community</h4>
      <p className="text-muted">Students, common public, teachers, this is what our community is made of. With more than .... member, we aim to make it ever larger because of the important impact we believe our activities would provide.</p>
    </div>
  </div>
</div>
</section>

        );
    }
}

export default AboutUs;