import React, { Component, Suspense } from 'react';
import MainVid from '../assets/main-vid.mp4'
import Eg1 from '../assets/Eg1.mp4'
import Eg2 from '../assets/Eg2.mp4'
import Eg3 from '../assets/Eg3.mp4'
import Portfolio from '../components/portfolio'
import { BrowserRouter as Router, Link} from "react-router-dom";
import '../components/pages/socialMediaMarketing.css'
import Image from '../assets/image.svg'
import services1 from '../assets/services-1.gif'
import services2 from '../assets/video-production-expobird.gif'
import services3 from '../assets/video-animation-expobird.gif'
import services4 from '../assets/digital-marketing-expobird.gif'
import services5 from '../assets/web-development-expobird.gif'
import services6 from '../assets/social-media-expobird.gif'
import OnlineMarketing from '../assets/Online Marketing.svg'
import Video from '../assets/expobird-video.mp4'
import premiumQuality from'../assets/premium quality.mp4';
import competitivePricing from '../assets/competitive pricing.mp4';
import  portfolioCover from '../assets/gradientformatted.webp';
import CtaVideo1 from '../assets/ctaVideo1.mp4';
import  CtaVideo2 from '../assets/ctaVideo2.mp4';
import  CtaVideo3 from '../assets/ctaVideo3.mp4';
import Modal from 'react-modal';
import Fade from 'react-reveal/Fade';
import HelmetWrapper from './Helmet';
import {Helmet} from 'react-helmet';
import ReadMoreReact from 'read-more-react';
import ClientSection from '../components/clients'
import HomepageBanner from '../components/pages/banner'
import ServicesTitle from  '../components/Services-section-title'
import Services from '../components/Homepage-Services-section'
import CtaOne from'../components/pages/cta-one'
import CtaTwo from '../components/pages/cta-two'
import CtaThree from '../components/pages/cta-three'
import Stats from '../components/pages/Stats'
import PopupForm from '../components/pages/PopupForm'
import AnimatePopup from '../components/animatePopup'
import ContactFormFooter from '../components/ContactFormFooter'
import Accordion from './ui/Accordion'
import Testimonials from '../components/testimonials'

const makeMuted = (elt) => {
    if (elt) {
      elt.muted = true;
    }
  };
