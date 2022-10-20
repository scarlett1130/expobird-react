import React, { Component } from 'react';
import ICR from '../assets/icr.svg'
import RST from '../assets/right-side-testimonial.svg'
import LST from '../assets/left-side-testimonial.svg'
import bluceCircle from '../assets/Circle-01.svg'
import oxford from '../assets/oxford.png'
import memonBuilders from '../assets/memon builders.jpg'
import insignia from '../assets/insignia.png'
import hotwav from '../assets/hotwav.png'
import Fade from 'react-reveal/Fade'

export default class Testimonials extends Component{

    render(){
        return(
            <div className="container">

          
            <div className="row testi-margin-row text-center " >
                <Fade bottom>
                    <div className="col-12 text-center">
                        <h3 className="heading-page chimney">Testimonials</h3>
                        <h2 className="stats-Text py-3">{this.props.text}
</h2>
                    </div>
                </Fade>
                <div className="row text-center justify-content-around mt-lg-5">
                    {/* <div className="col-12 col-sm-12 col-md-1 col-lg-1"></div> */}
                        <div className="col-12 col-sm-12 col-md-5 col-lg-5 testi-margin testi-margin-row2">
                            <div className="testi-card">
                            <img width="100" className="testimonial" src={oxford} alt="Client Logo"/>
                                <p className="p-style">
                                ExpoBird has helped Oxford to reach to the next level. With their continuous support, we aim to become number one brand in Pakistan.

                                {/* ExpoBird is a brand for Oxford because they take us to another level. Approximately our sales after contacting ExpoBird is now double. They perfectly serve us so we couldn't think of hiring another company.their in house capabilities do not let us think to change our group. Whether its design, content, etc., they are best in everything. */}
                                </p>
                                <div className="BlogPage-Title">
                                    <p>Yousuf Sattar
                                    <br/>
                                    Owner
                                    </p>

                                </div>
                                <div className="test-quotes">
                                    <img src={ICR} alt=""/>
                                </div>
                                <div className="rst">
                                    <img src={RST} alt=""/>
                                </div>
                                <div className="lst">
                                    <img src={LST} alt=""/>
                                </div>
                                    <div className="blueC">
                                        <img src={bluceCircle} alt=""/>
                                    </div>
                            </div>
                        </div>
                    
                    {/* <div className="col-12 col-sm-12 col-md-1 col-lg-1"></div> */}
                        <div className="col-12 col-sm-12 col-md-5 col-lg-5 card2">
                            <div className="testi-card">
                            <img width="150" className="testimonial" src={memonBuilders} alt="Client Logo"/>

                                <p className="p-style">
                                We have been associated with ExpoBird since many years. They have been taking great care of our brand on digital platforms. We recommend them to everyone around our circle.

                                {/* Our field is of builders; people do not recognize many of the builders. We require healthy cement for infrastructure but for identifying ExpoBird helped us. They make us stand in a tough competition of builders. Now we can reach out and target many interested people who are willing to purchase our house. */}
                                </p>
                                <div className="BlogPage-Title">
                                <p>Hanif Memon
                                    <br/>
                                    CEO Memon Group
                                </p>
                                </div>
                                <div className="test-quotes2">
                                    <img src={ICR} alt=""/>
                                </div>
                                <div className="rst2">
                                    <img src={RST} alt=""/>
                                </div>
                                <div className="lst2">
                                    <img src={LST} alt=""/>
                                </div>
                                <div className="blueC2">
                                        <img src={bluceCircle}  alt=""/>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-12 col-sm-12 col-md-1 col-lg-1"></div> */}
                        
                        {/* <div className="col-12 col-sm-12 col-md-1 col-lg-1"></div> */}
                        <div className="col-12 col-sm-12 col-md-5 col-lg-5 testi-margin text-center">
                            <div className="testi-card">
                            <img width="80" className="testimonial" src={insignia} alt="Client Logo"/>
                                <p className="p-style">
                                Expobird has been entertaining us for a long time; they have provided excellent quality with commitment. We acquired SEO services from ExpoBird, and the results surprised us. We have jumped to new levels, and working with ExpoBird has been an absolute delight.
                                </p>
                                <div className="BlogPage-Title">
                                    <p>Uzair Ahmed<br/>
                                    Director of Insignia Advisory    
                                    </p>
                                </div>
                                <div className="test-quotes">
                                    <img src={ICR} alt=""/>
                                </div>
                                <div className="rst">
                                    <img src={RST}  alt=""/>
                                </div>
                                <div className="lst">
                                    <img src={LST} alt=""/>
                                </div>
                                <div className="blueC">
                                        <img src={bluceCircle} alt=""/>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-12 col-sm-12 col-md-1 col-lg-1"></div> */}
                        <div className="col-12 col-sm-12 col-md-5 col-lg-5 card2">
                            <div className="testi-card">
                            <img width="120" className="testimonial" src={hotwav} alt="Client Logo"/>

                                <p className="p-style">
                                Bringing ExpoBird on board for our digital presence was one of our best decisions as they have helped us to transform our brand. For this reason, we have made them responsible for our another brand as well.
                                {/* With many leading brands on automobiles, we were thinking of changing the nature of the business, but after joining ExpoBird, our sales are now on the top. Now everyone knows the hotwave brand. Their elegant designs and catchy taglines insist users buy our cellphones.i would recommend to all contact ExpoBird to drive results and lead in the niche market. */}
                                </p>
                                <div className="BlogPage-Title">
                                    <p>
                                        Ibrahim Memon<br/>
                                        Director
                                    </p>
                                </div>
                                <div className="test-quotes2">
                                    <img src={ICR} alt=""/>
                                </div>
                                <div className="rst2">
                                    <img src={RST} alt=""/>
                                </div>
                                <div className="lst2">
                                    <img src={LST} alt=""/>
                                </div>
                                <div className="blueC2">
                                    <img src={bluceCircle} alt=""/>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-12 col-sm-12 col-md-1 col-lg-1"></div> */}
                    </div>
                </div>
                </div>
        );
    }
} 