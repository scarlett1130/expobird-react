import React, { Component } from 'react';
import MainVid from '../assets/main-vid.mp4'
import Eg1 from '../assets/Eg1.mp4'
import Eg2 from '../assets/Eg2.mp4'
import Eg3 from '../assets/Eg3.mp4'
import Services from './Homepage-Services-section'
import ServicesTitle from './Services-section-title'
import Accordion from './ui/Accordion'
// import ContactForm from '../components/ContactFormFooter'
import Testimonials from './testimonials'
import ClientSection from './clients'
import Portfolio from './portfolio'
import { BrowserRouter as Router, Link} from "react-router-dom";
import AnimatePopup from './animatePopup'
import '../components/pages/socialMediaMarketing.css'
import SEOFactor from '../assets/SEO The X-Factor.png'
import OnlineMarketing from '../assets/Online Marketing.svg'
import CtaOne from './pages/cta-one'
import CtaThree from './pages/cta-three'
import premiumQuality from'../assets/premium quality.mp4';
import competitivePricing from '../assets/competitive pricing.mp4';
import  portfolioCover from '../assets/portfolio cover.png';
import CtaVideo1 from '../assets/ctaVideo1.mp4';
import  CtaVideo2 from '../assets/ctaVideo2.mp4';
import  CtaVideo3 from '../assets/ctaVideo3.mp4';
import ContactFormFooter from './ContactFormFooter';
import Fade from 'react-reveal/Fade';
import HelmetWrapper from './Helmet';
import {Helmet} from 'react-helmet';
import Banner from './pages/banner'
import CtaFourth from './pages/cta-fourth'
import ctaInstaImage from '../assets/cta-insta.png'
import Cta1 from '../assets/Our services.png'
import Wakeup from '../assets/Wake up.png'


export default class instagram extends Component{

        myFunction() {
        var dots = document.getElementById("dots");
        var moreText = document.getElementById("more");
        var btnText = document.getElementById("myBtn");

        if (dots.style.display === "none") {
            dots.style.display = "inline";
            btnText.innerHTML = "Read more"; 
            moreText.style.display = "none";
        } else {
            dots.style.display = "none";
            btnText.innerHTML = "Read less"; 
            moreText.style.display = "inline";
        }
        }

