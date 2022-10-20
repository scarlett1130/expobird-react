import React, { Component } from 'react';
import clients from '../assets/expobird clients.webp'
import diviCover from '../assets/divi-video-cover.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlay} from '@fortawesome/free-solid-svg-icons'
import greenCircle from '../assets/Green-01.svg'
import Pentagon from '../assets/pentagon.svg'
import Customize from '../assets/customize.jpg'
import VideoProductionPortfolio from '../assets/Video Production Portfolio.png'
import CorporateVideoProduction from '../assets/corporate-video-production.png'
import DigitalVideoVommercials from '../assets/digital-video-commercials.png'
import DocumentaryVideoProduction from '../assets/documentary-video-production.png'
import Engage from '../assets/engage.png'
import ProductUnboxing from '../assets/product-unboxing.png'
import Whyus from '../assets/Why us.png'
import Testimonials from '../components/testimonials'
import ContactForm from '../components/ContactFormFooter'
import AnimatePopup from '../components/animatePopup'
import Accordion from './ui/Accordion'
import Banner from './pages/banner'
import ClientSection from './clients'
import Portfolio from './portfolio'
import ServiceSection from './Services-section'
import ServiceSectionTitle from './Services-section-title'
import CtaFourth from './pages/cta-fourth'
import {Link} from "react-router-dom";
import HelmetWrapper from './Helmet';
import { Helmet } from 'react-helmet';
import Fade from 'react-reveal/Fade'
// import { LazyLoadImage } from 'react-lazy-load-image-component';
import Video from '../assets/video-production.mp4'


