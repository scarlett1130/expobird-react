import React, { Component } from 'react';
import '../pages/socialMediaMarketing.css'
import ClientSection from '../clients'
// import banner from '../../assets/digital-marketing-banner.jpg'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faPlay} from '@fortawesome/free-solid-svg-icons'
// import ExpobirdBlueLogo from '../../assets/expobirldLogoBlue.png'
import ServiceSection from '../Services-section'
import ServiceSectionTitle from '../Services-section-title'
// import Cta1 from '../../assets/launch-fast-large.jpg'
// import AnimatePopup from '../animatePopup'
import Testimonials from '../testimonials'
import ContactFormFooter from '../ContactFormFooter'
import {Link} from "react-router-dom";
// import Image3 from '../../assets/image3.svg'
// import Circle2 from '../../assets/circle2.svg'
import Portfolio from '../portfolio'
// import Image5 from '../../assets/image5.svg'
// import Image from '../../assets/image.svg'
import Banner from '../pages/banner'
import AnimationPortfolio from '../../assets/animation portfolio.jpg'
import services1 from '../../assets/services-1.gif'
import services2 from '../../assets/video-production-expobird.gif'
import services3 from '../../assets/video-animation-expobird.gif'
import services4 from '../../assets/digital-marketing-expobird.gif'
import services5 from '../../assets/web-development-expobird.gif'
import services6 from '../../assets/social-media-expobird.gif'
import HealthyExperience from '../../assets/animation-with-expobird.jpg'
import CtaFourth from '../pages/cta-fourth'
import compelling from '../../assets/compelling.jpg'
import Accordion from '../ui/Accordion'
// import AnimationBanner from './AnimationBanner';
// import HelmetWrapper from '../Helmet';
import { Helmet } from 'react-helmet';
import Fade from 'react-reveal/Fade'
import Video from '../../assets/animation.mp4'

const makeMuted = (elt) => {
    if (elt) {
      elt.muted = true;
    }
  };
export default class Animation extends Component{
    
    constructor(props){
        super(props);
        
        this.state = {
            
        }
        
    }
    


    componentDidMount() {
        window.scrollTo(0, 0)
      }

