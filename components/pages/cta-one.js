import React, { Component } from 'react';
import Pentagon from '../../assets/pentagon.svg'
import {Link} from "react-router-dom";
import ReadMoreReact from 'read-more-react';

const makeMuted = (elt) => {
    if (elt) {
      elt.muted = true;
    }
  };
export default class CtaOne extends Component{
    render(){
        return(
            <div className="container"> 
                 <div className="row testi-margin">

                    <div className="col-lg-6 col-xl-6 col-md-12 col-sm-12 col-12 text-center">
                        <div >
                            <video className="slight-br ChooseImg2" alt={this.props.alt4}  ref={makeMuted} autoPlay>
                                <source src={this.props.video} type="video/mp4"/>
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-6 col-md-12 col-sm-12 col-12 mt-5 mt-sm-5 mt-md-5 mt-lg-0 mb-3 text-center text-lg-left">
                        <div className="margin-left5  ">
                            <h2 className="heading-page ">{this.props.heading} </h2>
                            <Link to={this.props.link2}>
                                <h3 className="mt-4 layout-heading stats-Text">{this.props.subheading} </h3>
                            </Link>
                            <p className="py-3 p-style">
                            <ReadMoreReact text={this.props.paragraph}readMoreText="Read More"/>
                                
                                </p>
                            <Link to={this.props.link}><button className="services-cta  align-self-center">{this.props.button}</button>
                        </Link>
                        </div>
                            <div className="pentagon">
                                <img src={Pentagon} alt=""/>
                            </div>
                    </div>

                </div>

            </div>
        )
    }
}