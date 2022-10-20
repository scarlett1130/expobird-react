import React, { Component } from 'react';
import Pentagon from '../../assets/pentagon.svg';
import Fade from 'react-reveal/Fade';

const makeMuted = (elt) => {
    if (elt) {
      elt.muted = true;
    }
  };
export default class Stats extends Component{
    render(){
        return(
            <div className="container"> 
                <div className="row testi-margin text-center">
                    <Fade bottom>
                        <div className="col-12 text-center pb-5">
                                <h2 className="heading-page ">{this.props.heading}</h2>
                                <h3 className="stats-Text py-3">{this.props.subheading}</h3>
                        </div>
                    </Fade>
                </div>
                    <div className="row text-center">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-4 pb-5" >
                            <video className="slight-br stats-video" alt="Traffic Conversions" ref={makeMuted}  autoPlay>
                                <source src={this.props.video1} type="video/mp4"/>
                                Your browser does not support the video tag.
                            </video>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-4 pb-5">
                        <video className="slight-br stats-video" alt="Client Satisfaction" ref={makeMuted}  autoPlay>
                            <source src={this.props.video2} type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-4 pb-5">
                        <video className="slight-br stats-video" alt="Growth in online marketing"  ref={makeMuted}  autoPlay>
                            <source src={this.props.video3} type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video> 
                    </div>  
                </div>
            </div>
        )
    }
}