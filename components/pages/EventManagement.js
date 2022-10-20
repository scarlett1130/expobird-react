import React, { Component } from 'react';
import '../pages/socialMediaMarketing.css'
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
import Banner from './banner'
import CtaFourth from './cta-fourth'
import Accordion from '../ui/Accordion'
import EmailPortfolio from '../../assets/Email Marketing Portfolio.png'
import Modal from '../modalVideo';
import iccamulateDesign from '../../assets/iccamulate design.png'
import { Link } from 'react-router-dom';
import HelmetWrapper from '../Helmet';
import { Helmet } from 'react-helmet';
import Fade from 'react-reveal/Fade'

export default class EventManagement extends Component{
    componentDidMount() {
        window.scrollTo(0, 0)
      }
    render(){
        return(

            <div> 
                <Helmet>
                    <title>Top Event Management Companies in Pakistan</title>
                    <meta name="description" content="ExpoBird provides the best event management services in Karachi, Pakistan. Event planning for corporate and social events."/>
                    <link rel="canonical" href="https://www.expobird.com/event-management" />
                </Helmet>
                {/* <HelmetWrapper title={"Top Event Management Companies in Pakistan"} description={"ExpoBird provides the best event management services in Karachi, Pakistan. Event planning for corporate and social events."}/> */}
                <Banner title1={'Event Management Service'}
                desc1="Event Management
                Service add some sparks in your event. Your event will become valuable and newsworthy in Karachi and Pakistan."/>
                <Fade bottom>
                    <ClientSection/>
                </Fade>
                <Portfolio
                    image={EmailPortfolio} 
 
                />
                {/* <ServiceSectionTitle
                        title="Art Work" SubHeading="ExpoBird is a full-service online marketing agency 
                        that pursues creativity in your work."
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
                    /> */}

                    <CtaFourth className="cta-image-right"
                        heading="Uniqueness"
                        subheading="Organize your beautiful event with 
                        ExpoBird"
                        paragraph="Accomplish your dreams with our event management services. The fulfilment of your dream is our responsibility. Created themes and own choice themes are also done by ExpoBird so that we can fulfil the loophole from which your event become successful and colourful. If you need any 2 pairs of hands in the mid of the program, ExpoBird will always be available anywhere in Karachi or Pakistan."
                        button="Sign Up"
                        image={iccamulateDesign}
                    />
                    <div className="container">

                            <div className="row  testi-margin">
                                <div className="col-1"></div>
                                        <div className="col-10 text-center">
                                            <h2 className="heading-page ">Increase Engagement</h2>
                                            <h2 className="mt-4 layout-heading">Sit back and relax our professionals are here to program your event and play their role</h2>
                                            {/* <p className="text-secondary">In the digital world, new and compelling design is necessary. Copy-paste is not allowed. With fancy images, ExpBird believes that the more important thing is to design beautifully.</p> */}
                                            
                                            <div>
                                            {/* <Link to="/contact-us" ><button className="services-cta mt-3">You think we mades</button></Link> */}
                                                <a href="tel:+92-330-2033334" ><button className="services-cta mt-3 mx-2 mx-sm-2">Call us</button></a>
                                            </div>
                                        </div>
                                <div className="col-1"></div>
                            </div>
                        <div className="row testi-margin">

                            <div   class="col-xs-12 col-sm-12 col-md-12 col-lg-6 mt-5 text-center text-lg-left">
                                    <img src={Image5}   className="slight-br ChooseImg" />
                            </div>
                    
                            <div  class="col-xs-12 col-sm-12 col-md-12 col-lg-6 text-center text-lg-left mt-4 mt-lg-0">
                                    <h2 className="heading-page">Incorporates Marketing with special events  </h2> 
                                    <p class="margin-bottom8 p-style py-3">
                                    Build the power of your business by virtual events. Experience success by doing the event live to grab audience attention. Our uniqueness and artwork before and in between events will bring customers to your particular programs.
                                    </p>
                                    <button className="services-cta mt-3 mb-5f">Sign Up</button>          
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
                                <Accordion title="How much time is required for managing an event?" desc="It is on you when you are planning to do your event. If it's urgent no need to worry, we increase the pairs of workers, so you do not have to hustle for anything. "/>
                                <br/>
                                <Accordion title="What type of event services do you provide?" desc="We offer Special Events, Corporate events, Cultural events, Promotional events, Sponsored events, Virtual events, And much more what are you looking for?"/>
                                <br/>

                                <Accordion title="How much cost do you charge for events?" desc="It differs from events to events. We have customized packages too. If you have any query simply contact us. We will sort out to fit on your budget so you can make your event special with ExpoBird. "/>
                                <br/>
                                <Accordion title="Is there any hidden cost in managing your event?" desc="Everything will be on the table with their specified cost, so there will be no hidden charges. Even if there any price arises, our experts will take your grant then will take a step. It is not necessary if you do not require anything we will not enforce as priority is Customer satisfaction is everything. "/>
                                <br/>
                                <Accordion title="Where is your office and in which cities your service is available?" desc="We are available nationwide. You can contact our given number or email us or WhatsApp us. Feel free to contact us. We have covered the event in Karachi, Lahore, and Islamabad. We are waiting to provide service in the other cities of Pakistan too."/>
                                <br/>
                                
                                
                            </div>
                            <div className="col-1"></div>
                        </div>
                        <ContactFormFooter/>
            </div>
        )
    }
}