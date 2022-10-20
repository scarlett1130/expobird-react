import React, { Component } from 'react';
import HelmetWrapper from '../Helmet';
import Banner from '../pages/banner';
import Image5 from '../../assets/choose.png';
import Pentagon from '../../assets/pentagon.svg'
import services6 from '../../assets/social-media-expobird.gif'
import Ctafifth from '../pages/cta-five'
import {Helmet} from 'react-helmet';
import {Link} from "react-router-dom";

export default class AboutUs extends Component{
    componentDidMount() {
        window.scrollTo(0, 0)
      }
    render(){
        return(
            <div>            
                <Helmet>
                <title>Everything About the top Digital Marketing Company | ExpoBird</title>
            <meta name="description" content="ExpoBird is a Digital Marketing company based in Pakistan that provides all marketing and web solutions. We deal in Digital marketing, SEO, Web Development, Video Production, Corporate Video, Graphics Design."/>
            <link rel="canonical" href="https://www.expobird.com/about-us" />

                </Helmet>
                {/* <HelmetWrapper title={"Everything About the top Digital Marketing Company | ExpoBird"} description={" ExpoBird is a Digital Marketing company based in Pakistan that provides all marketing and web solutions. We deal in Digital marketing, SEO, Web Development, Video Production, Corporate Video, Graphics Design"}/> */}
                <Banner title1={'About Us'}desc1="A company that is ready to lead you to the top in Online Marketing"/>
                <div className="container">
                            <Link to="/">Home</Link>  &#xbb; <Link to="/about-us">About Us</Link>
                </div>
                {/* <div className="row contact_container">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-2 mt-5"></div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-8 text-center py-5 px-5">
                        <h4 className="text-uppercase contact-header1">About us</h4>
                        <h2 className="text-capitalize contact-header2">What is Expobird</h2>
                        <p className="header-description">A company that is ready to lead you to the top in Online Marketing</p>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-2 mt-5"></div>
                </div> */}
                {/* <div className="mt-3 row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 pl-4">
                    <div className='AboutPageLeft pr-5'>
                        <h2 className="pl-5 pt-5 pb-4 text-center text-lg-left about-heading">About ExpoBird</h2>
                        <p className="pl-5 text-left about-Text">
                            <span>
                                ExpoBird is the best digital marketing company that provides all 
                                online marketing services all over Pakistan with 100% client satisfaction.<br/>
                            </span>
                        </p>
                        <p className="pl-5 text-left about-Text">
                            <span>
                                We strongly believe that your customer's word of mouth will help you achieve your business goals.
                                Their opinion about your service will be the most authentic credential you can sell to others for financial gains.
                                It is precisely the make or breaks a moment. So ExpoBird always goes the extra mile when it comes to fulfilling client 
                                satisfaction all over Pakistan. Eventually, it is their money that you use to enjoy economies of scale.<br/>
                            </span>
                        </p>
                        <p className="pl-5 text-left about-Text">
                            <span>
                                With our hard work and continuous improvements, we have provided the best digital marketing service
                                in Karachi and across the nation. With new technology advancements and the latest developments, we
                                intend to make our customers' lives easier, ultimately helping them achieve their business goals.<br/>
                            </span>
                        </p>
                        <p className="pl-5 text-left about-Text">
                            <span>
                                Exceptional Digital Marketing Services that make us proud and make us best From Everyone In Pakistan.
                                For any service providing business, nothing could be more important than its client satisfaction and happiness.
                                You feel pride when your client refers you to one of his associates searching for services provided by you.
                                These are the moments that make you realize that you are spot on and hit in the right direction.<br/>
                            </span>
                        </p>
                        <p className="pl-5 text-left about-Text">
                            <span>
                                Likewise, with ExpoBird, there has been plenty of moments that we do not want to and can never forget.
                                Our self-determination and ability to respond to market changes have made us one of the pioneers of
                                Digital Marketing Service in Karachi and Pakistan. In a brief time, we have been able to capture
                                significant market share. That is only because we keep the stakes of our clients at top priority.<br/>
                            </span>
                        </p>
                        <p className="pl-5 pb-5 text-left about-Text">
                            <span>
                                Our reasonable pricing for all the services is the second best thing for our clients. They get premium
                                quality of work at an affordable price. For this reason, they cannot afford to lose us, nor can we. 
                                So this makes a perfect combination where consideration of one is dependent on the other.<br/>
                            </span>
                        </p>
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 pr-4">
                    <div className="AboutPageRight"></div>
                </div>
            </div>
            <div className="col-12 p-4 p-lg-5 p-md-5 p-sm-4 text-center">
            <div className="parallax">
                <h2 className="Founder-Header text-uppercase">Expobird</h2>
                <h3 className="Founder-Text text-capitalize"></h3>
                <p className="Founder-Description pt-4"></p>
            </div>
            </div> */}
            <div className="container">
                {/* <div className="row testi-margin justify-content-between ">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 mb-3 text-center">
                        <div className="cta-image-right" >
                            <img className="slight-br mt-5" src={Image5} alt=""/>
                        </div>
                        <div className="pentagon">
                            <img src={Pentagon} alt=""/>
                        </div>
                    </div>

                    <div  class="heading-page-2 col-xs-12 col-sm-12 col-md-12 col-lg-6 text-center text-lg-left mt-5 mt-lg-0">
                            <h2 className="heading-page">Why choose us?</h2> 
                            <p class="margin-bottom8 p-style ">
                            As a top agency of online marketing in Karachi and Pakistan, ExpoBird is well-defined with extraordinary services and has served more than 100+ clients. We think outside the box, so no design is reuse as we have pros for the design they think deep, so that is why we are the result-oriented agency.
                            </p>
                    </div>
                </div>
                <div className="row testi-margin justify-content-between ">
                    <div className="col-12 col-lg-8">
                        <div className="row">
                            <div className="col-12 my-5 text-center">
                                <h2 className="BlogPage-Header">
                                    What We Do
                                </h2>
                            </div>
                            <div className="col-12 col-md-6 text-left">
                                <div className="">
                                    <ul>
                                        <li>
                                            <div className="d-flex">
                                                <div className="services-video">
                                                    <img src={services6} width={70}/>
                                                </div>
                                                <p className="BlogPage-Title">
                                                    Didital Marketing
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex">
                                                <div className="services-video">
                                                    <img src={services6} width={70}/>
                                                </div>
                                                <p className="BlogPage-Title">
                                                    Didital Marketing
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex">
                                                <div className="services-video">
                                                    <img src={services6} width={70}/>
                                                </div>
                                                <p className="BlogPage-Title">
                                                    Didital Marketing
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 text-left">
                                <div className="">
                                <ul>
                                        <li>
                                            <div className="d-flex">
                                                <div className="services-video">
                                                    <img src={services6} width={70}/>
                                                </div>
                                                <p className="BlogPage-Title">
                                                    Didital Marketing
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex">
                                                <div className="services-video">
                                                    <img src={services6} width={70}/>
                                                </div>
                                                <p className="BlogPage-Title">
                                                    Didital Marketing
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex">
                                                <div className="services-video">
                                                    <img src={services6} width={70}/>
                                                </div>
                                                <p className="BlogPage-Title">
                                                    Didital Marketing
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-4 mb-3 text-center">
                        <div className="cta-image-right" >
                            <img className="slight-br mt-5" src={Image5} alt=""/>
                        </div>
                        <div className="pentagon">
                            <img src={Pentagon} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-12 text-center p-5">
                        
                        <h2 className="BlogPage-Title">PUNCH LINE</h2>
                        <h3 className="BlogPage-Text">TAG LINE</h3>
                    </div>
                </div> */}
                <div className="row my-5">
                    <div className="col-12 my-5 text-center">
                        <h2 className="BlogPage-Title">Our 4 Step Process</h2>
                        <h3 className="BlogPage-Text">Our tried-and-tested four-step process guarantees that your website ends up well-optimized, industry-specific, and glitch free.</h3>
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 mb-3  text-center">
                        <div className="cta-image-right" >
                            <img className="slight-br mt-5" src={Image5} alt=""/>
                        </div>
                        <div className="pentagon">
                            <img src={Pentagon} alt=""/>
                        </div>
                    </div>

                    <div  class="heading-page-2 col-xs-12 col-sm-12 col-md-12 col-lg-6 text-center text-lg-left mt-5 ">
                            <h2 className="BlogPage-Header my-4">Grow With ExpoBird</h2> 
                            <p className="margin-bottom8 p-style ">
                                ExpoBird is the best digital marketing company that provides all online marketing services in Pakistan with 100% client satisfaction.
                                We strongly believe that your customer's word of mouth will help you achieve your business goals. Their opinion about your service will be the most authentic credential you can sell to others for financial gains. It is precisely the make or break moment. So ExpoBird always goes the extra mile when it comes to fulfilling client satisfaction all over Pakistan. Eventually, it is their money that you use to enjoy economies of scale.
                            </p>
                    </div>
                </div>
                <div className="row mt-5">
                    <div  class="heading-page-2 col-xs-12 col-sm-12 col-md-12 col-lg-6 text-center text-lg-left mt-5 ">
                            <h2 className="BlogPage-Header my-4">Your Goals Are Our Aims</h2> 
                            <p class="margin-bottom8 p-style ">
                                With our hard work and continuous improvements, we have provided the best digital marketing service in Karachi and across the nation. In a short period of time, we have been able to capture significant market share in different industries. That is only because we keep the stakes of our clients at top priority. With new technology advancements and the latest developments, we intend to make our customers' lives easier, ultimately helping them achieve their business goals.
                            </p>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 mb-3  text-center">
                        <div className="cta-image-right" >
                            <img className="slight-br mt-5" src={Image5} alt=""/>
                        </div>
                        <div className="pentagon">
                            <img src={Pentagon} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 mb-3 mt-5 text-center">
                        <div className="cta-image-right" >
                            <img className="slight-br mt-5" src={Image5} alt=""/>
                        </div>
                        <div className="pentagon">
                            <img src={Pentagon} alt=""/>
                        </div>
                    </div>

                    <div  class="heading-page-2 col-xs-12 col-sm-12 col-md-12 col-lg-6 text-center text-lg-left mt-5 mt-lg-0">
                            <h2 className="BlogPage-Header my-4">A Pioneer in Digital Marketing</h2> 
                            <p class="margin-bottom8 p-style ">
                            We are very proud of what we have achieved as the pioneer of Digital Marketing over a number of years. For any service-providing business, you need to introduce new trends in the market that make you stand out from the competition. You feel pride when your client acknowledges your trends and is ready to follow in their businesses. These are the moments that make you realize that you are spot on and hitting in the right direction. 
                            </p>
                            <br />
                            <p className="margin-bottom5 p-style">
                            Likewise, with ExpoBird, there have been plenty of moments that we do not want to and can never forget. Our self-determination and ability to respond to market changes have made us one of the pioneers of Digital Marketing Service in Karachi and Pakistan. In a short period of time, we have been able to capture significant market share in different industries. That is only because we keep the stakes of our clients at top priority.
                            </p>
                    </div>
                </div>
                <div className="row my-5">
                    <div  class="heading-page-2 col-xs-12 col-sm-12 col-md-12 col-lg-6 text-center text-lg-left mt-5 ">
                            <h2 className="BlogPage-Header my-4">Business Solutions for All </h2> 
                            <p class="margin-bottom8 p-style ">
                                ExpoBird prides itself for providing business solutions to all at reasonable pricing which is the second best thing for our clients. They get premium quality of work at an affordable price. For this reason, they cannot afford to lose us, nor can we. So this makes a perfect combination where consideration of one is dependent on the other.
                            </p>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 mb-3  text-center">
                        <div className="cta-image-right" >
                            <img className="slight-br mt-5" src={Image5} alt=""/>
                        </div>
                        <div className="pentagon">
                            <img src={Pentagon} alt=""/>
                        </div>
                    </div>
                </div>
                {/* <div className="row my-5">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 mb-3 text-center">
                        <div className="cta-image-right" >
                            <img className="slight-br mt-5" src={Image5} alt=""/>
                        </div>
                        <div className="pentagon">
                            <img src={Pentagon} alt=""/>
                        </div>
                    </div>

                    <div  class="heading-page-2 col-xs-12 col-sm-12 col-md-12 col-lg-6 text-center text-lg-left mt-5 mt-lg-0">
                            <h2 className="heading-page">Why choose us?</h2> 
                            <p class="margin-bottom8 p-style ">
                            As a top agency of online marketing in Karachi and Pakistan, ExpoBird is well-defined with extraordinary services and has served more than 100+ clients. We think outside the box, so no design is reuse as we have pros for the design they think deep, so that is why we are the result-oriented agency.
                            </p>
                    </div>
                </div>
                <div className="row my-5">
                    <div  class="heading-page-2 col-xs-12 col-sm-12 col-md-12 col-lg-6 text-center text-lg-left mt-5 mt-lg-0">
                            <h2 className="heading-page">Why choose us?</h2> 
                            <p class="margin-bottom8 p-style ">
                            As a top agency of online marketing in Karachi and Pakistan, ExpoBird is well-defined with extraordinary services and has served more than 100+ clients. We think outside the box, so no design is reuse as we have pros for the design they think deep, so that is why we are the result-oriented agency.
                            </p>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 mb-3 text-center">
                        <div className="cta-image-right" >
                            <img className="slight-br mt-5" src={Image5} alt=""/>
                        </div>
                        <div className="pentagon">
                            <img src={Pentagon} alt=""/>
                        </div>
                    </div>
                </div> */}
            </div>
            {/* <Ctafifth/> */}
        </div>               
        )
    }
}