import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom";
// import Fade from 'react-reveal/Fade';
import ReadMoreReact from 'read-more-react';

export default class Services extends Component{
    render(){
        return(
                    <div className="row justify-content-center">
                        <div className="col-md-1"></div>
                        {/* <Fade> */}
                        <div className="col-md-5 mb-5 bg-white ml-4 ml-sm-4 ml-md-0  mr-4">
                            <div className="text-center text-md-left d-md-flex">
                                <div className="services-video">
                                    <img src={this.props.image1} alt={this.props.alt1}/>
                                </div>
                                <div className="services-text ml-1">
                                <Link to={this.props.link1}> <h2 className="services-heading">{this.props.title1}</h2></Link> 
                                    <p className=" pt-3   p-style mw">
                                    <ReadMoreReact text={this.props.desc1}readMoreText="Read More"   /> 
                                    </p>
                                    <div>
                                        <Link to={this.props.link1}>
                                            <button className="services" >
                                            Explore &nbsp;<FontAwesomeIcon icon={faCaretRight}/>
                                            </button>
                                        </Link> 
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* </Fade> */}
                        {/* <Fade> */}
                        <div className="col-md-5 mb-5 bg-white ml-4 ml-sm-4 ml-md-0  mr-4">
                            <div className="text-center text-md-left d-md-flex">
                                <div className="services-video">
                                <img src={this.props.image2} width={50} alt={this.props.alt2}/>

                                </div>
                                <div className="services-text ml-3">
                                <Link to={this.props.link2}><h2 className="services-heading">{this.props.title2}</h2></Link>
                                    <p className=" pt-3 p-style  mw">
                                    <ReadMoreReact text={this.props.desc2} readMoreText="Read More"   /> 
                                    </p>
                                    <div>
                                        <Link to={this.props.link2}>
                                            <button className="services">
                                            Explore &nbsp;<FontAwesomeIcon icon={faCaretRight}/>
                                            </button>
                                        </Link> 
                                    </div>
                                </div>
                            </div>                     
                        </div>
                        {/* </Fade> */}
                        <div className="col-md-1"></div>
                    </div>
        );
        
    }
    
}