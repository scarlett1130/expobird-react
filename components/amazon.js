import React, { Component } from 'react';
import MainVid from '../assets/main-vid.mp4'
import Eg1 from '../assets/Eg1.mp4'
import Eg2 from '../assets/Eg2.mp4'
import Eg3 from '../assets/Eg3.mp4'
import Services from './Services-section'
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
import  mainvideo2 from '../assets/Amazon-whychooseus.mp4';
import HomepageBanner from './pages/banner';
import CtaOne from './pages/cta-one'
import CtaTwo from './pages/cta-two'
import CtaThree from './pages/cta-three'
import Stats from './pages/Stats'
import OnlineStore from'../assets/Online Store.mp4';
import DataReport from '../assets/Data Report.mp4';
import  portfolioCover from '../assets/portfolio cover.png';
import CtaVideo1 from '../assets/ctaVideo1.mp4';
import  CtaVideo2 from '../assets/ctaVideo2.mp4';
import  CtaVideo3 from '../assets/ctaVideo3.mp4';
// import Video3 from '../assets/amazon-banner-video.mp4'
import Video from '../assets/E-Commerce.mp4'
import Modal from 'react-modal';
import ContactFormFooter from './ContactFormFooter';
import Fade from 'react-reveal/Fade';
import HelmetWrapper from './Helmet';
import {Helmet} from 'react-helmet';
import Pentagon from '../assets/pentagon.svg'

const makeMuted = (elt) => {
    if (elt) {
      elt.muted = true;
    }
  };
export default class Amazon extends Component{
    componentDidMount() {
        window.scrollTo(0, 0)
      }

