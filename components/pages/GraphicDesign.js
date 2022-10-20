import React, { Component } from 'react';
 
import '../pages/socialMediaMarketing.css';
import ClientSection from '../clients'
import banner from '../../assets/digital-marketing-banner.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlay} from '@fortawesome/free-solid-svg-icons'
import ExpobirdBlueLogo from '../../assets/expobirldLogoBlue.png'
import ServiceSection from '../Services-section'
import ServiceSectionTitle from '../Services-section-title'
import Cta1 from '../../assets/launch-fast-large.jpg'
import AnimatePopup from '../animatePopup'
import Testimonials from '../testimonials'
import ContactFormFooter from '../ContactFormFooter'
import Image3 from '../../assets/image3.svg'
import Circle2 from '../../assets/circle2.svg'
import Portfolio from '../portfolio'
import Image5 from '../../assets/choose.png'
import Image8 from '../../assets/image.svg'
import Banner from '../pages/banner'
import CtaFourth from '../pages/cta-fourth'
import Accordion from '../ui/Accordion'
import graphicPortfolio from '../../assets/graphicPortfolio.png'
import Modal from '../../components/modalVideo';
import iccamulateDesign from '../../assets/iccamulate design.png'
import { Link } from 'react-router-dom';
import HelmetWrapper from '../Helmet';
import { Helmet } from 'react-helmet';
import Fade from 'react-reveal/Fade'
import Video from '../../assets/graphic n design.mp4'

const makeMuted = (elt) => {
    if (elt) {
      elt.muted = true;
    }
  };