    render(){
        return(
            <div>
                <Helmet>
                    <title>Instagram Marketing</title>
                    <meta name="description" content="Make your target audience fall in love with your product 
through Instagram Marketing from ExpoBird"/>
                    <meta name="keywords" content="Top Social Media Marketing, Digital Marketing, Web Development, eCommerce website, Magento eCommerce, Amazon Marketing, Amazon FBA, Progressive Web Application(PWA), Search Engine Optimization (SEO), Video Production, Corporate Video Production" />
                </Helmet>

                <Banner title1={'Instagram Marketing'}
                desc1="Make your target audience fall in love with your product through Instagram Marketing from ExpoBird"/>
                
                
                <ClientSection/>
                
                <Portfolio image={portfolioCover} />
                <CtaFourth className="cta-image-right"
                    // heading=""
                    subheading="SEO – The X-FACTOR for YOUR BRAND"
                    paragraph="When everyone around you is selling the same kind of product and service, when everyone is throwing the same promotions and discounts offers, when everyone is reaching the target audience through the same platform, then what is that one factor that could give you an edge over your rivals in this saturated market? Read More"
                    image={Wakeup}
                    button="Rank Your Website Now"
                />
                
                        <CtaOne
                            heading="Rule !!! "
                            // subheading="The Trusted Online Digital Marketing Company In Pakistan"
                            paragraph="Play with the audience’s mind through Instagram Feed
                            Rule the Instagram Feed of your current and potential audience by publishing eye-catchy content on regular intervals. This way they will be engaged with your brand most of the time every day.
                            "
                            button="Publish a post"
                            video={MainVid}
                            link="/contact-us"

                        />
                        <div className="container testi-margin">
                            <div class="row text-center text-lg-left">

                                <div  class="col-12 col-sm-12 col-md-12 col-lg-6  mb-5">
                                        <h2 className="heading-page">Posts that tell about your brand</h2> 
                                        <h3 className="Webdev-Text py-3 ">WIth ExpoBird you get a variety of options for the Instagram posts and stories.</h3>
                                        <ul >
                                            <li>Animated Videos</li>
                                            <li>Creative Stories</li>
                                            <li>Creative Banner</li>
                                            <li>Viral Content</li>
                                        </ul> 
                                        <Link to="/contact-us" ><button class="services-cta mt-3 mb-5f">Schedule a Call</button></Link>   
                                        <Link to="/case-study" ><button class="services-cta mt-3 mb-5f mx-2 mx-sm-2">See Our Work</button>      </Link>    
                
                                </div> 
                                    <div  class="top2 col-12 col-sm-12 col-md-12 col-lg-6 mb-5">
                                        <img  className="slight-br ChooseImg" src={Cta1}/>
                                    </div>

                            </div>
                        </div>


                        <div className="container testi-margin">
                            <div class="row text-center ">

                                <div  class="col-12 mb-5">
                                        <h2 className="heading-page">Multiply your Followers!!!</h2> 
                                        <h3 className="Webdev-Text py-3 ">This is the golden opportunity for your brand to grow your fan base and create customer loyalty.</h3> 
                
                                </div> 
                                    <div  class="col-12 mb-3">
                                        <img  className="slight-br " src={ctaInstaImage} width="90%"/>
                                    </div>

                            </div>
                        </div>



                        {/* <AnimatePopup
                            video1={CtaVideo1}
                            video2={CtaVideo2}
                            video3={CtaVideo3}
                            paragraph1="ExpoBird aspires to meet clients' expectations and 
                                                    satisfy them with unique online marketing tactics every time."
                            paragraph2="Our practice with every brand is that we create art should not look beautiful but feel and function beautifully."
                            paragraph3="We improvise your brand not only to look beautiful but to perform amazingly. We believe in numbers and growth."    
                        /> */}
        
                        
                    <Fade bottom>
                        <div className="row testi-margin ">
                                <div className="col-12">
                                    <h2 className="text-center heading-page mb-5">FAQ's</h2> 
                                </div>
                            <div className="col-12 col-sm-12 col-md-1 col-lg-1"></div>
                            <div className="col-12 col-sm-12 col-md-10 col-lg-10">
                                <Accordion title="Why instagram ads for promoting business?" desc="We have an online marketing team that is well-versed with a sales funnel of online marketing. They are a part of our team not only because of what they know, but the marketing results they produce overtime. For this reason, they get aligned with your overall marketing and business goals which are consistently monitored to drive maximum profit out of your online marketing budget."/>
                                <br/>
                                <Accordion title="Do you support me if I need any help in using Instagram Marketing?" desc="One size does not fit all!
                                we have customised packages for different clients based on their needs, target market and buyer persona. 
                                So let's have a meeting and discuss this in person"/>
                                <br/>

                                <Accordion title="What is the best time for business to post on instagram?" desc="Budget is not an issue at all as we have customised packages for different clients based on their marketing needs and business goals. So we are confident that we will definitely work it out for your organisation as well."/>
                                <br/>
                                <Accordion title="How do I increase the following on instagram?" desc="Nope. We have a strong link with companies that are based in other regions of Pakistan such as Islamabad, Lahore and Peshawar. With an internet in our hands, distance is no more an issue."/>
                                <br/>
                                
                                
                            </div>
                            <div className="col-12 col-sm-12 col-md-1 col-lg-1"></div>
                        </div>
                    </Fade>
                        
                        {/* Imported Contact Form  */}
                        
                        <Testimonials/>
                        {/* <CtaTwo
                            video1={CtaVideo1}
                            video2={CtaVideo2}
                            video3={CtaVideo3}
                            paragraph1="ExpoBird aspires to meet clients' expectations and 
                            satisfy them with unique online marketing tactics every time."
                            paragraph2="Our practice with every brand is that we create art should not look beautiful but feel and function beautifully."
                            paragraph3="We improvise your brand not only to look beautiful but to perform amazingly. We believe in numbers and growth."    
                        
                        /> */}
            
                        <ContactFormFooter/>

                        
            </div>
        );
    }
}