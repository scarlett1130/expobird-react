import React, { Component,lazy } from 'react';
// import Video from '../../assets/E-Commerce.mp4'
import {Link} from "react-router-dom";
import Fade from 'react-reveal/Fade';

const makeMuted = (elt) => {
    if (elt) {
      elt.muted = true;
    }
  };

export default class HomepageBanner extends Component{
    
    render(){
        return(
            <div > 
                <div className="row bnr ">
                    <div className="container">
                    <div className="row banner-margin-top">
                    
                    {/* <div className="col-12 col-sm-12 col-md-1 col-lg-1 mt-0 mt-sm-0 mt-md-5 mt-lg-5"></div> */}
                    <Fade>
                        <div className="heading-text col-12 col-sm-12 col-md-6 col-lg-6 px-4 px-sm-4 px-md-0 px-lg-0 text-center text-lg-left text-md-left order-12 order-md-1 order-lg-1 order-xl-1 order-sm-12 pt-0 pt-sm-0 pt-lg-0 mt-0 mt-sm-0 mt-md-5">
                            <h1 id="heading-main" className="text-capitalize">{this.props.title1}</h1>
                            {/* <h3 className="BannerP py-2">Who We Are</h3> */}
                            <p id="sub-text" >{this.props.desc1}</p>
                            <Link to="/contact-us">
                                <button className="rf mt-3">
                                Get Started
                            </button>
                            </Link>
                        </div>
                    </Fade>
                    <div className="col-12 col-sm-12 col-md-5 col-lg-5 order-1 order-md-12 order-lg-12 order-xl-12 order-sm-1 text-center pt-0 pt-sm-0 mt-5 mt-sm-0 ">
                    
                    <video  width="400"  ref={makeMuted} loop autoPlay alt={this.props.alt1} className="main-video">
                        
                        <source src={this.props.Video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    </div>
                    {/* <div className="col-12 col-sm-12 col-md-1 col-lg-1 mt-5 order-12"></div> */}
                </div>
                </div>
                </div>
            </div>
        )
    }
}