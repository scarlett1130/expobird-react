import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'



export default class ServicesTitle extends Component{

    render(){
        return(
            <div className="container">
                <div className="row  mt-5 ">
                        <div className="col-12 text-center my-5">
                            <h5 className="heading-page">{this.props.title}</h5>
                            <h3 className="stats-Text py-3">{this.props.SubHeading  } </h3>
                            
                            <h4 className="explore-services">{this.props.button}<FontAwesomeIcon icon={faArrowAltCircleRight}/></h4>
                        </div>
                </div>
            </div>
        );
    }
}