    render(){
        return(
            <div>
                <Helmet>
                    <title>Amazon Pakistan | ExpoBird Amazon Services Provider Pakistan 2022</title>
                    <meta name="description" content="ExpoBird provide Amazon services in Pakistan i-e Amazon FBA Pakistan, you may start an online store on Amazon Pakistan 2022."/>
                    <meta name="keywords" content="amazon pakistan, amazon services, amazon eCommerce solutions, amazon eCommerce strategy, amazon eCommerce pakistan, amazon eCommerce services, amazon web services eCommerce, amazon eCommerce store, eCommerce seller services" 
                    />
                   <link rel="canonical" href="https://www.expobird.com/amazon-services" />

                </Helmet> 
                
                {/* <HomepageBanner
                title1="Build eCommerce Business on Amazon Pakistan With ExpoBird"
                desc1="Build your presence now. Grow your business on Amazon Pakistan with minimum effort at a lesser cost in a short time with our fully experienced team"
                Video={Video}
                alt1="amazon pakistan, amazon services, amazon eCommerce solutions, amazon eCommerce strategy, amazon eCommerce pakistan, amazon eCommerce services, amazon web services eCommerce, amazon eCommerce store, eCommerce seller services"
                /> */}
                <div className="row bnr align-items-center ">
                    <div className="container">
                        <div className="row">
                                <div className="col-12 col-sm-12 col-md-12 col-lg-6 order-12 order-md-12 order-lg-1 order-xl-1 order-sm-12 d-flex justify-content-lg-left align-items-center justify-content-center ">
                                    <div className="heading-text" >
                                        <h1 id="heading-main">Build eCommerce Business on Amazon Pakistan With ExpoBird</h1>
                                        <h2 className="py-3"id="sub-text">Build your presence now. Grow your business on Amazon Pakistan with minimum effort at a lesser cost in a short time with our fully experienced team</h2>
                                        <Link to="/contact-us">
                                        <button className="rf mt-1">
                                            Get Started
                                        </button>
                                        </Link>
                                    </div>
                                </div>
                    
                                <div className="col-12 col-sm-12 col-md-12 col-lg-6 mb-5 mb-lg-0 order-1 order-md-1 order-lg-12 order-xl-12 order-sm-1 text-center">
                                    <video ref={makeMuted} loop autoPlay alt="amazon pakistan, amazon services, amazon eCommerce solutions, amazon eCommerce strategy, amazon eCommerce pakistan, amazon eCommerce services, amazon web services eCommerce, amazon eCommerce store, eCommerce seller services" className="main-video" >
                                        <source src={Video} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <Link  to="/">Home</Link>  &#xbb; <Link  to="/amazon-services">Amazon Services</Link>
                </div>
                

                <ServicesTitle
                    title="Our Services" SubHeading="Our distinguished services provide valuable solutions for businesses in Pakistan"
                    button="Explore Hundreds of Services" 
                />
                <Services
                        image1={services6}
                        title1="Amazon FBA Private Label"
                        desc1="Launch your own brand from Pakistan and get listed among the top 5 sellers on Amazon. Amazon FBA private label means selling the products of your choice under your private brand (label) on Amazon Pakistan. After studying a product/market, ExpoBird will contact product suppliers/manufacturers directly, and they make the product for you, in bulk, at cost, under your business name. They then ship the product, ready to sell, to Amazon Pakistan. Our team will do diligent research and strategic polishing. ExpoBird will select a top-selling product, find you a private label manufacturer to create a competing product, slap your brand on it. We will find a niche product and create your version of the product with your design, features and brand. A unique product will end the problem of a brand message and will find you distinctive selling profits on Amazon karachi store or world wide."
                        alt1="Amazon FBA Private Label"

                        image2={OnlineMarketing}
                        title2="Amazon FBA Wholesale"
                        desc2="Wholesale means buying bulk branded goods from a different manufacturer, supplier, or distributor to market to customers. Examples include popular consumer electronic equipment, kitchenware, and popular toys. Being a wholesaler on Amazon in 2021 is very promising -- but there is a lot you want to know before diving into it. ExpoBird will provide all solutions. You make more money with us than if you sell on your own. You don't need to buy the software. You don't need to contact your web host. We do it all on your behalf. You should begin ordering your items after you have completed your product research. While you wait, go above your product listings and make sure they're all optimized. When you've completed all of this and your collection is ready, you'll be capable of launching your products and begin selling on Amazon."
                        alt2="Amazon FBA Wholesale"
                />
                <Services  
                        image1={services4}
                        title1="Amazon FBA Dropshipping"
                        desc1="Sell the items of other brands without having actually kept them on your Amazon FBA Pakistan store. Dropshipping on Amazon karachi should be done through Amazon's Fulfilled by Amazon (FBA) program. They will also provide tracking information to the customer, and we will take care of any related customer service problem regarding Amazon dropshipping, including returns. But this comes at a price! Everything you cover on Amazon Pakistan will be dependent on what merchandise you sell and this year. If your merchandise stays in Amazon's warehouse for over 6 weeks, you can also be asked to cover long-term storage charges."
                        alt1="Amazon FBA Dropshipping"
                      

                        image2={services5}
                        title2="Product Hunting"
                        desc2="Everyone is searching for the eCommerce Business, an ideal product, a profit-making product. Well, guess what? The product automatically will not appear in front of you, and you have to dig for it. You will have to search through the bank of 500+ million products on the Amazon eCommerce store and make an informed decision after digging it in.
                        Product hunting is the most important stage, and if you don’t spend ample time here, you will never find the product you want to sell on Amazon Pakistan!  Keen observation is required for product hunting for any eCommerce seller. What we do? ExpoBird will provide a mixture of data analysis, observations, and experience will find you a successful product in your niche that hatches the success of your Amazon karachi Store."
                        alt2="Product Hunting"
                />
                <Services  
                        image1={services2}
                        title1="Product Sourcing"
                        desc1="Ship all products to your customers non-stop without any hussle. The best way to understand what sells the most on Amazon Pakistan is its search result. We will do all the searches like Feed keywords, observe the search results, profit margins, demand levels-the higher the demand, the more sales, competitor analysis-product they are selling, product reviews, reliability and credibility of a wholesaler and more. We will go through each product's strengths and weaknesses to help you get a better product listing on your Amazon Pakistan Store. Product research is the first step. As much as possible, make absolutely sure you've done your research on the niche you're entering. On Amazon, there are some niches that are performing well in comparison to others. You can, however, concentrate on a niche with a smaller business and profit from the circumstance."
                        alt1="Product Sourcing"

                        image2={services3}
                        title2="Amazon Store Management"
                        desc2="Your accounts may be at risk should you violate any one of Amazon eCommerce stores lengthy collection of coverages. We know all Amazon services principles that are proficient for fast solving problems that come up with amazon eCommerce solutions. Our Amazon Pakistan team also has incredible success, rectifying different difficulties, such as high ACoS, inadequate advertisement quality, improper budgeting, wrong keyword kinds, suppressed listings, and total performance obstacles. This leads to a snowball effect, raising earnings, which increases rankings and Purchase Box winning percent. To help you calculate your costs and revenue, you can use ExpoBird amazon services in Pakistan."
                        alt2="Amazon Store Management"

                        
                />
                 <Fade bottom>
                    <ClientSection/>
                </Fade>
                    {/* <CtaOne
                            heading="Why Choose Us? "
                            subheading="ExpoBird is renowned for creating opportunities for Amazon Services on Accounts."
                            paragraph="Our top digital marketing company in Pakistan team knows how to generate opportunities for companies to earn money on Amazon in Pakistan. We allow you to succeed with our collective experience and tailored approaches to effectively market your organization and products and make you more profitable. It's imperative to understand that not every organization or product is acceptable for Amazon Pakistan. We can help you figure out whether this applies to you along with your product or company quickly, before a vast outpouring of cash."
                            button="Learn More About ExpoBird"
                            video={mainvideo2 } 
                            link="/about-us"

                        /> */}
                <div className="container"> 
                    <div className="row testi-margin">

                        <div className="col-lg-6 col-xl-6 col-md-12 col-sm-12 col-12 text-center" style={{display : 'flex' , alignItems : 'center', justifyContent : 'center'}}>
                            <div >
                                <video className="slight-br ChooseImg2" alt="video" ref={makeMuted} muted autoPlay>
                                    <source src={mainvideo2} type="video/mp4"/>
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-6 col-md-12 col-sm-12 col-12 mt-5 mt-sm-5 mt-md-5 mt-lg-0 mb-3 text-center text-lg-left">
                            <div className="margin-left5  ">
                                <h2 className="heading-page ">Why Choose Us?</h2>
                                <h3 className="mt-4 layout-heading stats-Text">ExpoBird is renowned for creating opportunities for Amazon Services on Accounts.</h3>
                                <p className="py-3 p-style">
                                {/* <ReadMoreReact text="Our top digital marketing company in Pakistan team knows how to generate opportunities for companies to earn money on Amazon in Pakistan. We allow you to succeed with our collective experience and tailored approaches to effectively market your organization and products and make you more profitable. It's imperative to understand that not every organization or product is acceptable for Amazon Pakistan. We can help you figure out whether this applies to you along with your product or company quickly, before a vast outpouring of cash."readMoreText="Read More"/> */}
                                        Our 
                                    <Link to="/">
                                        <span className="mx-1 p-style" style={{fontWeight : 600}}>
                                            top digital marketing company in Pakistan 
                                        </span>
                                    </Link> 
                                        team knows how to generate opportunities for companies to earn money on Amazon in Pakistan. We allow you to succeed with our collective experience and tailored approaches to effectively market your organization and products and make you more profitable. It's imperative to understand that not every organization or product is acceptable for Amazon Pakistan. We can help you figure out whether this applies to you along with your product or company quickly, before a vast outpouring of cash.
                                    </p>
                                <Link to="/about-us"><button className="services-cta  align-self-center">Learn More About ExpoBird</button>
                            </Link>
                            </div>
                            <div className="pentagon">
                                    <img src={Pentagon} alt="Pentagon"/>
                            </div>
                        </div>
                    </div>
                </div>       
                        
                
                <Portfolio image={portfolioCover} />

                        <Stats
                            heading="Visibility and Sales"
                            subheading="Amazon marketing is a highly effective instrument to stick out among other sellers"
                            video1={Eg1}
                            video2={Eg2}
                            video3={Eg3}
                        />
                        {/* <AnimatePopup
                            video1={CtaVideo1}
                            video2={CtaVideo2}
                            video3={CtaVideo3}
                            paragraph1="ExpoBird aspires to meet clients' expectations and 
                                                    satisfy them with unique online marketing tactics every time."
                            paragraph2="Our practice with every brand is that we create art should not look beautiful but feel and function beautifully."
                            paragraph3="We improvise your brand not only to look beautiful but to perform amazingly. We believe in numbers and growth."    
                        />
         */}
                        
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
                                <h2 className="heading-page "> Earn million of dollars through  <br/> eCommerce in Pakistan.</h2>
                        </div>
                     </Fade>
                    
                        <div className="col-12 col-sm-12 col-md-1 col-lg-2"></div>
                        <div className="col-12 col-sm-12 col-md-4 col-lg-3">
                            <div className="text-center">
                                <video className="slight-br"  ref={makeMuted} alt="Amazon Pakistan Store Optimization"  autoPlay  >
                                    <source src={OnlineStore} type="video/mp4"/>
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                            <div className="text-left text-sm-center text-md-left p-4 AvailableCard mt-4">
                                <h4 className="BlogPage-Title">Amazon Pakistan Store Optimization</h4>
                                <p className="Blog-Text py-3">We begin Amazon eCommerce Store by taking your current product, optimizing and content copy, vision, and organized information as part of our approach to boost conversion rates and optimize to get relevant search phrases. This leads to a snowball effect, raising earnings, which increases rankings and Purchase Box winning percent.</p>
                                <Link to= "/contact-us">
                                    <button className="call-text px-4 py-2">Get Started Now</button>
                                </Link>
                            </div>
                        </div>

                        <div className="col-12 col-sm-12 col-md-1 col-lg-2"></div>

                        <div className="col-12 col-sm-12 col-md-4 col-lg-3 mt-5 mt-sm-5 mt-md-0 mt-lg-0">
                            <div className="text-center">
                                <video className="slight-br" alt="Cost that fits to your budget for your website"  ref={makeMuted}  autoPlay>
                                    <source src={DataReport} type="video/mp4"/>
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                            <div className="text-left text-sm-center text-md-left p-4 AvailableCard mt-4">
                                <h4 className="BlogPage-Title"> Evaluation & Reporting of Amazon eCommerce Store</h4>
                                <p className="Blog-Text py-3">We believe in transparency and need our customers to observe the outcomes of our job. Our staff will frequently share reports in your Amazon Pakistan account's functionality, so you always remain in the loop with our amazon services in Pakistan. </p>
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
                                <Accordion title="How do ExpoBird promote your titles at Amazon.com" desc="It's up to you to make your titles stand out on our virtual shelves at Amazon Pakistan. Using descriptive content and pictures, you have the chance to personally hand-sell your tags to customers and convince them to get them."/>
                                <br/>

                                <Accordion title="How can ExpoBird make it easier for customers to find your product on the Amazon eCommerce store?" desc="You can ensure that your product listing has a complete and optimized title and subject information. This information helps customers quickly to find items they will want to purchase from your store. "/>
                                <br/>
                                <Accordion title="How can you contact us if you have any queries?" desc="Our first-contact response times are based on your chosen amazon services from us. ExpoBird will use all reasonable efforts to respond as soon as possible."/>
                                <br/>
                                
                                
                            </div>
                            <div className="col-12 col-sm-12 col-md-1 col-lg-1"></div>
                        </div>
            
                        <ContactFormFooter/>
                        <div className="container">
                            <Link to="/">Home</Link>  &#xbb; <Link to="/amazon-services">Amazon Services</Link>
                        </div>
                        
            </div>
        );
    }
}