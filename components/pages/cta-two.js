import React, { Component } from 'react';
import Pentagon from '../../assets/pentagon.svg'
import Pentagon3 from '../../assets/pentagon3.svg'
import { FaWhatsapp } from 'react-icons/fa';
import { FiPhoneCall } from "react-icons/fi";

const makeMuted = (elt) => {
    if (elt) {
      elt.muted = true;
    }
  };
export default class Ctatwo extends Component{
    render(){
        return(
            <div> 
                    <div className="row3 row-container" >
                    <div className="row2 center-align-columns card homepageBackground pb-3" >
                    <div className="pentagon">
                            <img src={Pentagon} alt=""/>
                        </div>
                        <div  className="col-xs-12 col-sm-12 col-md-4 col-lg-4 mt-3 text-center">
                            <video ref={makeMuted}  autoPlay>
                                    <source src={this.props.video1} type="video/mp4"/>
                                    Your browser does not support the video tag.
                            </video>
                            <p className="mt-3">{this.props.paragraph1}</p>
            
                        </div> 
                        
                        <div  className="col-xs-12 col-sm-12 col-md-4 col-lg-4 mt-3 text-center" >
                        <video ref={makeMuted}  autoPlay>
                                    <source src={this.props.video2} type="video/mp4"/>
                                    Your browser does not support the video tag.
                        </video>                            
                        <p className="mt-3">{this.props.paragraph2}</p> 
                        </div>

                        <div  className="col-xs-12 col-sm-12 col-md-4 col-lg-4 mt-3 text-center">
                        <video ref={makeMuted}  autoPlay>
                                    <source src={this.props.video3} type="video/mp4"/>
                                    Your browser does not support the video tag.
                        </video>
                            <p className="mt-3">{this.props.paragraph3}</p> 


                        </div>

                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 text-right mt-3 pb-3">
                                 <button  className="ctaWhatsappButton"><FaWhatsapp className="whButtonClr"/> Whatsapp Us</button> 
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 text-left mt-3 pb-3">
                                 <button  className="ctaWhatsappButton"><FiPhoneCall className="callButtonclr"/> Schedule a Call </button> 
                                 <div className="pentagon">
                            <img src={Pentagon3} alt=""/>
                        </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}