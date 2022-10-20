import React, { Component } from 'react';
import '../pages/socialMediaMarketing.css'
import Image4 from '../../assets/image4.svg'
import ClientSection from '../clients'
import banner from '../../assets/digital-marketing-banner.jpg'
import Video from '../../assets/expobird-video.mp4'
import Cta from '../../assets/divi-preview.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlay} from '@fortawesome/free-solid-svg-icons'
import marketing01 from '../../assets/marketing-01.jpg'
import marketing02 from '../../assets/marketing-02.jpg'
import marketing03 from '../../assets/marketing-03.png'
import marketing04 from '../../assets/marketing-04.jpg'
import PortfolioImage from '../../assets/Web Portfolio.png'
import ExpobirdBlueLogo from '../../assets/expobirldLogoBlue.png'
import ServiceSection from '../Services-section'
import Cta1 from '../../assets/Our services.png'
import Accessing from '../../assets/accessing-your-business-requirement.png'
import Planning from '../../assets/planning-a-strategy-that-works.png'
import Featuring from '../../assets/featuring-website-solution.png'
import Front from '../../assets/Front Back Code.png'
import Testing from '../../assets/Testing QA.png'
import Prepare from '../../assets/prepare-your-development-team.png'
import Accordion from '../ui/Accordion'
import {Link} from "react-router-dom";
import AnimatePopup from '../animatePopup'
import Testimonials from '../testimonials'
import ContactFormFooter from '../ContactFormFooter'
import Image3 from '../../assets/image3.svg'
import Circle2 from '../../assets/circle2.svg'
import Portfolio from '../../components/portfolio'
import Image5 from '../../assets/Our services.png'
import Image from '../../assets/image.svg'
import Banner from '../pages/banner'
import HelmetWrapper from '../Helmet';
import { Helmet } from 'react-helmet';
import Fade from 'react-reveal/Fade';
import pink from '../../assets/pink.svg'
import Video2 from '../../assets/web6.mp4'

const makeMuted = (elt) => {
    if (elt) {
      elt.muted = true;
    }
  };
