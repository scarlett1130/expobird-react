import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Fade from 'react-reveal/Fade'
import ReadMoreReact from 'read-more-react';

const makeMuted = (elt) => {
    if (elt) {
      elt.muted = true;
    }
  };
export default class CtaThree extends Component{
    render(){
        return(
            <div className="containers"> 
                 <div className="row my-5 mt-5 pt-5">
                     <Fade bottom>
                        <div className="col-12 text-center pb-5">
                                <h2 className="heading-page ">A Digital Marketing Company<br/> Ready To Serve You 24/7</h2>
                        </div>
                     </Fade>
                    
                        <div className="col-12 col-sm-12 col-md-1 col-lg-2"></div>
                        <div className="col-12 col-sm-12 col-md-4 col-lg-3">
                            <div className="text-center">
                                <video className="slight-br" alt={this.props.alt1}  ref={makeMuted}  autoPlay  >
                                    <source src={this.props.video1} type="video/mp4"/>
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                            <div className="text-center text-md-left p-4 AvailableCard mt-4">
                                <h3 className="BlogPage-Title-1">{this.props.heading1}</h3>
                                <p className="p-style py-3">{this.props.paragraph1}
                                {/* <ReadMoreReact  text={this.props.paragraph1}readMoreText="Read More"   /> */}
                                </p>
                                
                                    <a href="/contact-us"><button className="call-text px-4 py-2">Get Started Now</button></a>
                                
                            </div>
                        </div>

                        <div className="col-12 col-sm-12 col-md-1 col-lg-2"></div>

                        <div className="col-12 col-sm-12 col-md-4 col-lg-3 mt-5 mt-sm-5 mt-md-0 mt-lg-0">
                            <div className="text-center">
                                <video className="slight-br" alt={this.props.alt2}  ref={makeMuted}  autoPlay>
                                    <source src={this.props.video2} type="video/mp4"/>
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                            <div className="text-center text-md-left p-4 AvailableCard mt-4">
                                <h3 className="BlogPage-Title-1">{this.props.heading2}</h3>
                                {/* <h4 className="BlogPage-Title">{this.props.heading3}</h4>   */}
                                <p className="p-style py-3">{this.props.paragraph2}
                                    {/* <ReadMoreReact text={this.props.paragraph2}readMoreText="Read More"   /> */}
                                </p>
                                <a href= "tel:+92-330-2033334">
                                    <button className="call-text px-5 py-2 ">Call Now</button>
                                </a>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-1 col-lg-2">
                            
                        </div>
                    

                        
                </div>
            </div>

        )
    }
}