export default class GraphicDesign extends Component{
    componentDidMount() {
        window.scrollTo(0, 0)
      }
    render(){
        return(

            <div> 
                <Helmet>
                    <title>
                    ExpoBird Professional Graphic Design Services 2022
                    </title>
                    <meta name="description" content="We can create quality assets that increase your brand identity with our Professional Graphic Design Services 2022 in Pakistan & Globally."/>
                    <link rel="canonical" href="https://www.expobird.com/graphic-design" />

                </Helmet>
                {/* <HelmetWrapper title={"Graphics Design Services in Pakistan | ExpoBird"} description={"ExpoBird serves the best graphics designing solutions in Pakistan. Best graphics designs projects are what distinguish us from others."}/> */}
                {/* <Banner 
                title1={'Graphic \n Design'}
                desc1="Develop your brand flawlessly with the ExpoBird 
                designing service to unleash your business identity 
                in Karachi and Pakistan."
                Video={Video}
                alt1="Pakistan’s #1 Graphic & Design Company"
                /> */}
                <div className="row bnr align-items-center ">
                    <div className="container">
                        <div className="row">
                                <div className="col-12 col-sm-12 col-md-12 col-lg-6 order-12 order-md-12 order-lg-1 order-xl-1 order-sm-12 d-flex justify-content-lg-left align-items-center justify-content-center ">
                                    <div className="heading-text" >
                                        <h1 id="heading-main">Graphic Design</h1>
                                        <h2 className="py-3"id="sub-text">Develop your brand flawlessly with the ExpoBird designing service to unleash your business identity in Karachi and Pakistan.</h2>
                                        <Link to="/contact-us">
                                        <button className="rf mt-1">
                                            Get Started
                                        </button>
                                        </Link>
                                    </div>
                                </div>
                    
                                <div className="col-12 col-sm-12 col-md-12 col-lg-6 mb-5 mb-lg-0 order-1 order-md-1 order-lg-12 order-xl-12 order-sm-1 text-center">
                                    <video ref={makeMuted} loop autoPlay alt="Pakistan’s #1 Graphic & Design Company" className="main-video" style={{boxShadow : 'none'}}>
                                        <source src={Video} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <Link  to="/">Home</Link>  &#xbb; <Link  to="/graphic-design">Graphic Designing Services</Link>
                </div>
                <ServiceSectionTitle
                        title="Art Work" SubHeading="ExpoBird is a full service digital marketing agency that pursues creativity in your work"
                        button="See Our Work " 
                />
                <ServiceSection 
                    title1="Poster Designing" 
                    desc1="Customize your poster design with ExpoBird to create the plan to unlock the power of your brand" 

                    title2="Brochure Designing" 
                    desc2="We design with the client perspective, so they convey their message of complex service with graphics"
                />
                 <ServiceSection  
                    title1="Illustration Designing" 
                    desc1="Explain the context with graphic designing, so the customer understands quickly and turns on your site" 

                    title2="Infographics Designing" 
                    desc2="Strike with engaging visuals to communicate quickly and easily and increase popularity"
                    />
                    <ServiceSection
                    title1="Logo Designing" 
                    desc1="We design concept base logo which reflect your business nature and suit on the service" 

                    title2="Package Designing" 
                    desc2="Tailor-made design can be done for you to stand out with competitors and increase sales in less"
                    />
                <Fade bottom>
                    <ClientSection/>
                </Fade>
                <Portfolio
                    image={graphicPortfolio} 
                    subheading1="When word complexity increases, designs come in front, which reflects the outlook of the business. A picture speaks a thousand words when some creativity and artwork is shown in the image. Please have a look our graphics designing work to satisfy yourself and then discuss your project with ExpoBird"   
                />
                

                    <CtaFourth className="cta-image-right"
                        heading="Immaculate Design"
                        subheading="Appealing and eye-catching design"
                        paragraph="In the world of unique graphics designing and hyper agencies, you will be finding a top agency. ExpoBird understands the system of marketing and sees the big picture and then design with its exceptional concepts. It can be understood easily whether you are fond of reading because the design is ready with your mindset and perspective."
                        button="Hire Professionals"
                        image={iccamulateDesign}
                    />
                    <div className="container">

                            <div className="row  testi-margin">
                                <div className="col-12 col-lg-1"></div>
                                        <div className="col-12 col-lg-10  text-center">
                                            <h2 className="heading-page ">Exposure of Designs</h2>
                                            <h3 className="mt-4 layout-heading">Best way to convey message and concept with graphic design</h3>
                                            <p className="p-style py-3">In the digital world, new and compelling design is necessary. Copy-paste is not allowed. With fancy images, ExpBird believes that the more important thing is to design beautifully.</p>
                                            
                                            <div>
                                            {/* <Link to="/contact-us" ><button className="services-cta mt-3">You think we mades</button></Link> */}
                                                <a href="tel:+92-330-2033334" ><button className="services-cta mt-3 mx-2 mx-sm-2">Call us</button></a>
                                            </div>
                                        </div>
                                <div className="col-12 col-lg-1"></div>
                            </div>
                        <div className="row testi-margin justify-content-between ">

                            <div   class="col-xs-12 col-sm-12 col-md-12 col-lg-6 text-center text-lg-left">
                                    <img src={Image5} className="slight-br ChooseImg" />
                            </div>
                    
                            <div  class="heading-page-2 col-xs-12 col-sm-12 col-md-12 col-lg-6 text-center text-lg-left mt-5 mt-lg-0">
                                    <h2 className="heading-page">Why choose us?</h2> 
                                    <p class="margin-bottom8 p-style py-3">
                                    As a top agency of online marketing in Karachi and Pakistan, ExpoBird is well-defined with extraordinary services and has served more than 100+ clients. We think outside the box, so no design is reuse as we have pros for the design they think deep, so that is why we are the result-oriented agency.
                                    </p>
                                    <Link to="/contact-us" ><button className="services-cta mt-3 mb-5f">Schedule a call </button></Link> 
                            </div>
                        </div>

                        
                </div>

                        {   /*<AnimatePopup/>*/}
                        <Testimonials/>
                        <div className="row my-5 ">
                            <div className="col-12">
                                <h2 className="text-center heading-page mb-5">FAQ's</h2> 
                            </div>
                            <div className="col-1"></div>
                            <div className="col-10">
                                <Accordion title="How many services do you provide in graphics designing?" desc="We offer a variety of services in graphic designing which includes Poster Designing, Brochure designing, Logo designing, Package designing, Infographics designing, Illustration and Much more"/>
                                <br/>
                                <Accordion title="Your agency is in Karachi and I am from another city will there be an issue?" desc="Our services are not only Karachi. We offer to whole over Pakistan. No problem can arise as all things are digitized. We can contact WhatsApp, Skype, etc."/>
                                <br/>

                                <Accordion title="How much time is required for design?" desc="Usually, we took 24 hours for design but only for posts and banners, etc. It may take a longer time because of the project size. To design a website. It may take a week, a month or even more time."/>
                                <br/>
                                <Accordion title="In which format you will send the design?" desc="We can send you JPG, PNG, and also in PDF file. If you want in another format, we will find a way out."/>
                                <br/>
                                <Accordion title="Will you provide content for image and post?" desc="If you require content, ExpoBird has professional writers. We can provide an engaging tagline that will increase the worth of posts and grab more attention."/>
                                <br/>
                                
                                
                            </div>
                            <div className="col-1"></div>
                        </div>
                        <ContactFormFooter/>
                        <div className="container">
                            <Link to="/">Home</Link>  &#xbb; <Link to="/graphic-design">Graphics & Design</Link>
                        </div>
            </div>
        )
    }
}