export default class WebDevelopment extends Component{
    componentDidMount() {
        window.scrollTo(0, 0)
      }
    render(){
        return(
            <div> 
                <Helmet>
                    <title>
                    Custom Web Development Services in Pakistan 2022
                    </title>
                    <meta name="description" content="ExpoBird offers quality Custom web development services in Pakistan. We offer custom Word Press development, & Ecommerce Development Services."/>
                    <link rel="canonical" href="https://www.expobird.com/web-development" />

                </Helmet>
                {/* <Banner 
                    title1={'Web Development with ExpoBird'}
                    desc1="Develop your business website from our web development company"
                    Video={Video2}
                    alt1="Custom Web Development Services in Pakistan 2022"
                    /> */}
                    <div className="row bnr align-items-center ">
                        <div className="container">
                            <div className="row">
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 order-12 order-md-12 order-lg-1 order-xl-1 order-sm-12 d-flex justify-content-lg-left align-items-center justify-content-center ">
                                        <div className="heading-text" >
                                            <h1 id="heading-main">Web Development with ExpoBird</h1>
                                            <h2 className="py-3"id="sub-text">Develop your business website from our web development company</h2>
                                            <Link to="/contact-us">
                                            <button className="rf mt-1">
                                                Get Started
                                            </button>
                                            </Link>
                                        </div>
                                    </div>
                        
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 mb-5 mb-lg-0 order-1 order-md-1 order-lg-12 order-xl-12 order-sm-1 text-center">
                                        <video ref={makeMuted} loop autoPlay alt="Custom Web Development Services in Pakistan 2022" className="main-video" style={{boxShadow : 'none'}}>
                                            <source src={Video2} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    </div>
                            </div>
                        </div>
                    </div>
                <div className="container">
                            <Link to="/">Home</Link>  &#xbb; <Link to="/web-development">Web Development</Link>
                </div>

                <div className="container">
                <div className="row3 testi-margin" >
                    <div className="row2 card text-center py-2 py-sm-5">
                    <div  className="col-12 col-sm-12 col-md-12 col-lg-12 marginTop ">
                            <h2 className="heading-page3">WHAT IS WEB DEVELOPMENT PROCESS IN EXPOBIRD</h2>
                    </div>
                        <div  className="col-12 col-sm-12 col-md-4 col-lg-4  mt-3">
                                <img src={Accessing} width="75"/>
                                <h4>Accessing your <br/>business requirement</h4>
                                <p className="p-style py-3"> Understanding your business needs is our main goal after which it is compile with technology requirements. It is a discovery and strategy process.</p>
                                {/* <a href="/contact-us" ><button className="services-cta mt-3 mb-5f">Contact Us</button> </a>          */}
                        </div> 
                        
                        <div  className="col-12 col-sm-12 col-md-4 col-lg-4 mt-3">
                                <img src={Planning} width="75"/>
                                <h4>Planning a  <br/>Strategy that works</h4>
                                <p className="p-style py-3"> Tools are essential for web development. Without the technical coding things can not be done. Our ExpoBird experts will become familiar with your given tools and tackle every technical issue very smartly.</p>
                                {/* <button className="services-cta mt-3 mb-5f">Contact Us</button>   */}
                        </div>
                        <div  className="col-12 col-sm-12 col-md-4 col-lg-4  mt-3">
                                <img src={Featuring} width="75"/>
                                <h4>Featuring Website  <br/>Solution</h4>
                                <p className="p-style py-3"> We are capable of handling all your digital services. We early feature all the things you require for the website and give you the best possible solution whether it’s ecommerce website development or WordPress development.</p>
                                {/* <button className="services-cta mt-3 mb-5f">Contact Us</button>   */}
                        </div>
                        <div  className="col-12 col-sm-12 col-md-4 col-lg-4 mt-3">
                                <img src={Front} width="75"/>
                                <h4>Front-Back  <br/>Coding </h4>
                                <p className="p-style py-3"> Our web development team is expert in using languages for coding like PHP,JAVA,HTML,CSS. Also they are certified in using codes and fluent in using a variety of CMS.</p>
                                {/* <button className="services-cta mt-3 mb-5f">Contact Us</button>           */}
                        </div> 
                        
                        <div  className="col-12 col-sm-12 col-md-4 col-lg-4 mt-3">
                                <img src={Testing} width="75"/>
                                <h4>Testing  <br/>QA</h4>
                                <p className="p-style py-3">In this phase, the website is live on the client-server to solve issues regarding bugs and breaking of websites. After which problems are resolved as per client needs, and then it is live.</p>
                                {/* <button className="services-cta mt-3 mb-5f">Contact Us</button>   */}
                        </div>
                        <div  className="col-12 col-sm-12 col-md-4 col-lg-4 mt-3">
                                <img src={Prepare} width="75"/>
                                <h4>Prepare your  <br/>development team</h4>
                                <p className="p-style py-3">Our work is not finished yet, we hand over CMS files and explain to them how it works and if any problems arise how it can be fixed. Crashing issues are also shared, so we take care of the website as we provide the best WordPress development services.</p>
                                {/* <button className="services-cta mt-3 mb-5f">Contact Us</button>   */}
                        </div>



                    </div>
                </div>
            </div>

                <Fade bottom>
                    <ClientSection/>
                </Fade>
                <div className="container testi-margin">
                <div className="row3 row-container " >
                    <div className="row2 card justify-content-around testi-margin2" >
                        <div  className="col-12 col-md-1 mt-1 left">
                            {/* <img src={ExpobirdBlueLogo}   width="172px" height="104px "/> */}
                            <img src={ExpobirdBlueLogo}   width="70px" height="45px "/>
                        </div> 
                        <div className="col-3"></div>
                        <div  className=" col-12 col-md-5 mt-3">
                                <h2 className="heading-page ml-4" >Portfolio</h2> 
                        </div>
                        <div className="col-3"></div>




                        <div  className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                            <h2 className="heading-page3 mt-4">Let's take a look at some of our prestigious work on web development services in Pakistan.</h2>
                        </div>
                        <div className="col-2"></div>

                        <div  className="col-xs-12 col-sm-12 col-md-8 col-lg-8 text-center">
                            <p className="BlogPage-Text py-3">
                            The website gives a brand to the business and identity on its own. A website is a digital house in which its development and design fall. ExpoBird will provide your business with custom website development services and UI/UX services that will differentiate your website from your competitors in Pakistan. We are among the top web developers and UI/UX designers in Pakistan who believe in innovative and dynamic layouts to make your site extremely interactive. You can trust our web development services in Pakistan and design services since all of us are skilled in our job, and thanks to that, we can provide the top quality Web development services.
                            </p>
                            <Link to="/contact-us" ><button className="services-cta mt-3 mb-5">SET UP A WEBSITE WITH EXPOBIRD</button></Link>
                        </div>
                        <div className="col-2"></div>

                    </div>
                </div>
                </div>
                <Portfolio
                        image={PortfolioImage}
               />
                <div className="container testi-margin">
                    <div class="row text-center text-lg-left">

                        <div  class="col-12 col-sm-12 col-md-12 col-lg-6  mb-5">
                                <h2 className="heading-page">Our Services For Website Development</h2> 
                                <h3 className="Webdev-Text py-3 ">ExpoBird expertise in web development services in Pakistan. Explore more website development solutions with Expobird.</h3>
                                <ul >
                                    <li >Business Website</li>
                                    <li>Custom Website</li>
                                    <li>Ecommerce Website</li>
                                    <li>Progressive Website </li>
                                </ul> 
                                <Link to="/contact-us" ><button class="services-cta mt-3 mb-5f">Schedule a Call</button></Link>   
                                <Link to="/case-study" ><button class="services-cta mt-3 mb-5f mx-2 mx-sm-2">See Our Work</button>      </Link>    
        
                        </div> 
                            <div  class="top2 col-12 col-sm-12 col-md-12 col-lg-6 mb-5 mt-5">
                                <img  className="slight-br ChooseImg mt-5 align-items-center" src={Cta1}/>
                            </div>

                    </div>
                </div>
                <div className="container">
                    <div className="row testi-margin text-center text-lg-left">
                        <div   class="col-12 col-sm-12 col-md-12 col-lg-6  order-12 order-md-12 order-lg-1 order-xl-1 order-sm-12 mt-4 mt-lg-0">
                                <img src={Image5}  className="slight-br ChooseImg mt-5 align-items-center"/>
                        </div>
                
                        <div  class="col-12 col-sm-12 col-md-12 col-lg-6 order-1 order-md-1 order-lg-12 order-xl-12 order-sm-1">
                                <h2 className="heading-page">Underperforming Web development</h2> 
                                <p class="margin-bottom8 p-style pt-3 ">It will be harrowing if your website is not performing well as your website is an identity of your brand. Also, it will affect the overall performance of the website. For removing your pain, ExpoBird will do your website development. After connecting with us, you have to think only of the product making process and leave everything about the website to ExpoBird. We provide exceptional web development services in Pakistan. ExpoBird is a leading WordPress development company in Pakistan. Everybody likes a beautiful theme. A beautiful eCommerce website development services matching up with your field of work is a must to attract your visitors and turn them into your customers. We set exceptional themes that relate to your businesses and blogs or whatever your website is made for. It makes your website responsive and compatible.</p>
                                    <Link to="/contact-us" ><button className="services-cta  mb-5f">SignUp</button>     </Link>     
                        </div>


                        
                    </div>
                </div>


                
                        <div className="row mt-5 ">
                            <div className="col-12 text-center ch mt-5 seo-cta">
                                <h2 className="text-white fw lets-work mb-3">Start A Conversation</h2>
                                <p className="text-white pTag">Increase your sales by 80% by having a progressive web app for a WordPress website or an ecommerce website development of your product or brand. Online Marketing has taken growth if you are not making a step forward, you will be lost somewhere in the market. </p>
                                <Link to="/contact-us"><button className="white-btn mt-3">Schedule a Call</button></Link>
                                {/* <div className="wave-image">
                                    <img src={bannerImg}   alt=""/>
                                </div> */}
                                <div id="seo-cta-pink">
                                    <img src={pink} alt="Pentagon Image"/>
                                </div>
                            </div>
                        </div>
                        <Testimonials/>
                        <AnimatePopup
                        // text1="So what’s your next move?"
                        heading1="We are passionate about solving ecommerce website development problems and give you viable solutions for WordPress development services that will save you money. Are you interested in doing things right and solidifying your structure?"
                        button1="Set up a meeting"
                        />

                        <div className="row testi-margin">
                            <div className="col-12">
                                <h2 className="text-center heading-page mb-5">FAQ's</h2> 
                            </div>
                            <div className="col-1"></div>
                            <div className="col-10">
                                <Accordion title="For starting a project do we need to meet face to face to discuss something about the project?" desc="If you are anywhere in Karachi, we can meet. But our services are offered to the whole nation. If you're in another city, projects can be discussed on call or skype or anything you like for meeting.
                                Our web development services in Pakistan are: 

                                WordPress development services,
                                Magento web development services,
                                Shopify web development services,
                                Business website development services,
                                Custom website development services,
                                Progressive website development services,
                                Ecommerce website development services
                                
                                "/>
                                <br/>
                                <Accordion title="How does it cost in an ecommerce website development?" desc="The most popular questions we are asked. But its answer is complicated. Whether its WordPress development, Magento web development services And, Shopify web development services usually, the cost depends on your website. Which type of website do you want?  Each client and website is different, so it is based on a client's perspective: you get what you pay for."/>
                                <br/>
                                <Accordion title="What is Website Hosting?" desc="It is a service to keep your website online, although it is also considered to be essential for many businesses as the growth chances increase and lead to more success."/>
                                <br/>
                                <Accordion title="Editing can be done once the website is ready?" desc="Of course, it is necessary because sometimes a website can break, and bug issues arise so it can be edited at any time. And more importantly, for keeping your ecommerce website development updated, you do have to update the website. Also, we ensure clients manage their site to fix issues regularly and timely.  Management of ecommerce website development can be done by ExpoBird if you are trusting as we manage our trusted client website. As we are working with Magento web development services, Shopify web development services, and progressive web apps for WordPress so we have a plentiful experience to keep updated the websites for anything whether content or new inventory."/>
                                <br/>
                                <Accordion title="Do you write the content of a website?" desc="Yes, Our team is multi-skilled. Whether it's development, writing, or designing, we offer all services. You will get everything at one step"/>
                                <br/>
                                <Accordion title="With the development tools and tools available on the internet, anyone with no experience in web development of progressive web apps for WordPress or simple ecommerce web development can create websites and have them ready to go in just a few minutes. So what exactly do professionals at web development firms offer?" desc="We offer top-of-the-line web development services in Pakistan and worldwide development solutions, utilizing the most current methods and tools for development to ensure that your site's design and layout not just attract more people but draws them in to come back frequently. Web development experts can transform your business's ideas into creative and easy-to-use websites that help you communicate with your clients in the most effective manner."/>
                                
                                
                            </div>
                            <div className="col-1"></div>
                        </div>
                        <ContactFormFooter/>
                        <div className="container">
                            <Link to="/">Home</Link>  &#xbb; <Link to="/web-development">Web Development</Link>
                        </div>
            </div>
        )
    } 
}