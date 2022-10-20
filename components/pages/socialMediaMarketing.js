import React, { Component } from 'react';
import '../pages/socialMediaMarketing.css'
// import Image4 from '../../assets/image4.svg'
import ClientSection from '../clients'
// import banner from '../../assets/digital-marketing-banner.jpg'
// import Video from '../../assets/expobird-video.mp4'
// import Cta from '../../assets/divi-preview.jpg'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faPlay} from '@fortawesome/free-solid-svg-icons'
// import marketing01 from '../../assets/marketing-01.jpg'
// import marketing02 from '../../assets/marketing-02.jpg'
// import marketing03 from '../../assets/marketing-03.png'
// import marketing04 from '../../assets/marketing-04.jpg'
import ServiceSection from '../Services-section'
import ServiceSectionTitle from '../Services-section-title'
import Cta1 from '../../assets/launch-fast-large.jpg'
import AnimatePopup from '../animatePopup'
import Testimonials from '../testimonials'
import ContactFormFooter from '../ContactFormFooter'
// import Portfolio1 from '../../assets/Social Media Portfolio-01.png'
// import Portfolio2 from '../../assets/Social Media Portfolio-02.png'
// import Portfolio3 from '../../assets/Social Media Portfolio-03.png'
// import Portfolio4 from '../../assets/Social Media Portfolio-04.png'
import image1 from '../../assets/builders & developer.png'
import image2 from '../../assets/clothing-and-fashion.png'
import image3 from '../../assets/e-commerce-stores.png'
import image4 from '../../assets/mobile-brands-and-accessories.png'
import image5 from '../../assets/restaurants-and-fast-food-chains.png'
import image6 from '../../assets/small-and-medium-sized-enterprises.png'
import reward from '../../assets/reward.png'
import Wakeup from '../../assets/Wake up.png'
import facebook from '../../assets/facebook-icon.png'
import whatsapp from '../../assets/whatsapp-icon.png'
import instagram from '../../assets/instagram-icon.png'
import pinterest from '../../assets/pinterest-icon.png'
import standOut from '../../assets/stand-out.png'
import CtaFourth from '../pages/cta-fourth'
// import Circle2 from '../../assets/circle2.svg'
import Banner from '../pages/banner'
import {Link} from "react-router-dom";
// import HelmetWrapper from '../Helmet';
import { Helmet } from 'react-helmet';
import Accordion from '../ui/Accordion';
import Fade from 'react-reveal/Fade'
import standout from '../../assets/stand-out.png'
import design from '../../assets/iccamulate design.png'
// import SmartComponent from '../smcomponent';
import Video from '../../assets/social-media-marketing.mp4'


export default class SocialMediaMarketing extends Component{
    
    componentDidMount() {
        window.scrollTo(0, 0)
      }

      constructor(props){
        super(props);
        this.HandleClick = this.HandleClick.bind(this)
        this.state = {
            img : Wakeup,
            text : ''
        }
    }
    HandleClick = (image,text) => {
        
        this.setState({
            img : image,
            text: text
        })
    }

