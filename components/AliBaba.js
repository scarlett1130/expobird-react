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
import Image from '../assets/image.svg'
import services1 from '../assets/services-1.gif'
import services2 from '../assets/video-production-expobird.gif'
import services3 from '../assets/video-animation-expobird.gif'
import services4 from '../assets/digital-marketing-expobird.gif'
import services5 from '../assets/web-development-expobird.gif'
import services6 from '../assets/social-media-expobird.gif'
import OnlineMarketing from '../assets/Online Marketing.svg'
import  mainvideo2 from '../assets/Why Choose us.mp4';
import HomepageBanner from './pages/homepageBanner';
import CtaOne from './pages/cta-one'
import CtaTwo from './pages/cta-two'
import CtaThree from './pages/cta-three'
import Stats from './pages/Stats'
import OnlineStore from'../assets/Online Store.mp4';
import competitivePricing from '../assets/competitive pricing.mp4';
import  portfolioCover from '../assets/portfolio cover.png';
import CtaVideo1 from '../assets/ctaVideo1.mp4';
import  CtaVideo2 from '../assets/ctaVideo2.mp4';
import  CtaVideo3 from '../assets/ctaVideo3.mp4';
import Modal from 'react-modal';
import ContactFormFooter from './ContactFormFooter';
import Fade from 'react-reveal/Fade';
import HelmetWrapper from './Helmet';
import {Helmet} from 'react-helmet';

const makeMuted = (elt) => {
    if (elt) {
      elt.muted = true;
    }
  };
export default class AliBaba extends Component{
    componentDidMount() {
        window.scrollTo(0, 0)
      }
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
                    <title>Top Digital Marketing Company | SEO Agency | SMM Service in Pakistan</title>
                    <meta name="description" content="ExpoBird is the top digital marketing company in Pakistan, specializing in Social Media Marketing, SEO, Digital Marketing, PWA, Magento, e-Commerce, Animation."/>
                    <meta name="keywords" content="Top Social Media Marketing, Digital Marketing, Web Development, eCommerce website, Magento eCommerce, Amazon Marketing, Amazon FBA, Progressive Web Application(PWA), Search Engine Optimization (SEO), Video Production, Corporate Video Production" />
                </Helmet>
                
                <HomepageBanner
                title1="Build Your Business Today "
                desc1="Grow your business on Amazon minimum effort at a lesser cost in a short time with our fully experienced team"
                />
                
                <ClientSection/>
                
                <Portfolio image={portfolioCover} />
                <ServicesTitle
                    title="Our Services" SubHeading="Our distinguished services provide valuable solutions for businesses in Pakistan"
                    button="Explore Hundreds of Services" 
                />
                <Services
                        image1={services6}
                        title1="Amazon FBA Asset Building:"
                        desc1="Get your company name out to the public at large using Social Media, Search Engines and other online marketing and digital marketing tools. The sky is the limit."
                        link1="/digital-marketing"
                        alt1="Digital Marketing"

                        image2={OnlineMarketing}
                        title2="Amazon FBA Wholesale"
                        desc2="Wholesale means buying bulk branded goods from a different manufacturer, supplier, or distributor to market to customers. Examples include popular consumer electronic equipment, kitchenware, and popular toys. Being a  wholesaler on Amazon in 2021 is very promising -- but there is a lot you want to know before diving into it. ExpoBird will provide all solutions. You make more money with us than if you sell on your own. You don’t need to buy the software. You don’t need to contact your web host. We do it all on your behalf.                        "
                        link2="/social-media-marketing"
                        alt2="Social Media Marketing"
                />
                <Services  
                        image1={services4}
                        title1="Product Management"
                        desc1="When adding new products, the product information must be included, which varies by class. Good categorization is essential in helping users browse and search for your product."
                        link1="/search-engine-optimization"
                        alt1="SEO Services"
                      

                        image2={services5}
                        title2="Amazon Store Installation"
                        desc2="New into the Amazon Pakistan market? You will want to make the most of what Amazon offers and get your shop set up fast and adequately. From company info and payment particulars to return policies along with your product information, our Amazon advisers can advise you on your own Amazon store installation, or we could do everything for you."
                        link2="/web-development"
                        alt2="Web Development"
                />
                <Services  
                        image1={services2}
                        title1="Product Hunt and Research"
                        desc1="There are two types of research about the product. It is important to realize that those old methods of finding products will not work in the current scenario. We have to list down the best selling products on Amazon, which you prefer to sell. This step is essential because we will never want to trade items that people are not searching for."
                        link1="/video-production-service"
                        alt1="Video Editor"

                        image2={services3}
                        title2="Optimized Content"
                        desc2="You can add great Content that can be visual content that could enhance the product display page and be employed along with the typical product description. This attribute may consist of vision, images, line breaks, formatted text, graphs, and video to advertise your products or brand. Use A+ Content may provide you with an advantage over your competitors whilst increasing conversion rates and brand loyalty."
                        link2="/animation"
                        alt2="Animation"

                        
                />
                
