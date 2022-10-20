import React, { Component } from 'react';
import oxford from '../assets/oxford.png';
import fbr from '../assets/fbr.png';
import diamondHomes from '../assets/diamond homes.png';
import memonBuilders from '../assets/memon builders.png';
import customs from '../assets/customs.png';
import apimatic from '../assets/apimatic.png';
import clariant from '../assets/clariant.png';
import hotwav from '../assets/hotwav.png';
import superPower from '../assets/super power.png';
import ronin from '../assets/ronin.png';
import iba from '../assets/clients/for web.jpg';
import client from '../assets/clients/for mobile.jpg';

import mehran from '../assets/mehran.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlay} from '@fortawesome/free-solid-svg-icons';
import diviCover from '../assets/divi-video-cover.jpg';
import greenCircle from '../assets/Green-01.svg';
import Pentagon from '../assets/pentagon.svg';
import Fade from 'react-reveal/Fade';
import { faCaretRight, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom";

export default class Clients extends Component{

    render(){

        return(
            <div className="container testi-margin2 text-center" >
                <div className="row"></div>
                {/* <Fade bottom> */}
                    <div className="col-12 text-center">
                            <h4 className="heading-page">Our Clients</h4>
                            <h5 className="stats-Text py-3">Our Happy Clients are a cut above the rest</h5>
                            {/* <Link to={"/our-clients"}><h4 className="explore-services">Explore Hundred of  Clients<FontAwesomeIcon icon={faArrowAltCircleRight}/></h4></Link> */}

                    </div>
                   
                {/* </Fade> */}

                {/* <Fade bottom> */}
                    {/* <div className="col-4 col-sm-4 col-md-4 col-lg-2 col-xl-2 text-center mt-3">
                        <img className="clientImage" id="clients-img" src={oxford} alt=""/>
                    </div>
                    <div className="col-sm-4 col-md-4 col-lg-2 col-xl-2 col-4 text-center mt-3">
                        <img className="clientImage " className="clientImage" id="clients-img" src={fbr} alt=""/>
                    </div> 
                    <div className="col-sm-4 col-md-4 col-lg-2 col-xl-2 col-4 text-center mt-3">
                        <img className="clientImage" id="clients-img" src={diamondHomes} alt=""/>
                    </div> 
                
                    <div className="col-sm-4 col-md-4 col-lg-2 col-xl-2 col-4 text-center mt-3">
                        <img className="clientImage" id="clients-img" src={memonBuilders} alt=""/>
                    </div> 
                    <div className="col-sm-4 col-md-4 col-lg-2 col-xl-2 col-4 text-center mt-3">
                        <img className="clientImage" id="clients-img" src={customs} alt=""/>
                    </div>   
                    <div className="col-sm-4 col-md-4 col-lg-2 col-xl-2 col-4 text-center mt-3">
                        <img className="clientImage" id="clients-img" src={apimatic} alt=""/>
                    </div>  
                
                    <div className="col-sm-4 col-md-4 col-lg-2 col-xl-2 col-4  text-center mt-3">
                        <img className="clientImage" id="clients-img" src={clariant} alt=""/>
                    </div>
                    <div className="col-sm-4 col-md-4 col-lg-2 col-xl-2 col-4 text-center mt-3">
                        <img className="clientImage" id="clients-img" src={hotwav} alt=""/>
                    </div> 
                    <div className="col-sm-4 col-md-4 col-lg-2 col-xl-2 col-4 text-center mt-3">
                        <img className="clientImage" id="clients-img" src={superPower} alt=""/>
                    </div> 
               
                    <div className="col-sm-4 col-md-4 col-lg-2 col-xl-2 col-4  text-center mt-3">
                        <img className="clientImage" id="clients-img" src={ronin} alt=""/>
                    </div> 
                    <div className="col-sm-4 col-md-4 col-lg-2 col-xl-2 col-4   text-center mt-3">
                        <img className="clientImage" id="clients-img" src={iba} alt=""/>
                        </div>   
                        <div className="col-sm-4 col-md-4 col-lg-2 col-xl-2 col-4 text-center mt-3">
                        <img className="clientImage" id="clients-img" src={mehran} alt=""/>
                    </div> */}
                     
                    <div className="col-12 ">
                        <img className="clientImage clientImage2 clientcard" alt="ExpoBird Clients" id="" src={iba} />
                        <img className="clientImage clientImage1 clientcard" alt="ExpoBird Clients" id="" src={client} />

                    </div>  
                    <div className="col-12 mt-3" >
                            <Link to={"/our-clients"}><button className="services-cta  align-self-center mt-4">Explore Hundred of  Clients</button>
                            </Link>
                    </div>
                {/* </Fade> */}
            </div>

        );
    }
}