export default class Main extends Component{
    componentDidMount() {
        window.scrollTo(0, 0);
        localStorage.clear();
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
            function onScroll (evt) {
                console.log('scroller')
                // Store the scroll value for laterz.
                lastScrollY = window.scrollY;
            
                // Prevent multiple rAF callbacks.
                if (scheduledAnimationFrame)
                return;
            
                scheduledAnimationFrame = true;
                requestAnimationFrame(readAndUpdatePage);
            }
            
            window.addEventListener('scroll', onScroll);
        }
    render(){
        return(
            // <Suspense fallback={<div>Loading...</div>}>
            <div>
                <Helmet>
                    <title>Digital marketing company in Pakistan | Digital Marketing agency</title>
                    <meta name="description" content="You're looking for Digital Marketing Company in Pakistan? ExpoBird | Digital Marketing Agency Pakistan provide Best Marketing services in 2022"/>
                    <meta name="keywords" content="Top Social Media Marketing, Digital Marketing, Web Development, eCommerce website, Magento eCommerce, Amazon Marketing, Amazon FBA, Progressive Web Application (PWA), Search Engine Optimization (SEO), Video Production, Corporate Video Production" />
                    <link rel="canonical" href="https://www.expobird.com" />

                </Helmet>
                
                {/* <HomepageBanner
                title1="Top Digital Marketing Company in Pakistan"
                desc1="Call us to revamp your digital and online presence all over in Pakistan now"
                Video={Video}
                alt1="Online Marketing Agency in Karachi. Quality animated video production service"
                /> */}
                <div className="row bnr align-items-center ">
                    <div className="container">
                        <div className="row">
                                <div className="col-12 col-sm-12 col-md-12 col-lg-6 order-12 order-md-12 order-lg-1 order-xl-1 order-sm-12 d-flex justify-content-lg-left align-items-center justify-content-center ">
                                    <div className="heading-text" >
                                        <h1 id="heading-main">Top Digital Marketing Company in Pakistan</h1>
                                        <h2 className="py-3"id="sub-text">Call us to revamp your digital and online presence all over in Pakistan now</h2>
                                        <Link to="/contact-us">
                                        <button className="rf mt-1">
                                            Get Started
                                        </button>
                                        </Link>
                                    </div>
                                </div>
                    
                                <div className="col-12 col-sm-12 col-md-12 col-lg-6 mb-5 mb-lg-0 order-1 order-md-1 order-lg-12 order-xl-12 order-sm-1 text-center">
                                    <video ref={makeMuted} loop autoPlay alt="Online Marketing Agency in Karachi. Quality animated video production service" className="main-video" >
                                        <source src={Video} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                        </div>
                    </div>
                </div>
                

                <ServicesTitle
                    title="Our Services" SubHeading="Our distinguished services provide valuable solutions for businesses in Pakistan"
                    button="Explore Hundreds of Services" 
                />
                <Services
                        image1={services6}
                        title1="Digital Marketing"
                        desc1="The sky's the limit— Get your company names out to the public by our digital marketing agency in Pakistan providing services like Social Media, Search Engines, and other digital marketing tools–Profound experience in digital marketing services."
                        link1="/digital-marketing"
                        alt1="Digital Marketing"
                        link3="/digital-marketing"

                        image2={OnlineMarketing}
                        title2="Social Media Marketing"
                        desc2="With a top-notch digital marketing agency in Pakistan, win the hearts of your existing and potential customers by having a profound online presence on Facebook, Instagram, YouTube, Pinterest, and all other social media platforms with our exquisite social media marketing and digital marketing services."
                        link2="/social-media-marketing"
                        alt2="Social Media Marketing"
                        link4="/social-media-marketing"
                        />

                <Services  
                        image1={services4}
                        title1="Search Engine Optimization"
                        desc1="Get more clicks and enjoy huge profits with optimized SEO services with our digital marketing agency in Pakistan. Use your audience habit and get more traffic now. How? By ranking at the top of the search engine result page."
                        link1="/search-engine-optimization"
                        alt1="SEO Services"
                        link3="/search-engine-optimization"
                      

                        image2={services5}
                        title2="Web Design and Development"
                        desc2="A website is the digital face of your business. Many reasons make us one of the most highly-respected digital marketing agency in Pakistan. Glow your business face with web design and development services among your competition."
                        link2="/web-development"
                        alt2="Web Development"
                        link4="/web-development"

                />
                <Services  
                        image1={services2}
                        title1="Video Production"
                        desc1="Digital marketing agency in Pakistan, ExpoBird will empower your brand by crafting high-quality animated videos with optimized content. Our in-house fully-equipped video production team allows you to create short and long-duration videos that fit your business goals and objectives."
                        link1="/video-production-service"
                        alt1="Video Editor"
                        link3="/video-production-service"

                        image2={services3}
                        title2="Animation"
                        desc2="Convey your messages and explain your business with eye-catchy animated videos to keep your audience engaged throughout and serve your purpose with our animation. We believe there's a story behind every brand that deserves to be told creatively." 
                        link2="/animation"
                        alt2="Animation"
                        link4="/animation"

                        
                />
                <Services  
                        image1={services1}
                        title1="Amazon Services"
                        desc1="Grow your business on Amazon with minimum effort with ExpoBird Digital marketing company in Pakistan at a lesser cost in a short time with our fully experienced team. In addition, we provide fully customizable and tactical Amazon-managed support packages to meet your brand's requirements."
                        link1="/amazon-services"
                        alt1="Amazon Services"
                        link3="/amazon-services"

                        image2={services1}
                        title2="Graphics & Design"
                        desc2="Nothing lasts forever. So does design. Contact us the best digital marketing agency in Pakistan now and get all the latest updates based on international standards at par. Everything you find in artwork will be unique here at ExpoBird. "
                        link2="/graphic-design"
                        alt2="Graphic Designing"
                        link4="/graphic-design"

                />
                <div className="row ">
                    <div className="col-md-3"></div>
                    <div className="col-md-6 mb-5 bg-white ml-4 ml-sm-4 ml-md-0  mr-4">
                        <div className="text-center text-md-left d-md-flex">
                            <div className="services-video">
                                    <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_ormldmve.json" mode="bounce" background="transparent"  speed="1.5"  style={{height: 75 + 'px'}}  loop  autoplay></lottie-player>
                                {/* <img alt={"PPC Services"} className="blueColor" src={services4} width="50"/> */}
                            </div>
                            <div className="services-text ml-3">
                                <h2 className="services-heading">PPC Services</h2>
                                <p className="p-style pt-3 mw">
                                <ReadMoreReact text={"Grow Your Business With Optimized Paid Search Campaigns. Our company for Pay-Per-Click services can help you master the intricacies of PPC and integrate it into your SEO and online marketing strategies. Boost your brand recognition with ExpoBird."}readMoreText="Read More"   /> 
                                </p>
                                <div>
                                <PopupForm/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3"></div>
                </div>
                <ClientSection/>
                    <Portfolio image={portfolioCover} />
                        <CtaOne
                            heading="Why Choose Us? "
                            subheading="Digital Marketing Services in Karachi"
                            link2="/digital-marketing"
                            paragraph="ExpoBird is a top-notch Digital Marketing Company in Pakistan that strives to provide high-quality services to clients with creativity and innovation. With a fruitful experience of 8 years, ExpoBird strives to provide all digital marketing services and promotional services that will help you become the market leader all across Pakistan. ExpoBird seeks to provide innovative and creative solutions that will help clients achieve their marketing goals in Pakistan. Our purpose is to be a leader in today's innovative and creative world where we strive to perform beyond our clients' expectations."
                            button="Learn More About ExpoBird"
                            video={MainVid}
                            link="/about-us"
                            alt4="Digital Marketing Company In Pakistan, Digital Marketing & Seo Agency Pakistan, Digital Marketing & Seo Agency In Karachi, Top Digital Marketing Services, Top Digital Marketing"

                        />
                        
                        <Stats
                            heading="Our Stats"
                            subheading="The Best Online Digital Marketing Service All Over Pakistan With 100% Client Satisfaction"
                            video1={Eg1}
                            video2={Eg2}
                            video3={Eg3}
                        />
                        <AnimatePopup
                            video1={CtaVideo1}
                            video2={CtaVideo2}
                            video3={CtaVideo3}
                            heading1="Your competitor next door is already taking away your market share. Why not hustle now and turn your business into brand?"
                            button1="Call us Now"
                            paragraph1="ExpoBird aspires to meet clients' expectations and 
                                                    satisfy them with unique online marketing tactics every time."
                            paragraph2="Our practice with every brand is that we create art should not look beautiful but feel and function beautifully."
                            paragraph3="We improvise your brand not only to look beautiful but to perform amazingly. We believe in numbers and growth."    
                        />
        
                        
                    <Fade bottom>
                        <div className="row testi-margin ">
                                <div className="col-12">
                                    <h2 className="text-center heading-page mb-5">FAQ's</h2> 
                                </div>
                            <div className="col-12 col-sm-12 col-md-1 col-lg-1"></div>
                            <div className="col-12 col-sm-12 col-md-10 col-lg-10">
                                <Accordion title="What Do You Think In Which Cities Of Pakistan Do You Offer All Your Services?" desc="We offer our digital marketing services everywhere across Pakistan. Our online marketing is not limited to Karachi, Islamabad, Lahore, Peshawar, but anywhere across Pakistan. This is the 21st century. We do not confine ourselves where we cannot reach. With the help of the internet, we can easily get in touch with you at any time of the day. What is the point of having all these resources when you cannot benefit from them? Right...
Be it your business branding, website, video, or social media marketing. Whatever your problems are, we offer all marketing and promotional solutions under one umbrella. We help you target your audience for business growth in the most appropriate manner at any destination, area, city, or state. Want to bet? You can reach us via telephone, email, Facebook, WhatsApp, or even fill-up the form on our website. We are right here waiting to strike on your signal as we are the top digital marketing company in Pakistan."/>
                                <br/>
                                <Accordion title="How Do You Charge For Your Digital & Online Marketing Services For My Campaign?" desc="There is no 'one size fits all' thing when it comes to marketing and promotional solutions specifically designed for your business. Our digital marketing service varies as per clients' needs and their audience preferences. And so do our charges. For the best online marketing results, we devise the strategy that will be a cornerstone of your overall marketing campaign. However, there are a number of clients whose main objective is to sustain online social media. In general, we do have multiple customised packages that are best suited for the needs of such clients. For more information, you can contact us at any time of the day."/>
                                <br/>

                                <Accordion title="How Do You Report Your Ongoing Work Weekly Or Monthly Progress Report?" desc="We have a proper system for our clients where we update them about their project status. We use different tools that help us to stay updated. Usually, we update our clients on a weekly basis where we intimate all the latest developments that have occurred on their project compared with last week. In return, our clients approve all the changes that take place, otherwise, it proposes new changes which is a very rare case. This two-way communication is the best thing that ultimately produces the milestone for both the parties. So what is stopping you from reaching another milestone?"/>
                                <br/>
                                <Accordion title="I Am A Newly Start-Up Business Owner. How Will Your Service Help Me To Grow My Business?" desc="For Start-Ups we have a complete package from brand identity to online presence. Our team of experts will segregate duties with each other where they will be responsible to design logo, stationery, pamphlets, brochures, business profile, custom website, and social media profiles at all the platforms. The best part is you will save a lot of money if you are a start-up and want the complete branding and online presence being done by us. How? Supposing you were a running business and needed a revamp. This would mean all your past designs that include logo, office stationery, printing materials, office decor, and the website would need a huge redo that would cost you a lot of money. So is it not great to get all these done with modern designs and the latest technology for once and for all?"/>
                                <br/>
                                <Accordion title="Why Should I trust you As The Best Digital Marketing Company In Pakistan?" desc="We have an online marketing team that is well-versed with a sales funnel of online marketing. They are a part of our team not only because of what they know, but the marketing results they produce overtime. For this reason, they get aligned with your overall marketing and business goals which are consistently monitored to drive maximum profit out of your online marketing budget."/>
                                <br/>
                                <Accordion title="How Do You Work With a Tight Budget?" desc="Budget is not an issue at all as we have customised packages for different clients based on their marketing needs and business goals. So we are confident that we will definitely work it out for your organisation as well."/>
                                <br/>
                                <Accordion title="Do You Work For Companies In Karachi Only?" desc="Nope. We have a strong link with companies that are based in other regions of Pakistan such as Islamabad, Lahore and Peshawar. With an internet in our hands, distance is no more an issue."/>
                                <br/>
                                
                                
                            </div>
                            
                        </div>
                    </Fade>
                        
                        {/* Imported Contact Form  */}
                        
                        <Testimonials
                        text="What Our Clients say about our Top Digital Marketing Company in Pakistan and our digital service for them"
                        />
                        {/* <CtaTwo
                            video1={CtaVideo1}
                            video2={CtaVideo2}
                            video3={CtaVideo3}
                            paragraph1="ExpoBird aspires to meet clients' expectations and 
                            satisfy them with unique online marketing tactics every time."
                            paragraph2="Our practice with every brand is that we create art should not look beautiful but feel and function beautifully."
                            paragraph3="We improvise your brand not only to look beautiful but to perform amazingly. We believe in numbers and growth."    
                        
                        /> */}

                        <CtaThree
                            video1={premiumQuality}
                            video2={competitivePricing}
                            heading1="Premium Quality Assurance"
                            heading3=""
                            paragraph1="ExpoBird is Pakistan’s top digital marketing and online marketing company in Karachi that is committed to providing result-driven marketing support for SEO services social media marketing, video production, and many more. Our digital marketing services will help you reach the pinnacle of success."
                            heading2="Competitive Package"
                            // heading3="Package"
                            paragraph2="The ExpoBird digital marketing and SEO agency in Pakistan has reasonable pricing for all digital marketing services is the second best thing for our clients. They get the best quality work at a very reasonable price. For This reason, they cannot afford to lose us nor can we. So this makes a perfect combination."
                            alt1=" Digital Marketing Company In Pakistan, Digital Marketing & Seo Agency Pakistan, Digital Marketing & Seo Agency In Karachi, Top Digital Marketing Services, Top Digital Marketing"
                            alt2=" Digital Marketing Company In Pakistan, Digital Marketing & Seo Agency Pakistan, Digital Marketing & Seo Agency In Karachi, Top Digital Marketing Services, Top Digital Marketing"
                            
                            
                        />
            
                        <ContactFormFooter />

            </div>
            // </Suspense>
        );
    }
}