    render(){
        return(
            <div> 
                <Helmet>
                    <title>Top social media marketing in Pakistan | social media agency</title>
                    <meta name="description" content="ExpoBird, Social media Agency provide Best Social media marketing in Pakistan & Globally. Get professional social media marketing services in 2022"/>
                    <meta name="keywords" content="Top, Social Media Marketing, Digital Marketing, Web Development, eCommerce website, Magento eCommerce, Amazon Marketing, Amazon FBA, Progressive Web Application, PWA, Search Engine Optimization (SEO), Video Production, Corporate Video Production, Leading Marketing Agency, ExpoBird, Karachi, Pakistan, Digital Marketing Agency, SMM, Video Animation" />
                    <link rel="canonical" href="https://www.expobird.com/social-media-marketing" />

                </Helmet>
                <Banner 
                title1={'Social Media Marketing Company in Pakistan'}
                desc1="Power up your brand with top social media marketing agency in Pakistan "
                Video={Video}
                alt1="Top, Social Media Marketing, Digital Marketing, Web Development, eCommerce website, Magento eCommerce, Amazon Marketing, Amazon FBA, Progressive Web Application, PWA, Search Engine Optimization (SEO), Video Production, Corporate Video Production, Leading Marketing Agency, ExpoBird, Karachi, Pakistan, Digital Marketing Agency, SMM, Video Animation"
                />
                <div className="container">
                    <Link to="/">Home</Link>  &#xbb; <Link to="/social-media-marketing">Social Media Marketing</Link>
                </div>

                <ServiceSectionTitle
                        title="Sub-Services"
                        SubHeading="ExpoBird offers all types of advertising or marketing services for 
                        social media in Karachi and Pakistan. So geared up with 
                        ExpoBird and have everything on one platform."
                        button="More Services" 
                />
                <ServiceSection 
                    image1={facebook}
                    title1="Facebook Marketing" 
                    desc1="Make the most out of 1.62 million daily active users on Facebook and grab it all." 
                    alt1="social media marketing in pakistan, social media marketing agency, social media marketing agency in pakistan, social media marketing services"
                    
                    image2={instagram}
                    title2="Instagram Marketing" 
                    desc2="Turn your audience crazy with mind blowing stories on Instagram and win the heart of all."
                    alt2="social media marketing in pakistan, social media marketing agency, social media marketing agency in pakistan, social media marketing services"
                />
                <ServiceSection 
                    image1={whatsapp}
                    title1="WhatsApp Marketing" 
                    desc1="Market your product with outstanding catalogue through WhatsApp business and book more orders than ever before."
                    alt1="social media marketing in pakistan, social media marketing agency, social media marketing agency in pakistan, social media marketing services"
                    
                    image2={pinterest}
                    alt2="social media marketing in pakistan, social media marketing agency, social media marketing agency in pakistan, social media marketing services"
                    title2="Pinterest Marketing" 
                    desc2="Now share images and keep save so share for longer. Other features to activate your social media by GiFs and short video."
                />

                <Fade bottom>
                    <ClientSection/>
                </Fade>
                
            


            <div className="container testi-margin">
                <div className="row3 row-container" >
                    <div className="row2 center-align-columns card"  >

                    <div  className="margin-top col-12 col-sm-12 col-md-12 col-lg-6 text-center text-lg-left order-12 order-md-12 order-lg-1 order-xl-1 order-sm-12">
                            <h2 className="heading-page" >WAKE UP !</h2> 
                             <p className="p-style">There can never be the right time to advertise your product or service on social media than now. You are playing your cards wrong if you have not considered going online yet. When everyone in your family and around you is making decisions based on what they learn on the internet, especially social media, then don't you think your target audience is doing the same. So stop wasting your time and set up a meeting for social media marketing services
                             </p>
                             <Link to="/contact-us"><button  className="rf">Set up a meeting</button>     </Link>     
                    </div> 
                    
                    <div  className="col-12 col-sm-12 col-md-12 col-lg-6 text-center mt-5 py-4  order-1 order-md-1 order-lg-12 order-xl-12 order-sm-1">
                            {/* <div> 
                                <img className="wake-up-image" src={Wakeup} alt=""/>
                            </div> */}
                            <div> 
                                <img className="slight-br ChooseImg" src={Wakeup} alt="social media marketing in pakistan, social media marketing agency, social media marketing agency in pakistan, social media marketing services"/>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div className="container testi-margin">
                <div className="row">
                    <div className="col-12 col-md-2 col-lg-2 "></div>
                    <div className="col-12 col-sm-12 col-md-8 col-lg-8 mt-3">
                            <h2 class="heading-page3" >Social Media Marketing is for industries of all types 
                            in Karachi and across Pakistan</h2>
                    </div>
                    <div className="col-12 col-md-2 col-lg-2 "></div>
                </div>
                
                <div className="row text-center text-sm-left">
                    <div  className ="box col-12 col-sm-6 col-lg-4 mt-4 p-4">
                                <div class="margin-top1">

                                    <img src={image1} alt="social media marketing in pakistan, social media marketing agency, social media marketing agency in pakistan, social media marketing services"/>
                                    <h3 class="h3-style "><br/>Builders and Developers</h3>
                                    <p class="p-style ">All builders and developers in Karachi and Pakistan have a strong profile. This is primarily one of the reasons why you need to have a strong presence for social media advertising. With ExpoBird as your social media marketing agency in Pakistan, you can reach out to millions of prospects for your flats, apartments, villas, and double-story units, etc.</p>
                                </div>
                    </div>
                    <div  className ="box col-12 col-sm-6 col-lg-4 mt-4 p-4 ">
                                <div class="margin-top1">

                                    <img src={image2} alt="social media marketing in pakistan, social media marketing agency, social media marketing agency in pakistan, social media marketing services"/>
                                    <h3 class="h3-style "><br/>Clothing and Fashion</h3>
                                    <p class="p-style ">All brands are selling their apparel on social media like hotcakes. Irrespective of their page likes, they are now of the opinion that their survival now relies more on online shopping stores than retail outlets. A recent upward shift in online purchasing from different stores denotes that social media marketing in Pakistan is the only in hand solution that can take your brand to the next level. Contact the top social media agency ExpoBird today to have an appealing social media marketing services presence that reaches to masses all over Karachi and across Pakistan.</p>
                                </div>
                    </div>
                    <div  className ="box col-12 col-sm-6 col-lg-4 mt-4 p-4">
                                <div >
                                    <img src={image5} alt="social media marketing in pakistan, social media marketing agency, social media marketing agency in pakistan, social media marketing services"/>
                                    <h3 class="h3-style "><br/>Restaurants and Fast Food Chains</h3>
                                    <p class="p-style ">Give me one name that is not on Facebook. You will not find a single restaurant that has not created an online profile for their advantage. And why not? Fast-food chains and restaurants have a very strong customer base. Word-of-mouth marketing is its strongest weapon for social media advertisements. Foodies and passionate lovers now order more from home or any other place than actually dining-in on the basis of reviews and comments made public on social media. For this reason, you have to have an online presence by social media marketing in Pakistan that can take your brand name beyond expectations. Why not set up a meeting today and reap the benefits of the industry that is booming in Karachi and across Pakistan?</p>
                                </div>
                    </div>
                    <div  className ="box col-12 col-sm-6 col-lg-4 mt-4 p-4 ">
                                <div class="margin-top1">
                                    <img src={image3}/>
                                    <h3 class="h3-style "><br/>E-commerce Stores</h3>
                                    <p class="p-style ">As you also know that now more and more businesses have entered into online shopping stores. They are spending heavily on having their own ecommerce store rather than relying on someone else. Number one reason is people now order more products from home than any other way. Seeing this charm of online medium, they have found themselves in a win-win situation for their businesses in Pakistan. Recent economical changes all around the world, investors in Pakistan now feel that this is the right time to capture the market share not only in Pakistan, but also beyond the continents. If you are one of those with sufficient capital, ring us a bell.  We will help you to connect with customers from all around the world where your local brand will be transformed into an international one.</p>
                                </div>
                    </div>
                    <div  className ="box col-12 col-sm-6 col-lg-4 mt-4 p-4">
                                <div class="margin-top1">

                                    <img src={image6} alt="social media marketing in pakistan, social media marketing agency, social media marketing agency in pakistan, social media marketing services"/>
                                    <h3 class="h3-style "><br/>Small and Medium Sized Enterprises</h3>
                                    <p class="p-style ">If you ask us what is the best time to go digital, we would say it is NOW! And we will also say it is Now or Never. When everyone around you is on Facebook, Instagram, and WhatsApp, what is stopping you from having your online presence. Is it the budget? Is it the fear of going online? Is it the dynamics of social media? What is it? With ExpoBird as your social media marketing agency in Karachi and across Pakistan, you do not need to worry for anything. We have got your back all the time. Instead, we do it all in your budget. So what else do you want? Call us now and set up a meeting because your online prospects are waiting for you.</p>
                                </div>
                    </div>
                    <div  className ="box col-12 col-sm-6 col-lg-4 mt-4 p-4">
                                <div >

                                    <img src={image4 } alt="social media marketing in pakistan, social media marketing agency, social media marketing agency in pakistan, social media marketing services"/>
                                    <h3 class="h3-style "><br/>Mobile Brands and Accessories</h3>
                                    <p class="p-style ">In the last few years, we have witnessed many entrepreneurs introducing new smartphones in collaboration with different investors. These emerging brands set a very high budget for social media marketing services all across Pakistan. They know that this is the easy and only way where they can directly get connected with potential customers. They create hype for their brands by making mind-boggling videos that touch the sentiments of the target audience. We, being the leader of social media Marketing agency in Pakistan, will create videos that will turn your audience crazy for your brand. Schedule a call now and let’s move ahead.</p>
                                </div>
                    </div>

                </div>

                        <div className="row testi-margin">

                            <div   class="col-12 col-sm-12 col-md-12 col-lg-6 text-center text-lg-left">
                                    <img className="slight-br ChooseImg" src={reward} alt="social media marketing in pakistan, social media marketing agency, social media marketing agency in pakistan, social media marketing services"/>
                            </div>

                            <div  class="col-12 col-sm-12 col-md-12 col-lg-6 text-center text-lg-left mt-4 mt-lg-0 ">
                                    <h2 class="heading-page ">REWARD</h2> 
                                    <p class="margin-bottom8 p-style ">
                                    When you have done all right with ExpoBird as your partner, your business will experience 
                                    numerous benefits. High conversion rate, most engagements, increase in ROI, more demand for your product are few to name.This will be the time where you scale up and go to the next level all over Pakistan. So leave us a message now to enjoy 
                                    such economies of scale.
                                    </p>
                                    <Link to="/contact-us"><button className="services-cta mt-3 mb-5f">Lets Get Started </button>     </Link>     
                            </div>
                        </div>
            
                {/* <div className="row">
                        <div className="col-md-1 col-lg-1"></div>
                        <div  id="marketing-image-collage"   class="col-xs-12 col-sm-12 col-md-5 col-lg-5 image-collage">
                                <img class="image1" src={marketing01}/>
                                <img class="image2" src={marketing02}/>
                                <img class="image3" src={marketing03}/>
                                <img class="image4" src={marketing04}/>
                        </div>
                
                        <div  class="heading-page-2 col-xs-12 col-sm-12 col-md-5 col-lg-5 mt-5 ml-4">
                                <h1 class="h1-style  heading-page ">Reward</h1> 
                                <p class="margin-bottom8 text-secondary p-style ">When you have done all right with ExpoBird as your partner, your business will experience 
                                    numerous benefits. High conversion rate, most engagements, increase in ROI, more demand for your product are few to name.
                                    This will be the time where you scale up and go to the next level all over Pakistan. So leave us a message now to enjoy 
                                    such economies of scale.</p>
                                <button className="rf">Lets Get Started</button>          
                        </div>
                        <div class="col-md-1 col-lg-1"></div>

                        </div> */}
                </div>
                


                    <CtaFourth className="cta-image-right"
                        heading="Stand Out !!!"
                        subheading="Now is the time to distinguish your brand and capture high market share with our social media marketing agency"
                        paragraph="Our team at ExpoBird is well-versed with the needs and wants of brands for social media marketing and digital marketing. This will allow you to classify your niche in the right direction and earn a greater market share for your product or service."
                        image={standOut}
                        button="Let’s discuss the project"
                        alt1= "social media marketing in pakistan, social media marketing agency, social media marketing agency in pakistan, social media marketing services"
                    />
                        <AnimatePopup
                        heading1="Be a part of our community and find more success with ExpoBird. You can accelerate your business up to 3x with well-planned marketing strategy"
                        button1="Schedule a Call"
                        />
                        {/* <div className="container testi-margin">
                            <div className="row">
                                    <div className="col-12 col-md-2"></div>
                                    <div className="col-12 col-md-8 text-center">
                                                <h4>Let us help you maximize conversion rate for your<br/>
                                                business with Digital Marketing</h4>
                                    </div>
                                    <div className="col-12 col-md-2"></div>
                                    <div className="col-12 col-md-2"></div>
                                    <div className="col-12 col-md-8 text-center">
                                        <p className="p-style">
                                        Are you worried about the dramatic drop in your conversion rate when your competitors are enjoying 
                                        high profits? If this is the case, then let us tell you that there is no need to be panic about it anymore. 
                                        With ExpoBird as your digital marketing company, we will help you design and execute a sales funnel 
                                        that will convert your leads into paying customers. 
                                        </p>
                                        <Link to="/contact-us"><button className="services-cta mt-3 mb-5">Learn More</button>
                                        </Link>
                                    </div>
                                    <div className="col-12 col-md-2"></div>

                            </div>
                        </div> */}



                        <div class="rf-steps  margin-top3 mt-5" id="steps">
        <div class="rf-container ">
            <h2 class="rf-heading rf-35 white">Our Work Process </h2>
            <div class="line skyBlue"></div>
            <div class="rf-steps-container rf-en">
                <div class="rf-divider height-animation" id="rf-divider"></div>
                <div class="rf-row">
                    <div class="rf-col rf-col-1 rf-right-step1 start-animation" id="rf-right-step1">
                        <p class="rf-descr rf-18 white mobile-text">Understanding client’s needs and goals for our service.</p>
                        <div class="rf-round right">1</div>
                        <span class="rf-num rf-left">1</span>
                    </div>
                    
                    <div class="rf-col rf-col-2 rf-left-step3 start-animation" id="rf-left-step3">
                        <p class="rf-descr rf-18 white ">Taking assets from the clients such as logo, icons and other data necessary for our work.</p>
                        <div class="rf-round left mobile-text2">2</div>
                        <span class="rf-num rf-right">2</span>
                    </div>
                </div>
                <div class="rf-row">
                    <div class="rf-col rf-col-3 rf-right-step2 start-animation " id="rf-right-step2">
                        <p class="rf-descr rf-18 white mobile-text6">Our team go all out on the work expected from us by the client.</p>
                        <div class="rf-round right rf-top-allign mobile-text3">3</div>
                        <span class="rf-num rf-left mobile-text4">3</span>
                    </div>
                    <div class="rf-col rf-col-4 rf-left-step4 start-animation" id="rf-left-step4">
                        <p class="rf-descr rf-18 white">Delivery of artwork and publishing it on all social media platforms.</p>
                        <div class="rf-round left mobile-text5">4</div>
                        <span class="rf-num rf-right">4</span>
                    </div>
                </div>
                </div>
            </div>
        </div>

                    <div className="row my-5">
                        <div className="col-12 text-center mt-5 mb-5">
                            <h2 className='heading-page3'>Is your Social Media Marketing SMART?</h2>
                        </div>
                        <div className="col-12 col-lg-3 order-lg-1"></div>
                        <div className="col-12 col-lg-4 order-1 order-lg-2  text-center">
                            <img className='ChooseImg slight-br mb-4 mt-5' src={this.state.img} alt='social media marketing in pakistan, social media marketing agency, social media marketing agency in pakistan, social media marketing services' />
                            <p className="smartText text-center">{this.state.text}</p>
                        </div>
                        <div className="col-12 col-lg-2 order-12 order-lg-3 text-center text-lg-left">
                            <button className="Rounded-Rectangle-4 mb-3 text-left mx-3 mt-3" onClick={(image,text) => this.HandleClick(reward,'We work for clients that have specified goals matching our unique set of skills')}>
                                <button className="Ellipse-1 ml-4 mr-2">S</button>
                                    SPECIFIC
                                </button>
                            <button className="Rounded-Rectangle-4 mb-3 text-left mx-3 mt-3" onClick={(image,text) => this.HandleClick(standout,'Marketing goals are materially measured which is the client’s favorite.')}>
                                <button className="Ellipse-2 ml-4 mr-2">M</button>
                                    MEASURABLE
                                </button>
                            <button className="Rounded-Rectangle-4 mb-3 text-left mx-3 mt-3" onClick={(image,text) => this.HandleClick(design,'Your confidence in our service makes your target achievable.')}>
                                <button className="Ellipse-3 ml-4 mr-2">A</button>
                                    ACHIEVABLE
                                </button>
                            <button className="Rounded-Rectangle-4 mb-3 text-left mx-3 mt-3" onClick={(image,text) => this.HandleClick(standout,'Working together will motivate both the teams to reach common goals and objectives.')}>
                                <button className="Ellipse-4 ml-4 mr-2">R</button>
                                    REACH
                                </button>
                            <button className="Rounded-Rectangle-4 mb-3 text-left mx-3 mt-3" onClick={(image,text) => this.HandleClick(design,'Strike when the iron is hot. Your timing matters the most that will take you to the next level.')}>
                                <button className="Ellipse-5 ml-4 mr-2">T</button>
                                    TIMING
                                </button>
                        </div>
                        
                        <div className="col-12 col-lg-3 order-lg-4"></div>
                    </div>
      
        <Testimonials
        text="See what customers express about our services"
        />
        <div className="row my-5 ">
                            <div className="col-12">
                                <h2 className="text-center heading-page mb-5">FAQ's</h2> 
                            </div>
                            <div className="col-1"></div>
                            <div className="col-10">
                                <Accordion title="Why advertise on social network marketing?" desc="Not advertising on social media platforms would mean you have a very high chance to let your potential customers go to your competitors and end up losing high market share that you could turn in your favor otherwise."/>
                                <br/>
                                <Accordion title="Which Social media platform to use for advertisement?" desc="All the platforms. Be it Facebook, Instagram, or WhatsApp, you ought to have an online presence on every single platform. This will allow you to reduce your business risk."/>
                                <br/>
                                <Accordion title="How often posting shall be done on social media?" desc="ExpoBird offers different packages that deal with minimum or maximum posting schedules. The packages are client favorite because it shows the clear picture that makes up mostly every client's moods. Packages are hence offered because some businesses are just active and want to post on special occasions. Moreover, others want to be regularly active to increase their followers, sales and also propose their offers.etc."/>
                                <br/>
                                <Accordion title="Which Marketing platforms ExpoBird offers for advertisement?" desc="We offer Facebook Marketing, Instagram Marketing, WhatsApp Marketing"/>
                                <br/>
                                <Accordion title="Do I really need to run ads on social media?" desc="It is a fact that the use of social media is gradually increasing; to follow the lead and want to be on top, it becomes necessary to post an ad on social media. We can say that it's a worthy investment which has a fruitful return."/>
                                <br/>
                            </div>
                            <div className="col-1"></div>
                        </div>
        <ContactFormFooter/>
                        <div className="container">
                            <Link to="/">Home</Link>  &#xbb; <Link to="/social-media-marketing">Social Media Marketing
                            </Link>
                        </div>
                        <smartcomponent/>
            </div>
        )
    }
}