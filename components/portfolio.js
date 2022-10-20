import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlay} from '@fortawesome/free-solid-svg-icons'
import Pentagon from '../assets/pentagon.svg'
import greenCircle from '../assets/Green-01.svg'
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import ModalVideo from 'react-modal-video'
import 'react-modal-video/scss/modal-video.scss';


export default class Clients extends Component{


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
            <div className="container">
            <div className="row testi-margin">
                <Fade bottom>
                    <div className="col-12 text-center ">
                        <h3 className="heading-page">Our Work</h3>
                        <h4 className="stats-Text pt-3">Take a look at some of our top-of-line work for our clients they have loved</h4>
                        <p className="py-3 pTag">{this.props.subheading1}</p>
                    </div>
                </Fade>


                    <div className="align-self-center col-12 text-center">
                        


                    <ModalVideo 
                    channel='youtube' 
                    isOpen={this.state.isOpen} 
                    videoId='x8oU3hgqkRM' 
                    onClose={() => this.setState({isOpen: false})} />
                            <div className="play-btn">
                                <div className="play-btn-inside" onClick={this.openModal}>
                                    <FontAwesomeIcon icon={faPlay} className="play"/>
                                </div>
                            </div>
                        
                            <div className="">
                                <img  className='ChooseImg2 slight-br' src={this.props.image} alt=""/>
                            </div>
                        
                            <div className="circle">
                                <img src={greenCircle} alt=""/>
                            </div>
                            <div className="pentagon">
                                <img src={Pentagon} alt=""/>
                            </div>
                    </div>
                </div>
                </div>
        );
    }
}