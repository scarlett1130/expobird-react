import React, { Component } from 'react';
import banner from '../../assets/expobird-banner-image.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlay} from '@fortawesome/free-solid-svg-icons'
import ReactDOM from 'react-dom'
import ModalVideo from 'react-modal-video'
import {Link} from "react-router-dom";
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

const makeMuted = (elt) => {
    if (elt) {
      elt.muted = true;
    }
  };
export default class Banner extends Component{
    
    constructor () {
        super()
        this.state = {
          isOpen: false
        }
        this.openModal = this.openModal.bind(this)
      }
     
      openModal () {
        this.setState({isOpen: true})
      }
    
    
    render(){
        return(
            <div> 
                <div className="row bnr align-items-center ">
                    <div className="container">
                        <div className="row">
                            <Fade>
                                <div className="col-12 col-sm-12 col-md-12 col-lg-6 order-12 order-md-12 order-lg-1 order-xl-1 order-sm-12 text-center text-sm-center text-md-center text-lg-left  ">
                                    <div className="heading-text" >
                                        <h1 id="heading-main">{this.props.title1}</h1>
                                        <h2 className="py-3"id="sub-text">{this.props.desc1}</h2>
                                        <Link to="/contact-us">
                                        <button className="rf mt-1">
                                            Get Started
                                        </button>
                                        </Link>
                                    </div>
                                </div>
                            </Fade>
                    
                                <div className="col-12 col-sm-12 col-md-12 col-lg-6 mb-5 mb-lg-0 order-1 order-md-1 order-lg-12 order-xl-12 order-sm-1 text-center">
                                    {/* <ModalVideo 
                                    channel='youtube' 
                                    isOpen={this.state.isOpen} 
                                    videoId='x8oU3hgqkRM' 
                                    onClose={() => this.setState({isOpen: false})} /> 
                                    
                                    <div className="play-btn-video" onClick={this.openModal}> 
                                        <div className="play-btn-video-inside">
                                            <FontAwesomeIcon icon={faPlay} />
                                        </div>
                                    </div> */}
                                    <video  width="250"  ref={makeMuted} loop autoPlay alt={this.props.alt1} className="main-video">
                                        <source src={this.props.Video} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}