    render(){
        return(
            <div>
                <Helmet>
                    <title>Top Quality Video Animation Services Pakistan</title>
                    <meta name="description" content="We provide Quality video animation services Pakistan in 2022. We assist brands and organizations in turning their concepts into animated videos."/>
                    <link rel="canonical" href="https://www.expobird.com/animation" />

                </Helmet>
                {/* <HelmetWrapper title={"Best Animation film maker in Pakistan"} description={"ExpoBird provides the best and quality animated videos. Convey your message through animated videos."}/> */}
                {/* <Banner
                    title1={'Animation with ExpoBird'}
                    desc1="Pakistan’s #1 Animation Company based in Karachi"
                    Video={Video}
                    alt1="Pakistan’s #1 Animation Company"
                /> */}
                <div className="row bnr align-items-center ">
                    <div className="container">
                        <div className="row">
                                <div className="col-12 col-sm-12 col-md-12 col-lg-6 order-12 order-md-12 order-lg-1 order-xl-1 order-sm-12 d-flex justify-content-lg-left align-items-center justify-content-center ">
                                    <div className="heading-text" >
                                        <h1 id="heading-main">Animation with ExpoBird</h1>
                                        <h2 className="py-3"id="sub-text">Pakistan’s #1 Animation Company based in Karachi</h2>
                                        <Link to="/contact-us">
                                        <button className="rf mt-1">
                                            Get Started
                                        </button>
                                        </Link>
                                    </div>
                                </div>
                    
                                <div className="col-12 col-sm-12 col-md-12 col-lg-6 mb-5 mb-lg-0 order-1 order-md-1 order-lg-12 order-xl-12 order-sm-1 text-center">
                                    <video ref={makeMuted} loop autoPlay alt="Pakistan’s #1 Animation Company" className="main-video" style={{boxShadow : 'none'}}>
                                        <source src={Video} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <Link to="/">Home</Link>  &#xbb; <Link to="/animation">Animation</Link>
                </div> 
                {/* <Banner title1={'Animation with ExpoBird'}
                desc1="Pakistan’s #1 Animation Company based in Karachi"/> */}

                {/* <div className="row bnr">
                    <img id="banner-img" src={banner} alt=""/>
                    <div className="heading-text">
                        <h1 id="heading-main">Animation with<br/>Expobird</h1>
                        <p>Pakistan’s #1 Animation Company based in Karachi<br/>
                        </p>
                        <button className="rf">
                            Get Started
                        </button>
                    </div>

                    <div className="play-btn main-video ">
                    <div className="play-btn-inside">
                                <FontAwesomeIcon icon={faPlay} />
                            </div>
                    </div>

                </div> */}

                {/* comment added */}
                <ServiceSectionTitle
                    title="Our Services" SubHeading="We Are Offering Professional Video Animation Services"
                    button="Explore Hundreds of Services" 
                />
                <ServiceSection
                       image1={services1}
                        title1="2D animation"
                        desc1="Create colorful and eye-catchy 2D animations videos that have a dazzling impact on the minds of customers and change their decision in your favor."
                        link1=""

                        image2={services6}
                        title2="3D animation"
                        desc2="Make 3D animations videos that will give you an extremely realistic feel with inspirational scenes and high definition sound for your business."
                        link2=""  
                />
                <ServiceSection
                       image1={services1}
                        title1="Animation explainer videos"
                        desc1="Explain your business, product, or service with compelling and interactive animated explainer videos that will win the hearts of your customers."
                        link1="/graphic-design"

                        image2={services6}
                        title2="Animation infographics video"
                        desc2="With appealing images and engaging scenes, you can now deliver your business idea through animated infographics video to grab the viewer's attention."
                        link2=""  
                />
                <ServiceSection
                       image1={services1}
                        title1="Cartoon animation"
                        desc1="Create videos based on animated cartoon characters that will be not only worth watching it, but it will be fun with learning."
                        link1="/graphic-design"

                        image2={services6}
                        title2="Custom logo animation"
                        desc2="Attract your customers by the powerful motion of logo animation and grab their attention with your eye-catching logo that will blow their minds."
                        link2="/web-development"  
                />
                <Fade bottom>
                    <ClientSection/>
                </Fade>
                <Portfolio
                    image={AnimationPortfolio} 
                    subheading1="ExpoBird creates top animation and explainer videos for businesses of all types in Karachi, Islamabad, Lahore, and across Pakistan. Now you can say it all with interactive animated videos that touch your audience's hearts."   
                />
                
                {/* <div class="row"  >
                    <div class="col-md-1 col-lg-1 "></div>

                    <div  class="col-xs-12 col-sm-12 col-md-5 col-lg-5 mb-5">
                            <h1 >Our Services for Website Development</h1> 
                            <h3 >ExpoBird expertise in development. Explore more development in websites only Expobird in Karachi, Pakistan</h3>
                            <ul>
                                <li>Business Website</li>
                                <li>Custom Website</li>
                                <li>Ecommerce Website</li>
                                <li>Progressive Website </li>
                            </ul> 
                            <button class="rf">Schedule a Call</button>   
                            <button class="services-cta mt-3 mb-5f">See Our Work</button>          
       
                    </div> 
                        <div  class="top2 col-xs-12 col-sm-12 col-md-5 col-lg-5 mb-5">
                            <img  className="cta-image" src={Cta1}/>
                        </div>
                        <div class="col-md-1 col-lg-1 "></div>

                </div> */}
                    {/* <div className="row">
                        <div className="col-md-1 col-lg-1"></div>
                        <div   class="col-xs-12 col-sm-12 col-md-5 col-lg-5">
                                <img src={Image5}   width="451px"height="245px" />
                        </div>
                
                        <div  class="heading-page-2 col-xs-12 col-sm-12 col-md-5 col-lg-5 mt-5 ml-4">
                                <h1>Underperforming Website</h1> 
                                <p class="margin-bottom8 text-secondary p-style ">It will be harrowing if your website is not performing well as your 
                                    website is an identity of your brand. Also, it will affect the overall 
                                    performance of the website. For removing your pain, ExpoBird 
                                    will do your website development. After connecting with us, 
                                    you have to think only of the product making process and leave 
                                    everything about the website to ExpoBird.</p>
                                <button className="services-cta mt-3 mb-5f">SignUp</button>          
                        </div>
                        <div class="col-md-1 col-lg-1"></div>


                        
                </div>


            
                <div className="row3 row-container" >
                    <div className="row2 center-align-columns card text-center" >
                    <div  className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
                            <h1>How is the Web Development process is Done?</h1>
                    </div>
                        <div  className="col-xs-12 col-sm-12 col-md-4 col-lg-4 mt-3">
                                <img src={Image} />
                                <h3>Accessing your business requirement</h3>
                                <p> Understanding your business needs is our main goal after which it is compile with technology requirements. It is a discovery and strategy process.</p>
                                <button className="services-cta mt-3 mb-5f">Contact Us</button>          
                        </div> 
                        
                        <div  className="col-xs-12 col-sm-12 col-md-4 col-lg-4 mt-3">
                                <img src={Image} />
                                <h3>Accessing your business requirement</h3>
                                <p> Understanding your business needs is our main goal after which it is compile with technology requirements. It is a discovery and strategy process.</p>
                                <button className="services-cta mt-3 mb-5f">Contact Us</button>  
                        </div>
                        <div  className="col-xs-12 col-sm-12 col-md-4 col-lg-4 mt-3">
                                <img src={Image} />
                                <h3>Accessing your business requirement</h3>
                                <p> Understanding your business needs is our main goal after which it is compile with technology requirements. It is a discovery and strategy process.</p>
                                <button className="services-cta mt-3 mb-5f">Contact Us</button>  
                        </div>

                        <div  className="col-xs-12 col-sm-12 col-md-4 col-lg-4 mt-3">
                                <img src={Image} />
                                <h3>Accessing your business requirement</h3>
                                <p> Understanding your business needs is our main goal after which it is compile with technology requirements. It is a discovery and strategy process.</p>
                                <button className="services-cta mt-3 mb-5f">Contact Us</button>          
                        </div> 
                        
                        <div  className="col-xs-12 col-sm-12 col-md-4 col-lg-4 mt-3">
                                <img src={Image} />
                                <h3>Accessing your business requirement</h3>
                                <p> Understanding your business needs is our main goal after which it is compile with technology requirements. It is a discovery and strategy process.</p>
                                <button className="services-cta mt-3 mb-5f">Contact Us</button>  
                        </div>
                        <div  className="col-xs-12 col-sm-12 col-md-4 col-lg-4 mt-3">
                                <img src={Image} />
                                <h3>Accessing your business requirement</h3>
                                <p> Understanding your business needs is our main goal after which it is compile with technology requirements. It is a discovery and strategy process.</p>
                                <button className="services-cta mt-3 mb-5f">Contact Us</button>  
                        </div>



                    </div>
                </div>

                        <AnimatePopup/> */}

                        <CtaFourth className="cta-image-right"
                        heading="Healthy Experience"
                        subheading="High engagement and better understanding"
                        paragraph="With the sound team of experts, we create 2D and 3D explainer videos that deliver results most desirably. Now you can explain your business model, how your business cycle works, share what you feel for your customers, discuss corporate social responsibility and give a demonstration on how your product or service works and many more."
                        button="Learn More"
                        image={HealthyExperience}
                        
                    />
                                        <div className="container">

                                            <div className="row  testi-margin">
                                                <div className="col-1"></div>
                                                        <div className="col-10 align-self-center text-center">
                                                            <h2 className="heading-page ">Customize and flexible</h2>
                                                            <h3 className="mt-4 layout-heading">Modern tools enable ExpoBird to defer your work from competitors!</h3>
                                                            <p className="p-style py-3">ExpoBird is exceptional in creating animated characters that are entirely new. Your provided undefined story will produce in ways that you have never imagined and captivated a larger audience.</p>
                                                            
                                                            <div>
                                                            <Link to="/contact-us"><button className="services-cta mt-3">Schedule a meeting</button></Link>
                                                            <a href="tel: +92-330-2033334"><button className="services-cta mt-3 mx-3">Call us</button></a>
                                                            </div>
                                                        </div>
                                            </div>
                                            <div className="row testi-margin">

                                            <div   class="col-12 col-sm-12 col-md-12 col-lg-6 text-center text-lg-left">
                                                    <img src={compelling}   className="slight-br ChooseImg" />
                                            </div>

                                            <div  class="heading-page-2 col-12 col-sm-12 col-md-12 col-lg-6 text-center text-lg-left mt-4 mt-lg-0">
                                                    <h2 className="heading-page">Compelling</h2> 
                                                    <p class="margin-bottom8 p-style py-3">
                                                    You should also make animated and explainer videos because your competitors are. They target your potential clients and existing customers with creative animated videos that build a company profile of your competitors into their minds knowingly and unknowingly. Eventually, they will show more trust and faithfulness towards other brands, and all your current customer base will be shifted to your competitors. This is the last thing that you will want for your business.
                                                    </p>
                                                    <Link to="/contact-us"><button className="services-cta mt-3 mb-5f">Contact us</button></Link>          
                                            </div>
                                        </div>
                                    </div>
                        <Testimonials/>
                        <div className="row my-5 ">
                            <div className="col-12">
                                <h2 className="text-center heading-page mb-5">FAQ's</h2> 
                            </div>
                            <div className="col-1"></div>
                            <div className="col-10">
                                <Accordion title="Do Animated videos really help my business to reach the target audience?" desc="Animated videos are one of the most interactive ways to reach your target audience. With short animated videos, you can spread your word all over Pakistan. They have the potential to reach almost everyone and everywhere and at any time. You are not bound by any boundaries, culture, race, religion, or time that confine your reach. You have the power as to where on Earth you want your name to be heard. Before your competitors reach your target audience, we would instead arrive at the first and convert them into your customers. "/>
                                <br/>
                                <Accordion title="Can video ads on social media help my potential customers for conversions?" desc="Video ads play a crucial role when it comes to conversions of potential customers. With your videos, you can set a long and lasting impression into the minds of your customers. You can create an original video based on your clients' preferences, needs, and habits. You can animate the video in such a way that primarily focuses on the problem of your niche and mass market that will resultantly bring you more conversions and hence, more sales for your business. Any time is the right time to solve your niche's problems and make them your loyal customers. So rush now and get free consultancy."/>
                                <br/>

                                <Accordion title="How Animated Explainer Videos Help Grow My Business by 200% how it can help your marketing strategy?" desc="Animated videos can play a vital role to grow your business if you play your cards right. Videos that are made with a thorough understanding of the nature of a business, keeping audience habits and preferences in mind, and promoted with right intent and intensity, then higher are the chances that people will buy it. It is all about creating awareness, interest, desire, and action for your product or service. We all know that they are in need of different things but only that video that is presented in an interactive way will take the lead and more would be the chances that it will end up with higher sales at the end of the day. Therefore, it is a mix of marketing strategy and production that will help your business grow by 200%."/>
                                <br/>
                                <Accordion title="Can Brand development be easily promoted through animated videos?" desc="Animated videos can assist your business in brand development that no other thing can for a vast majority of businesses. For instance, you can create a character that faces similar problems like your target audience. You can show what he goes through in daily life because of the problems. Now you can highlight those problems and offer a solution for their needs with the help of animated videos. This will help you to create a buyer persona and the audience will relate themselves with that character you used in the video which will create a personal touch and personalize your brand for them."/>
                                <br/>
                                <Accordion title="Brand Establishment" desc="Secondly, you can use elements of branding such as font, texts, colors, and slogans in your videos that will help your customers make affiliation with your business and further establish the link with your brand whenever and wherever they go through and experience these elements."/>
                                <br/>
                                
                                
                            </div>
                            <div className="col-1"></div>
                        </div>
                        <ContactFormFooter/>
                        
            </div>
        )
    }
}