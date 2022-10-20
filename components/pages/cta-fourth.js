import React, { Component } from 'react';
import Pentagon from '../../assets/pentagon.svg'
import {Link} from "react-router-dom";

export default class CtaFourth extends Component{
    render(){
        return(
            <div className="container"> 

                 <div className="row testi-margin justify-content-between ">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 order-12 order-lg-1">
                    <div className="text-center text-sm-center text-md-center text-lg-left">
                            <h2 className="heading-page">{this.props.heading} </h2>
                            <h3 className="mt-4 layout-heading">{this.props.subheading} </h3>
                            <p className="p-style">{this.props.paragraph}</p>
                            <Link to="/contact-us"><button className="services-cta mt-3">{this.props.button}</button></Link>
                        </div>

                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 mb-3 text-center order-1 order-lg-12">
                    <div className={this.props.className} >
                            <img className="slight-br mt-5" src={this.props.image} alt={this.props.alt1}/>
                    </div>
                        <div className="pentagon">
                            <img src={Pentagon} alt="pentagon-background"/>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}