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
import Banner from '../pages/banner'
import  portfolioCover from '../../assets/portfolio cover.jpg'
import DigitalMarketing2 from '../../assets/Digital Marketing.png'
import EmailMarketing from '../../assets/Email marketing.png'
import SearchEngineOptimisation from '../../assets/Search Engine Optimisation.png'
import SocialMediaMarketing from '../../assets/Social Media Marketing.png'
import WebContant from '../../assets/Web contant.png'
import Accordion from '../ui/Accordion'
import {Link} from "react-router-dom";
import HelmetWrapper from '../Helmet';
import { Helmet } from 'react-helmet';
import Fade from 'react-reveal/Fade'
import Wakeup from '../../assets/Wake up.png'
import ReadMoreReact from 'read-more-react';
import Video from '../../assets/seo.mp4'

const makeMuted = (elt) => {
    if (elt) {
      elt.muted = true;
    }
  };
export default class DigitalMarketing extends Component{
    componentDidMount() {
        window.scrollTo(0, 0)
      }
    render(){
        return(
            <div>
                <Helmet>
                    <title> Best Digital marketing services in Pakistan 2022 | Expobird</title>
                    <meta name="description" content="Expobird provides Best digital marketing services in Pakistan 2022. Call us & improve online visibility, brand exposure, unique identity, and revenue."/>
                    <meta name="keywords" content="Online Marketing, Digital Marketing Service, Best Digital Marketing Agency in Pakistan, Best Digital Marketing Company in Pakistan" />
                    <link rel="canonical" href="https://www.expobird.com/digital-marketing" />
                   
                </Helmet>
                {/* <Banner 
                    title1={'Best Digital Marketing Agency In Karachi'}
                    desc1="Create endless opportunities for your business in Karachi and across Pakistan through Digital Marketing with ExpoBird."
                    Video={Video}
                    alt1="Online Marketing Agency in Karachi. Quality animated video production service"
                /> */}
                <div className="row bnr align-items-center ">
                    <div className="container">
                        <div className="row">
                                <div className="col-12 col-sm-12 col-md-12 col-lg-6 order-12 order-md-12 order-lg-1 order-xl-1 order-sm-12  d-flex justify-content-lg-left align-items-center justify-content-center ">
                                    <div className="heading-text" >
                                        <h1 id="heading-main">Best Digital Marketing Agency In Karachi</h1>
                                        <h2 className="py-3"id="sub-text">Create endless opportunities for your business in Karachi and across Pakistan through Digital Marketing with ExpoBird.</h2>
                                        <Link to="/contact-us">
                                        <button className="rf mt-1">
                                            Get Started
                                        </button>
                                        </Link>
                                    </div>
                                </div>
                    
                                <div className="col-12 col-sm-12 col-md-12 col-lg-6 mb-5 mb-lg-0 order-1 order-md-1 order-lg-12 order-xl-12 order-sm-1 text-center">
                                    <video ref={makeMuted} loop autoPlay alt="Online Marketing Agency in Karachi. Quality animated video production service" className="main-video" style={{boxShadow : 'none'}}>
                                        <source src={Video} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <Link to="/">Home</Link>  &#xbb; <Link to="/digital-marketing">Digital Marketing</Link>
                </div>
               
                 <ServiceSectionTitle
                        title="Digital Marketing Services" SubHeading="Our Best Digital Marketing Agency in Karachi services provide a wide range of solutions to businesses of all types in Karachi and across Pakistan"
                        button="See Our Work " 
                    />
                    <ServiceSection
                        image1={SocialMediaMarketing} 
                        alt1="Social Media Marketing"
                        title1="Social Media Marketing" 
                        desc1="Get our best social media marketing services for boosting up your brand or business. We are only one step back. Call us to arrange a meeting with our online marketing experts if you want to get more knowledge about the SMM services of ExpoBird." 

                        image2={WebContant}
                        title2="Website Content" 
                        alt2="Web Development"
                        desc2="You don't need to worry if you don't have the time or desire to learn these tips and create quality content. We'll ensure your website has well-organized, optimized content and conveys the message you wish to share. Contact us to get started creating amazing content for your website!"/>
                    <ServiceSection 
                        image1={SearchEngineOptimisation} 
                        title1="Search Engine Optimisation"
                        alt1="Search Engine Optimization" 
                        desc1="We help you rank on the top with proven and tested SEO techniques all over Pakistan. There can never be a right time to advertise your product or service on social media than now. You are playing your cards wrong if you have not considered going online yet. "
                         
                        image2={EmailMarketing} 
                        title2="Email Marketing" 
                        desc2=" Every business wants more leads and conversions. Email Marketing is the best way to interact with potential customers. It is also cost-effective and the most efficient online marketing channel. ExpoBird the best internet marketing agency can help you create email campaigns that work for your business and generate leads."
                        alt2="Email Marketing"
                    />
                    <Fade bottom>
                        <ClientSection/>
                    </Fade>
                <Portfolio
                    image={portfolioCover} 
                    subheading1="Let’s take a roller-coaster ride to our work for clients from all across Pakistan"   
                />
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


                        
                </div> */}
                                    <div className="container">

                                        <div className="row  testi-margin">
                                            <div className="col-1"></div>
                                                    <div className="col-10  text-center">
                                                        {/* <h1 className="heading-page ">Exposure of Designs</h1> */}
                                                        <h2 className="mt-4 layout-heading">Let us help you maximize the conversion rate for your business with best Internet Marketing Services</h2>
                                                        <p className="pTag">Are you worried about the dramatic drop in your conversion rate when your competitors are enjoying high profits? If this is the case, then let us tell you that there is no need to panic about it anymore. ExpoBird as your digital marketing agency in Karachi will help you design and execute a sales funnel that will convert your leads into paying customers. Online Marketing services are expected to outspend traditional advertising in 2020. So how do you choose where to spend your budget with so many advertising options, including search, display, social media, connected TV, and digital audio? ExpoBird, the best 
                                                        <Link to="/social-media-marketing">
                                                            <span className="mx-1 p-style" style={{fontWeight : 600}}>
                                                                social media marketing company in Pakistan 
                                                            </span>
                                                        </Link>
                                                            can help!
                                                        </p>
                                                        
                                                        <div>
                                                        {/* <Link to="/contact-us"><button className="services-cta mt-3">You think we mades</button></Link> */}
                                                        <a href="tel:+92-330-2033334"><button className="services-cta mt-3 mx-3">Learn More</button></a>
                                                        </div>
                                                    </div>
                                            <div className="col-1"></div>
                                        </div>
                                        <div className="row testi-margin justify-content-between ">

                                        <div   className="col-12 col-sm-12 col-md-12 col-lg-6 text-center text-lg-left mt-4">
                                                <img src={DigitalMarketing2} alt="Best Digital Marketing Agency In Karachi, Leading Digital Marketing Agency, Online Marketing, Best Internet Marketing" className="slight-br  ChooseImg"/>
                                        </div>

                                        <div  className="heading-page-2 col-12 col-sm-12 col-md-12 col-lg-6 text-center text-lg-left mt-4 mt-lg-0">
                                                {/* <h2 className="heading-page">What is Digital Marketing For ExpoBird</h2> */}
                                                <h2 className="mt-4 layout-heading">Fulfill All Your Marketing Needs With Best Digital Marketing Agency in Karachi at your Reach</h2> 
                                                <p className="margin-bottom8 p-style py-3 ">
                                                <ReadMoreReact text="Online Marketing is the process of buying and selling goods or services through the internet. Word of mouth plays a vital role in connecting customers with the service provider. The rich experience of ExpoBird uniquely fulfils all your needs to cater to your marketing goals. Online Marketing gives you access to 95% of people who use online platforms. You can target people at different stages of their shopping process with digital advertising. You can reach people earlier to get on their list of considerations. You can also target them when they are ready for purchase. It is precise and trackable, which is why it is a favourite among businesses."
                                                readMoreText="Read More"   /> 
                                         
                                                </p>
                                                <Link to="/contact-us"><button className="services-cta mt-3 mb-5f">Schedule a call </button>     </Link>     
                                        </div>
                                    </div>
                                </div>
                    <AnimatePopup
                            text1="So what’s your next move?"
                            heading1="Ready to grow your business and drive sales up to 3X? Let’s do this together"
                            button1="Setup a meeting"
                        />
                <div className="container ">
                    <div className="row3 row-container testi-margin" >
                        <div className="row2 center-align-columns card"  >

                            <div  className="col-12 col-sm-12 col-md-12 col-lg-6 text-center py-4  "style={{display : 'flex' , alignItems : 'center'}}>
                                <div> 
                                    <img className="slight-br ChooseImg" src={Wakeup} alt="Best Digital Marketing Agency In Karachi, Leading Digital Marketing Agency, Online Marketing, Best Internet Marketing"/>
                                </div>
                            </div>
                            <div  className=" col-12 col-sm-12 col-md-12 col-lg-6 text-center text-lg-left py-4 pr-4">
                                <h3 className="small-heading" >Implement the efficient best internet marketing strategy with ExpoBird</h3> 
                                <p className="p-style">
                                Let’s make a productive best internet marketing strategy with a
                                <Link to="/search-engine-optimization">
                                    <span className="mx-1 p-style" style={{fontWeight : 600}}>
                                        Search Engine Optimization Company in Pakistan
                                    </span>
                                </Link>                             
                                that helps you boost your sales and overall business growth with us. Monitor the results on a daily basis and make sound decisions based on the given statistics. Digital advertising seamlessly integrates into your audience's user experience. Online marketing guides your audience to your products and services in a natural, engaging way. Personalizing your digital advertisement to best suit your customer will increase its effectiveness and convert more customers. These ads can also be tracked by you at every stage of the customer's buying journey, as they are digital.

                                {/* <ReadMoreReact text="Let’s make a productive best internet marketing strategy that helps you boost your sales and overall business growth with ExpoBird. Monitor the results on a daily basis and make sound decisions based on the given statistics. Digital advertising seamlessly integrates into your audience's user experience. Online marketing guides your audience to your products and services in a natural, engaging way. Personalizing your digital advertisement to best suit your customer will increase its effectiveness and convert more customers. These ads can also be tracked by you at every stage of the customer's buying journey, as they are digital." readMoreText="Read More"   /> */}
                                </p>
                                <Link to="/contact-us">
                                    <button  className="rf">Set up a meeting</button>
                                </Link>     
                            </div> 
                        
                        </div>
                    </div>
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
                                <Accordion title="Why hire us as your Best Digital Marketing Agency in Karachi?" desc="Like most of the time, you have a thing in your mind but you can’t convey it to the audience and deliver in the right direction. This is where we come in. We make sure that your business ideas are turned into reality by reaching the right audience and converting them into actual customers. ExpoBird is a leading digital marketing agency that offers a complete range of services. We are a top-rated best internet marketing agency and have a lot of experience to help our clients achieve the best results. We are experts in social media, and we ensure that clients have a positive, meaningful relationship. With decades of advertising experience, we can deliver excellent results that will make your business more attractive, increase traffic to your site, improve sales, and boost conversions. Our Best Internet Marketing specialists use these core strategies to convert leads into sales and conversions."/>
                                <br/>
                                <Accordion title="What services do you offer in Digital Marketing?" desc="Facebook Marketing, Instagram Marketing, WhatsApp Marketing, Email Marketing, Search Engine Optimisation (SEO), Keyword Optimisation, Website Content, Blog Writing, URL Optimisation, Internal link building, Product Description, Backlinks"/>
                                <br/>

                                <Accordion title="Does digital marketing take a long time to work?" desc="This often depends upon the type of service you choose. For example, it won’t be fair to compare the results of Facebook Marketing with that of Search Engine Optimisation (SEO). This is because both of them have a different set of rules which take different time frames to actually work out. Online marketing is more than simply posting a tweet or a Facebook ad. Digital Marketing services include the use of specialized tools to track, analyze and monitor your online advertising campaigns."/>
                                <br/>
                                <Accordion title="When do the results of online marketing reflect back?" desc="Ads on social media have great potential. The response from the audience for such ads is overwhelming. However, most of it depends on the type of industry you work in and the product or service you sell. For example, the results of a company selling mobile phones or cosmetics on Facebook cannot be compared with another company selling flats or generators. Online Marketing refers to the publishing of ads on websites, search engines, and social media. This allows you to reach targeted audiences in specific areas with less cost than traditional methods. Your hired ExpoBird consultant will be able to interact directly with your clients via the internet. This allows you to keep up-to-date on market trends and other requirements. Online  marketing will enable you to see both standard and advanced metrics quickly, with easy-to-understand and actionable reports. You can track all ads that are being activated. Do you want to be more focused on your business? Our marketing experts can manage your ads campaigns. You can access our website. "/>
                                <br/>
                                <Accordion title="How will you offer your service in other cities when you are based in Karachi?" desc="We have a strong virtual base in other cities of Pakistan like in Lahore, Peshawar, and Islamabad. Having the internet all the time makes communication easier and programmable in every part of the country. Our Best Internet Marketing specialists use these core strategies to convert leads into sales and conversions. You have global reach and optimal access to high-quality inventory from around the globe through best internet marketing services. You can reach clients worldwide with online marketing."/>
                                <br/>
                                
                                
                            </div>
                            <div className="col-1"></div>
                        </div>
                        <ContactFormFooter/>
                        <div className="container">
                            <Link to="/">Home</Link>  &#xbb; <Link to="/digital-marketing">Digital Marketing</Link>
                        </div>
            </div>
        )
    }
}