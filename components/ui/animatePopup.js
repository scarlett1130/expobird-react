import React, { Component } from 'react';
import greenCircle from '../assets/Green-01.svg'
import yellowsvg from '../assets/Yellow-01.svg'
// import $ from "jquery"
// import Pentagon from '../assets/pentagon.svg'
// import Pentagon3 from '../assets/pentagon3.svg'
// import { FaWhatsapp } from 'react-icons/fa';
// import { FiPhoneCall } from "react-icons/fi";


export default class Popup extends Component{

    // componentDidMount(){
       
    //     var element = document.getElementById('popup');
    //     var targetedDiv = element.offsetTop;
    //     console.log(targetedDiv + "px");
    //     var element1 = document.getElementById('myModal');
    //     var screenHeight = window.screen.height/100*20;
    //     console.log("screen height : " + window.screen.height + "screen height divided by 3 : " + screenHeight);
    //     var endTarget = targetedDiv + screenHeight;
                
    //     $(document).ready(function() {
    //         $(window).scroll(function() {
                
    //             if ($(document).scrollTop() > targetedDiv && $(document).scrollTop() < endTarget) {
                 
                    
    //                 $("#popup").addClass("et-highlighted");
    //                 $(".et-highlighted-overlay").css({
    //                     "visibility" : "visible",
    //                     "opacity" : "1",
    //                     "pointer-events" : "initial"
    //                 });
    //                 $("#popup").css("z-index", "4");
    //           }
    //           else {
    //             $("#popup").removeClass("et-highlighted");
    //             $(".et-highlighted-overlay").css({
    //                 "visibility" : "hidden",
    //                 "opacity" : "0",
    //                 "pointer-events" : "none"
    //             });
    //             $("#popup").css("z-index", "1");
            
    //           }
    //         });
    //       });
         
    // }
    



    render(){
        return(
            
            <div>
                <div className="row et-highlightable mt-5 py-5" id="popup">
                    <div className="col-12 col-lg-1"></div>
                    <div className="col-12 col-lg-10">
                        <div className="cta-popup my-5 text-center p-3 p-md-5">
                            <h4 className="text-white">{this.props.text1}</h4>
                            <h2 className="text-white">
                                {this.props.heading1}
                            </h2>
                            <button className="my-3 pop-btn"><a href="tel:+92-330-2033334"><b>{this.props.button1}</b></a></button>

                        </div>
                        <div className="bg-testi">
                            <img src={greenCircle} alt="Circle"/>
                        </div>
                        <div className="bg-testi2">
                            <img src={yellowsvg} alt="Circle" />
                        </div>
                    </div>
                    <div className="col-12 col-lg-1">
                    </div>

                   



<div> 
                    {/* <div className="row3 row-container" >
                    <div className="row2 center-align-columns card homepageBackground pb-3" >
                    <div className="pentagon">
                            <img src={Pentagon} alt=""/>
                        </div>
                        <div  className="col-xs-12 col-sm-12 col-md-4 col-lg-4 mt-3 text-center">
                            <video muted  autoPlay>
                                    <source src={this.props.video1} type="video/mp4"/>
                                    Your browser does not support the video tag.
                            </video>
                            <p className="mt-3">{this.props.paragraph1}</p>
            
                        </div> 
                        
                        <div  className="col-xs-12 col-sm-12 col-md-4 col-lg-4 mt-3 text-center" >
                        <video muted  autoPlay>
                                    <source src={this.props.video2} type="video/mp4"/>
                                    Your browser does not support the video tag.
                        </video>                            
                        <p className="mt-3">{this.props.paragraph2}</p> 
                        </div>

                        <div  className="col-xs-12 col-sm-12 col-md-4 col-lg-4 mt-3 text-center">
                        <video muted  autoPlay>
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
                </div> */}
            </div>
                </div>
                <span className="et-highlighted-overlay"></span>
            </div>
            
        );
    }
}