                        <CtaOne
                            heading="Why Choose Us? "
                            subheading="ExpoBird renowned for creating opportunities for Amazon Accounts"
                            paragraph="Our ExpoBird experienced team knows how to generate opportunities for companies to earn money on Amazon in Pakistan. We allow you to succeed with our collective experience and tailored approaches to effectively market your organization and products and make you more profitable. It's imperative to understand that not every organization or product is acceptable for Amazon. We can help you figure out whether this applies to you along with your product or company quickly, before a vast outpouring of cash."
                            button="Learn More About ExpoBird"
                            video={mainvideo2}
                            link="/about-us"

                        />
                        <Stats
                            heading="Visibility and Sales"
                            subheading="Amazon marketing is a highly effective instrument to stick out among other sellers"
                            video1={Eg1}
                            video2={Eg2}
                            video3={Eg3}
                        />
                        <AnimatePopup
                            video1={CtaVideo1}
                            video2={CtaVideo2}
                            video3={CtaVideo3}
                            paragraph1="ExpoBird aspires to meet clients' expectations and 
                                                    satisfy them with unique online marketing tactics every time."
                            paragraph2="Our practice with every brand is that we create art should not look beautiful but feel and function beautifully."
                            paragraph3="We improvise your brand not only to look beautiful but to perform amazingly. We believe in numbers and growth."    
                        />
        
                        
                    <Fade bottom>

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

<div className="containers"> 
                 <div className="row my-5 mt-5 pt-5">
                     <Fade bottom>
                        <div className="col-12 text-center pb-5">
                                <h2 className="heading-page "> Earn million of dollars through  <br/> eCommerce in Pakistan</h2>
                        </div>
                     </Fade>
                    
                        <div className="col-12 col-sm-12 col-md-1 col-lg-2"></div>
                        <div className="col-12 col-sm-12 col-md-4 col-lg-3">
                            <div className="text-center">
                                <video className="slight-br"  ref={makeMuted} alt="Quality Digital Marketing Services"  autoPlay  >
                                    <source src={OnlineStore} type="video/mp4"/>
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                            <div className="text-left text-sm-center text-md-left p-4 AvailableCard mt-4">
                                <h4 className="BlogPage-Title">Store Optimization</h4>
                                <p className="Blog-Text py-3">We begin by taking your current product optimizing and content copy, vision, and organized information as part of our approach to boost conversion rates and optimize to get relevant search phrases. This leads to a snowball effect, raising earnings, which increases rankings and Purchase Box winning percent.</p>
                                <Link to= "/contact-us">
                                    <button className="call-text px-4 py-2">Get Started Now</button>
                                </Link>
                            </div>
                        </div>

                        <div className="col-12 col-sm-12 col-md-1 col-lg-2"></div>

                        <div className="col-12 col-sm-12 col-md-4 col-lg-3 mt-5 mt-sm-5 mt-md-0 mt-lg-0">
                            <div className="text-center">
                                <video className="slight-br" alt="Cost that fits to your budget for your website"  ref={makeMuted}  autoPlay>
                                    <source src={competitivePricing} type="video/mp4"/>
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                            <div className="text-left text-sm-center text-md-left p-4 AvailableCard mt-4">
                                <h4 className="BlogPage-Title"> Evaluation & Reporting</h4>
                                <p className="Blog-Text py-3">We believe in transparency and need our customers to observe the outcomes of our job. Our staff will frequently share reports in your account's functionality, so you always remain in the loop. Our personalized reporting sheets with comprehensive information regarding your accounts will keep you along with how our plans are doing.</p>
                                <a href="tel:+92-330-2033334">
                                    <button className="call-text px-5 py-2 mt-1 mt-sm-3 ">Call Now</button>
                                </a>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-1 col-lg-2">
                            
                        </div>
                    

                        
                </div>
            </div>
            <div className="row testi-margin ">
                                <div className="col-12">
                                    <h2 className="text-center heading-page mb-5">FAQ's</h2> 
                                </div>
                            <div className="col-12 col-sm-12 col-md-1 col-lg-1"></div>
                            <div className="col-12 col-sm-12 col-md-10 col-lg-10">
                                <Accordion title="What are the services provided on Amazon by ExpoBird?" desc="Amazon FBA Asset Building ,  Product Management , Amazon Store Installation , Optimized Content , Enriched Brand Content , Amazon FBA Wholesale"/>
                                <br/>
                                <Accordion title="How do ExpoBird promote your titles at Amazon.com" desc="It's up to you to make your titles stand out on our virtual shelves at Amazon. You have the chance , using descriptive content and pictures , to personally hand-sell your titles to customers and convince them to get."/>
                                <br/>

                                <Accordion title="How can ExpoBird make it easier for customers to find your product?" desc="You can ensure that your product listing has a complete and optimize title and subject information. This information helps customers easily to find items they will want to purchase from your store. "/>
                                <br/>
                                <Accordion title="Why choose ExpoBird for amazon marketing?" desc="ExpoBird is specialized in creating opportunities for your Amazon Accounts. Though  \n  we are known for Product Hunting and research , Organic Traffic , Boost Conversion Rate , Boost Buy Box Percentage , Boost in Earnings , Reduce CPC , Reduce ACoS , Manage my account"/>
                                <br/>
                                
                                
                            </div>
                            <div className="col-12 col-sm-12 col-md-1 col-lg-1"></div>
                        </div>
            
                        <ContactFormFooter/>

                        
            </div>
        );
    }
}