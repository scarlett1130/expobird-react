import React, { Component } from 'react';
import PopupForm from './pages/PopupForm'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCaretRight, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
// import {Link} from "react-router-dom";
import ReadMoreReact from 'read-more-react';




export default class Services extends Component{

    render(){
        return(
            <div className="row ">
                    <div className="col-md-1"></div>
                    <div className="col-md-5 mb-5 bg-white ml-4 ml-sm-4 ml-md-0  mr-4">
                        <div className="text-center text-md-left d-md-flex">
                            <div className="services-video">
                                <img alt={this.props.alt1} className="blueColor" src={this.props.image1} width="50"/>
                            </div>
                            <div className="services-text ml-3">
                                <h2 className="services-heading">{this.props.title1}</h2>
                                <p className="p-style pt-3 mw">
                                <ReadMoreReact text={this.props.desc1}readMoreText="Read More"   /> 
                                </p>
                                <div>
                                <PopupForm/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 mb-5 bg-white ml-4 ml-sm-4 ml-md-0  mr-4">
                        <div className="text-center text-md-left d-md-flex">
                            <div className="services-video">
                            <img alt={this.props.alt2}  src={this.props.image2} className="blueColor" width="50"/>

                            </div>
                            <div className="services-text ml-3">
                                <h3 className="services-heading">{this.props.title2}</h3>
                                <p className="mw p-style pt-3">
                                <ReadMoreReact text={this.props.desc2}readMoreText="Read More"   /> 
                                </p>
                                <div>
                                <PopupForm/>
                                </div>
                            </div>
                        </div>                     
                    </div>
                    <div className="col-md-1"></div>              
            </div>
        );
    }
}