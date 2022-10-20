import React, { Component } from 'react';
import Services from './Services-section'
import ServicesTitle from './Services-section-title'
import {Link} from "react-router-dom";
import '../components/pages/socialMediaMarketing.css'
import services6 from '../assets/social-media-expobird.gif'
import OnlineMarketing from '../assets/Online Marketing.svg'
import HomepageBanner from './pages/banner';
import Video from '../assets/E-Commerce.mp4'
import ContactFormFooter from './ContactFormFooter';
import {Helmet} from 'react-helmet';
import image1 from '../assets/1-min.jpg'
import image2 from '../assets/2-min.jpg'
import image3 from '../assets/fba_2-min.jpg'
import image4 from '../assets/left_over_2-min.jpg'
import Cfvideo from '../assets/cf-video.mp4';
import $ from "jquery";
import axios from 'axios';


const makeMuted = (elt) => {
    if (elt) {
      elt.muted = true;
    }
  };
export default class AmazonUK extends Component{
    componentDidMount() {
        window.scrollTo(0, 0)
      }
      constructor(props) {
        super(props);
        this.state = {
            username : '',
            email : '',
            contact : '',
            message : ''
        };    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({[event.target.name] : event.target.value});
      }
    
      handleSubmit(event) {
        
        event.preventDefault()
        // console.log(this.props)
          $('.thankyou-message').css({
              'display' : 'block'
            });
            setTimeout(()=>{
            $('.thankyou-message').css({
                'display' : 'none'
            });
        }, 2000);

        axios({
            method: 'post',
            url: 'https://www.expobird.com/email.php',
            headers: { 'content-type': 'application/json' },
            data: this.state
        })
        .then(result => {
            if(result.success){
                console.log('here')
                $('.services-cta').attr('disabled', 'true')
                $('.services-cta').attr('disabled', 'true')
            }
            
            /* this.setState({
                mailSent: result.data.sent
            }) */
        })
        .catch(error => this.setState({ error: error.message }));
        $('.services-cta').css('opacity', '0.5');
        
        window.location.href = "https://www.expobird.com/thankyou-page"
        // this.props.history.push("/thankyou"); 
    };
    // componentDidMount(){
    //     const [Name , setName] = useState('');
    //     const HandleSubmit = (e) => {
    //         e.preventDefault();
    //         console.log(Name);
    //         setName('');
    //     }
    // }
    render(){
        return(
            <div>
                <Helmet>
                    <title>Amazon Services UK | Amazon Customer Services UK | ExpoBird</title>
                    <meta name="description" content="Optimize & grow your Business with our Amazon Services UK. We provide premium Amazon UK customer services to every sized brand worldwide. Contact Us"/>
                    <meta name="keywords" content="amazon services uk, amazon customer services uk, amazon uk customers services, amazon products list, amazon exclusive products list, amazon product launch, best amazon product launch service, amazon seo expert uk, amazon ppc uk, amazon a+ content" 
                    />
                   <link rel="canonical" href="https://www.expobird.com/amazon-services-uk" />

                </Helmet> 
                
                {/* <HomepageBanner
                title1="Grow your brand with ExpoBird Amazon services UK"
                desc1="Take your business to the next level, and let us help you thrive online with Amazon UK customer services"
                Video={Video}
                alt1="amazon services uk, amazon customer services uk, amazon uk customers services, amazon products list, amazon exclusive products list, amazon product launch, best amazon product launch service, amazon seo expert uk, amazon ppc uk, amazon a+ content"
                /> */}
                <div className="row bnr align-items-center ">
                    <div className="container">
                        <div className="row">
                                <div className="col-12 col-sm-12 col-md-12 col-lg-6 order-12 order-md-12 order-lg-1 order-xl-1 order-sm-12 d-flex justify-content-lg-left align-items-center justify-content-center ">
                                    <div className="heading-text" >
                                        <h1 id="heading-main">Grow your brand with ExpoBird Amazon services UK</h1>
                                        <h2 className="py-3"id="sub-text">Take your business to the next level, and let us help you thrive online with Amazon UK customer services</h2>
                                        <Link to="/contact-us">
                                        <button className="rf mt-1">
                                            Get Started
                                        </button>
                                        </Link>
                                    </div>
                                </div>
                    
                                <div className="col-12 col-sm-12 col-md-12 col-lg-6 mb-5 mb-lg-0 order-1 order-md-1 order-lg-12 order-xl-12 order-sm-1 text-center">
                                    <video ref={makeMuted} loop autoPlay alt="amazon services uk, amazon customer services uk, amazon uk customers services, amazon products list, amazon exclusive products list, amazon product launch, best amazon product launch service, amazon seo expert uk, amazon ppc uk, amazon a+ content" className="main-video" >
                                        <source src={Video} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <Link  to="/">Home</Link>  &#xbb; <Link  to="/amazon-services-uk">Amazon Services UK</Link>
                </div>
                

                <ServicesTitle
                    title="Our Services" SubHeading="Our distinguished Amazon Services UK provide valuable solutions for businesses"
                    button="Explore Hundreds of Services" 
                />
                <Services
                        image1={services6}
                        title1="Accelerate Sales Growth with Amazon Services UK"
                        desc1="Amazon is among the most well-known e-commerce platforms worldwide, with more than 300 million active customers. With ExpoBird most effective Amazon services UK, We can assist you to transform Amazon into a top-performing marketing channel. Our customers trust us to implement their Amazon growth strategies due to our commitment to Amazon UK customers services, our expert understanding, innovative solutions, and a results-oriented work ethic. With our expertise and experience in results-driven work and innovative solutions, we provide the most effective strategies for branding and sales to Amazon partners. We employ the most effective tools, including data, analytics, and data, to create the best method to boost sales and growth for your brand regardless of what stage your company is at. As Amazon experts, we can assist you in navigating the challenges of this complicated and constantly evolving platform. As your execution and strategic partner, we are in the game, and we conduct all of our decisions with that purpose in the back of our minds. ExpoBird believes that structured data is the key to the success of Amazon stores. Our experienced team is dedicated to Amazon customer services UK, focusing on optimizing data. We will upgrade your information to make it more accessible at the top of the search results on Amazon. We will conduct market research and then add the relevant keywords to describe your product better. We are the go-to company to boost your sales and attract new customers while maintaining your store's high-rated image. Contact us now to get the best Amazon services UK."
                        alt1="amazon services uk, amazon customer services uk, amazon uk customers services, amazon products list, amazon exclusive products list, amazon product launch, best amazon product launch service, amazon seo expert uk, amazon ppc uk, amazon a+ content"

                        image2={OnlineMarketing}
                        title2="Sell successfully on Amazon with Amazon UK Customers Services"
                        desc2="We give you an overview of your operation to allow you to optimize your products and services on Amazon completely. Based on our extensive experience on Amazon services UK, we know exactly which are the right buttons to use to guarantee ongoing growth. The consistent success of ExpoBird strategy will speak for itself! Do you wish to establish an additional revenue stream to supplement your current company? The majority of transactions made online occur through Amazon. Now is the time to make money from it! A great product? Check. Are you looking to sell your product on Amazon? Check. Do you have time and resources? It's a good question... We're ready to help you bridge the gap and assist your business wherever you lack the capability or the expertise. ExpoBird is the ingredient that you've been lacking in your business plan. The power of knowledge is in mind! Learn from the most knowledgeable Amazon experts and gain more familiarity with Amazon's platform. We're excited to give you our Amazon customer services UK. Amazon could be equally attractive to small and medium-sized enterprises located in the UK as it can be for global operating brands. Every day, millions of people do not just search for items through Google. However, they also browse over 55% directly to Amazon. Amazon could become one of the top-selling channels for each brand-named item. We can help you use this factual information to benefit your business with Amazon UK customers services, easy-to-understand and individualized according to your specific needs. Schedule a meeting to discuss Amazon customer services UK."
                        alt2="amazon services uk, amazon customer services uk, amazon uk customers services, amazon products list, amazon exclusive products list, amazon product launch, best amazon product launch service, amazon seo expert uk, amazon ppc uk, amazon a+ content"
                />
                 {/* <Fade bottom>
                    <ClientSection/>
                </Fade> */}
                    {/* <CtaOne
                            heading="Why Choose Us? "
                            subheading="ExpoBird is renowned for creating opportunities for Amazon Services on Accounts."
                            paragraph="Our top digital marketing company in Pakistan team knows how to generate opportunities for companies to earn money on Amazon in Pakistan. We allow you to succeed with our collective experience and tailored approaches to effectively market your organization and products and make you more profitable. It's imperative to understand that not every organization or product is acceptable for Amazon Pakistan. We can help you figure out whether this applies to you along with your product or company quickly, before a vast outpouring of cash."
                            button="Learn More About ExpoBird"
                            video={mainvideo2 } 
                            link="/about-us"

                        /> */}

                <div className="container">
                    <div className="row my-5">
                        <div className="col-12 col-lg-8 order-12 order-md-1 order-lg-1 order-xl-1 order-sm-12 text-center text-lg-left">
                            <h4 className="services-heading mt-5 mt-lg-0">
                                Amazon Products List
                            </h4>
                            <p className="p-style py-4">
                                We're happy that you have asked! We will provide the most effective Amazon products lists for your products based on our extensive experience in this area. We've done everything related to the Amazon business, from providing clients with their primary Amazon exclusive products list and search engine research to optimize their PPC campaigns for better performance. We have gone one step further by providing sales brochures in our Amazon products list services for successful customers in the marketplace. We employ our in-house measure known as listing quality score to assess the value of a listing by comparing it against various criteria. The metric is assigned to every product within Amazon's database. Amazon databases allow us to focus on the areas that are important and bring the best to your Amazon exclusive products list.
                            </p>
                        </div>
                        <div className="col-12 col-lg-4 order-1 order-md-12 order-lg-12 order-xl-12 order-sm-1  text-center d-lg-flex align-items-lg-center">
                            <img className="slight-br ChooseImg" src={image1} alt="amazon services uk, amazon customer services uk, amazon uk customers services, amazon products list, amazon exclusive products list, amazon product launch, best amazon product launch service, amazon seo expert uk, amazon ppc uk, amazon a+ content"/>
                        </div>
                    </div>

                    <div className="row my-5">
                        <div className="col-12 col-lg-5  text-center d-lg-flex align-items-lg-center">
                            <img className="slight-br ChooseImg" src={image2} alt="amazon services uk, amazon customer services uk, amazon uk customers services, amazon products list, amazon exclusive products list, amazon product launch, best amazon product launch service, amazon seo expert uk, amazon ppc uk, amazon a+ content"/>
                        </div>
                        <div className="col-12 col-lg-7 text-center text-lg-left">
                            <h4 className="services-heading mt-5 mt-lg-0">
                                Amazon Product Launch
                            </h4>
                            <p className="p-style py-4">
                                ExpoBird is known for the best Amazon product launch services. Our team will work together with you to launch your products. As a professional team, we can assure you that launching your product is among the tasks that we excel at. Start with us for the best Amazon product launch service, and benefit from the income streams without a lot of effort. We can assist you with automating sales with our unique promotion strategy to rank organically. It is essential to be aware of the Amazon product launch you offer. We can bring the most specific customers to your product. Your product will gain visibility and organic sales from Amazon immediately after contacting ExpoBird Experts. 
                            </p>
                        </div>
                    </div>
                    
                    <div className="row my-5">
                        <div className="col-12 col-lg-8 order-12 order-md-1 order-lg-1 order-xl-1 order-sm-12 text-center text-lg-left">
                            <h4 className="services-heading mt-5 mt-lg-0">
                                Amazon SEO Expert UK
                            </h4>
                            <p className="p-style py-4">
                                By optimizing visibility by enhancing visibility, the conversion rate (and the number of sales) can be increased dramatically. This is why Amazon SEO is super important to be discovered on Amazon for specific phrases. As an Amazon expert SEO UK, we extensively use keyword research to find appropriate search terms for your product and then integrate these keywords into your product listing. Titles, bullet points, the backend keyword, and the descriptions of products are frequently optimized. We can provide an individual and thorough Amazon optimization of your product. The basis for selling successfully of your brands with ExpoBird Amazon SEO expert UK and we will regularly optimize Amazon A+ content. By creating and optimizing our content, we can boost your Amazon ranking, visibility, and ultimately your sales.
                            </p>
                        </div>
                        <div className="col-12 col-lg-4 order-1 order-md-12 order-lg-12 order-xl-12 order-sm-1 text-center d-lg-flex align-items-lg-center">
                            <img className="slight-br ChooseImg " src={image3} alt="amazon services uk, amazon customer services uk, amazon uk customers services, amazon products list, amazon exclusive products list, amazon product launch, best amazon product launch service, amazon seo expert uk, amazon ppc uk, amazon a+ content"/>
                        </div>
                    </div>

                    <div className="row my-5">
                        <div className="col-12 col-lg-5  text-center d-lg-flex align-items-lg-center">
                            <img className="slight-br ChooseImg" src={image4} alt="amazon services uk, amazon customer services uk, amazon uk customers services, amazon products list, amazon exclusive products list, amazon product launch, best amazon product launch service, amazon seo expert uk, amazon ppc uk, amazon a+ content"/>
                        </div>
                        <div className="col-12 col-lg-7 text-center text-lg-left">
                            <h4 className="services-heading mt-5 mt-lg-0">
                                Amazon SEO PPC UK
                            </h4>
                            <p className="p-style py-4">
                                If you want to establish an impressive presence for your product on Amazon, publishing quality Amazon A+ content isn't enough. It is essential to put your items on the market. The most effective method to achieve this is by using the unbeatable solutions Amazon PPC UK offered by ExpoBird. They are made up of advertising campaigns with a unique design that is strategically placed to engage customers throughout your shopping journey. Due to its algorithm, placing sponsored advertisements could be a challenge. To minimize the risk while increasing benefits, let the campaign be managed by Professional Amazon PPC UK experts. We employ our marketing and advertising expertise to communicate with those who purchase from you in the most efficient method feasible. We want to efficiently convey the benefits of your brand throughout the entire process, from increasing brand awareness to increasing conversion rates in the buying stage and establishing a strong customer base through encouraging loyalty.
                            </p>
                        </div>
                    </div>
                </div>     
                        
                
            <div className="container">
                <div className="thankyou-message p-3">
                    Thank you! We've received your message.
                </div>
                <div className="row testi-margin">
                    <div className="col-12 col-sm-12 col-md-12 col-lg 6 text-center pt-5">
                            <video className="slight-br videoSize" alt="Unleashed Technology. Contact Us Now "  ref={makeMuted} autoPlay>
                                <source src={Cfvideo} type="video/mp4"/>
                                Your browser does not support the video tag.
                            </video>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg 6 text-center mt-5 mt-sm-5 mt-md-5 mt-lg-0">
                        <h4 className="mb-3" id="ah2"><b>Request A Callback</b></h4>
                        <div><p className="text-secondary-center p-style">Send us an email if you have any questions about your project</p></div>
                        
                        <form action="email.php" method="post" onSubmit={this.handleSubmit}>
                            <div className="mb-3">
                                <input type="text" className="cf-fields" placeholder="Your Name" name="name" value={this.state.value} onChange={this.handleChange} required/>
                            </div>
                            <div className="mb-3">
                                <input type="email" id="" className="cf-fields" placeholder="Email" name="email" value={this.state.value} onChange={this.handleChange} required/>
                            </div>
                            <div className="mb-3">
                                <textarea name="message" id="" cols="30" rows="3" placeholder="Your message" className="cf-fields" onChange={this.handleChange} required>

                                </textarea>
                            </div>
                            <div className="mb-3">
                                
                                    <input type="number" name="contact" className="cf-fields" id="inlineFormInputGroup" placeholder="Contact#" onChange={this.handleChange} required/>
                                
                                
                            </div>
                            <input type="submit" name="" id="" className="services-cta cf-submit g-recaptcha" data-sitekey="6LftMngaAAAAAI5Dr9lN8C_xlClVhzypLwfs-Rqu"  data-action='submit' />
                            {/* <Link to="/thankyou">
                                <button class="services-cta g-recaptcha" 
                                    data-sitekey="6LftMngaAAAAAI5Dr9lN8C_xlClVhzypLwfs-Rqu" 
                                    data-callback={this.handleSubmit} 
                                    data-action='submit'>Submit
                                </button>
                            </Link> */}
                                {/* <div>
                                {this.state.mailSent &&
                                <div>Thank you for contacting us.</div>}
                                </div> */}
                        </form>                
                    </div>
                </div>
            </div>
            
            <div className="container">
                <Link to="/">Home</Link>  &#xbb; <a href="/amazon-services-uk">Amazon Services UK</a>
            </div>
                        
            </div>
        );
    }
}