export default class VP extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
      }
      npm
    render(){
        return(
            <div>

                <Helmet>
                    <title>Video Production Services In Digital Marketing Company | ExpoBird</title>
                    <meta name="description" content="ExpoBird gives the best video production services all over Pakistan. They include Corporate Videos, Documentary Videos, Video Production Company in Karachi"/>
                    <link rel="canonical" href="https://www.expobird.com/video-production-service" />
                </Helmet>
                {/* <HelmetWrapper title={"Video Production Services In Digital Marketing Company | ExpoBird"} description={"   ExpoBird gives the best video production services all over Pakistan. They include Corporate Videos, Documentary Videos, Video Production Company in Karachi"}/> */}
                <Banner 
                    title1={'Video Production Service'}
                    desc1="Creative Video Production & Video Making Company for Business and Corporates Share your message directly with your audience and other stakeholders"
                    Video={Video}
                    alt1="Creative Video Production & Video Making Company"
                    />
                <div className="container">
                    <Link to="/">Home</Link>  &#xbb; <Link to="/video-production-service">Video Production Service</Link>
                </div>
                <ServiceSectionTitle
                        title="Video Production Services" SubHeading="Sub Services with additional features of Video Production"
                        button="See Our Work " 
                />
                <ServiceSection 
                    image1={CorporateVideoProduction}
                    title1="Corporate Video Production" 
                    desc1="ExpoBird creates corporate videos that are meant to serve the purpose for its clients. " 

                    image2={DigitalVideoVommercials}
                    title2="Digital Video Commercials" 
                    desc2="DVC is the latest marketing hack which is now being used by all big brands. "
                />
                <ServiceSection 
                    image1={ProductUnboxing}
                    title1="Product Unboxing" 
                    desc1="Product Unboxing allows you to create videos that give the best demonstration about the product." 

                    image2={DocumentaryVideoProduction}
                    title2="Documentary Video Production" 
                    desc2="Now create short documentary videos that educate your audience and other stakeholders."
                />
                <Fade bottom>
                    <ClientSection/>
                </Fade>
                <Portfolio

                    image={VideoProductionPortfolio}
                    subheading1="Leading Video Marketing Services in Pakistan & With Creative video production Proud"   
                />
                
                    <CtaFourth className="cta-image-right"
                        heading="Engage"
                        subheading="Tell Powerful Stories and Create mesmerizing Videos With Unique Design Elements"
                        paragraph="Videos are the best way to discuss your ideas, explain your business goals and share your vision with relevant stakeholders of the company. Today most entrepreneurs look for eye-catching videos that will serve their purpose. This is because they know their audience pays to heed to videos more than any other thing. Such videos can now be created for mobile users as well. Big brands are now focusing more on digital marketing  videos that work best for social media and are mobile-friendly. They now know that 90% of the general public are engaged on social media via mobile and tablets."
                        button="Sign Up"
                        image={Engage}
                    />
                <div className="container">
                    <div className="row testi-margin justify-content-between ">

                        <div   class="col-12 col-sm-12 col-md-12 col-lg-6 text-center pt-5 pt-lg-0 order-12 order-md-12 order-lg-1 order-xl-1 order-sm-12">
                                <img src={Whyus} className="ChooseImg slight-br"/>
                        </div>
                        <div  class="heading-page-2 col-12 col-sm-12 col-md-12 col-lg-6 pt-5 pt-lg-0 order-1 order-md-1 order-lg-12 order-xl-12 order-sm-1">
                            <div className="text-center text-sm-center text-md-center text-lg-left">
                                <h2 className="heading-page">Why choose us?</h2> 
                                <p class="margin-bottom8 text-secondary p-style py-3">
                                ExpoBird has experts for video production that take care of any video project. But the final touch will be done after your review. Our crew members are flexible, and they can do things on their own, whether it's video making or content in the video.</p>
                                <Link to="/contact-us"><button className="services-cta mt-3 mb-5f">let’s discuss the project</button>   </Link>       
                            </div>
                        </div>
                    </div>
                </div>
                
               
                <Testimonials/>
                {/* <AnimatePopup/> */}

                <div className="row my-5 ">
                    <div className="col-12">
                        <h2 className="text-center heading-page mb-5">FAQ's</h2> 
                    </div>
                    <div className="col-1"></div>
                    <div className="col-10">
                        <Accordion title="Why You Should Choose Video Ads For Your Business In Pakistan!" desc="The trend of Video Ads can never be this high at any stage of time in Pakistan. Now all big brands of all industries are focusing on and spending more money on high profile video ads. These ads are meant to go viral on social media, especially on Facebook and YouTube. And why they should not be when everyone is spending more of their time on social media"/>
                        <br/>
                        <Accordion title="Opportunity to hit the audience!" desc="You need these video ads because of your competitors. Publishing video ads on social media would mean your competitors have a bright chance to take away all your customers because they are creating a strong online presence with such video ads and you are doing nothing to reduce that risk. So reach us now and create amazing video ads for your business that work best on all social media platforms across Pakistan"/>
                        <br/>
                        <Accordion title="What Are The Benefits Of Video Content Marketing !" desc="Today videos are considered to be life-blood for any organisation. It is a human instinct that we love action and prefer engagements than just random texts trying to convince us. We believe what we watch. Those days are long gone when the simple text was enough to justify your idea. Secondly, video content marketing allows you to deliver your message to the right place at the right time. And a lot more can be expressed now with short video ads that were not possible before at the time of long textual articles. Video Marketing with the right strategy can do wonders for businesses of all types."/>
                        <br/>

                        <Accordion title="How Can You Explain Your Company Milestone Through Corporate Video Production!" desc="Corporate Video Production is the best way to share historic moments when something big is achieved by companies. You can now capture such moments for the rest of your lives by creating a strong corporate video. This video will highlight all the tests of times that a company has gone through to achieve a particular milestone. These videos can then be used to increase motivation among the employees, appreciate the staff involved in achieving a milestone or share with your customers to show your level of dedication and sense of ownership. So there are plenty of ways you can use these videos for."/>
                        <br/>
                        <Accordion title="Can You Really Explain Your Brand Through Video Marketing!" desc="Video Marketing allows you to explain what your brand actually means to you and how it is going to make the lives of your customers easier. With inspirational scenes, animated videos and heart-touching sound, you can create a video that will influence your target market. You can use such videos to create brand awareness among the target audience, thank your loyal customers for being faithful to your brand and enter into a new market. Because what words cannot do a video can. So contact us now and we will help you to transform your brand into the hearts of your customers."/>
                        <br/>

                        
                        
                    </div>
                    <div className="col-1"></div>

                </div>
                <ContactForm/>
                <div className="container">
                    <Link to="/">Home</Link>  &#xbb; <Link to="/video-production-service">Video Production Service</Link>
                </div>
            </div>
        );
    }
}