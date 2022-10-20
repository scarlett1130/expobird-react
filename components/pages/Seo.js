import React, { Component } from 'react';
import Banner from '../ui/seo-banner'
import ClientSection from '../clients'
import triple1 from '../../assets/111.jpg'
// import bannerImg from '../../assets/seo-layers.svg'
import pink from '../../assets/pink.svg'
import '../pages/seo.css'
import AnimatePopup from '../animatePopup'
import Portfolio from '../../components/portfolio'
import Icon1 from '../../assets/icon1.png'
import Icon2 from '../../assets/icon2.png'
import Icon3 from '../../assets/icon3.png'
import Icon4 from '../../assets/icon4.png'
import Icon5 from '../../assets/icon5.png'
import Icon6 from '../../assets/icon6.png'
import SEOFactor from '../../assets/SEO The X-Factor.png'
import SEOServicesPortfolio from '../../assets/SEO Services Portfolio.png'
import ContactForm from '../../components/ContactFormFooter'
import CtaFourth from '../pages/cta-fourth'
import Accordion from '../ui/Accordion'
import {Link} from "react-router-dom";
// import { FiHelpCircle } from 'react-icons/fi';
// import HelmetWrapper from '../Helmet';
import { Helmet } from 'react-helmet';
import Fade from 'react-reveal/Fade'
import Image5 from '../../assets/choose.png';
import Pentagon from '../../assets/pentagon.svg'

const styles111 = {
    backgroundImage : `url(${triple1})`,
    width: "100%",
    height: "400px",
}
export default class Seo extends Component{

    constructor(props){
        super(props);
        this.toggleClick = this.toggleClick.bind(this);
    }

    toggleClick(){
        let toggle = document.getElementById('seo-check');
        if(toggle.checked){
            document.getElementById('t-1').innerHTML = "<b>104,457</b>";
            document.getElementById('t-2').innerHTML = "<b>26,740</b>";
            document.getElementById('t-3').innerHTML = "<b>780%</b>";
            document.getElementById('t-4').innerHTML = "<b>80%</b>";
        }
        else{
            document.getElementById('t-1').innerHTML = "<b>15,555</b>";
            document.getElementById('t-2').innerHTML = "<b>8,997</b>";
            document.getElementById('t-3').innerHTML = "<b>0%</b>";
            document.getElementById('t-4').innerHTML = "<b>10%</b>";
        }
    }
    componentDidMount() {
        window.scrollTo(0, 0)
      }
     
    render(){
        return(
            <div>
                <Helmet>
                    <title>Professional Seo Services | Best Seo Digital marketing company</title>
                    <meta name="description" content="Are you looking for Best SEO services Karachi? ExpoBird award-winning top search engine Optimization Company provides Professional SEO services in Pakistan 2022."/>
                    <link rel="canonical" href="https://www.expobird.com/search-engine-optimization" />
                </Helmet>
                {/* <HelmetWrapper title={"Search Engine Optimization services in Pakistan | ExpoBird"} description={"We rank your website at the top of Google search result page in the brink of an eye. Getting top spot on the search engine result page is not difficult now."}/> */}
                <Banner/>
                <div className="container">
                    <Link to="/">Home</Link>  &#xbb; <Link to="/search-engine-optimization">Search Engine Optimization</Link>
                </div>
                <div className="row mt-5">
                <Fade bottom>
                    <div className="col-12 text-center">
                        <h3 className="text-center  mt-5 heading-page">SEO AUDIT IS MUST !!!</h3>
                        <p className="stats-Text py-3 px-1 px-md-5 mx-1 mx-md-5">As part of our work process for best SEO services in Karachi, Pakistan
, we undertake your website audit with respect to on page and off page SEO services and provide you a full-fledged professional SEO services and Audit report.</p>
                    </div>
                </Fade>    
                    <div className="col-12 col-md-1"></div>
                    <div className="col-12 col-md-10">
                        <div className="row my-5 text-center text-lg-left">
                            <div className="box p-4 col-12 col-sm-6 col-lg-4 mt-4">
                                <img className="iconSize" src={Icon1} alt="Best SEO services in Karachi, Search Engine Optimization Company"/>
                                <h4 className="fw mt-3 text-uppercase">on page SEO services</h4>
                                <small className="pTag py-3">
                                Once you are done with Targeted Keyword Mapping, it is time to put them in the right sequence all over your website that can catch the attention of search engines with Search Engine Optimization Company in Pakistan and targeted users. You have a fair chance to rank upright by using these keywords in your Headings, Title Tags, Meta Descriptions, Page Titles, Page Copy, and Alt Text.
                                <br/>
                                Your website’s URLs are another important factor for overall SEO optimization. Unlike the vast majority of the websites, your website should have proper links with respect to the relevance of the content of the page. Doing so, when search engines crawl the site based on your URLs, they will rank your website higher due to their relevance.

                                </small>
                            </div>
                            <div className="box p-4 col-12 col-sm-6 col-lg-4 mt-4">
                                <img className="iconSize" src={Icon2} alt="Best SEO services in Karachi, Search Engine Optimization Company"/>
                                <h4 className="fw mt-3 text-uppercase">website content</h4>
                                <small className="pTag py-3">
                                Does your site have unique content? Are you sure that there is no duplicate content on your site? What if your site is already penalized and blacklisted by google search engine? These are some of the areas that you need to look at very precisely in relation to website content and it’s very important for on page Professional SEO services in Pakistan.
                                <br/>
                                We have a team of experienced writers that produce SEO-friendly content for your website, whether creating share-worthy blog posts or optimizing pre-existing service and products pages with more content. So choose our top Search Engine Optimization company services to support your content needs.
                                </small>
                            </div>
                            <div className="box p-4 col-12 col-sm-6 col-lg-4 mt-4">
                                <img className="iconSize" src={Icon3} alt="Best SEO services in Karachi, Search Engine Optimization Company"/>
                                <h4 className="fw mt-3 text-uppercase">seo optimized content</h4>
                                <small className="pTag py-3">
                                Content plays a crucial part in on page SEO services and ranking; however, the quality of your content is paramount. Genuine content plays a much larger role than branding. Making content similar to that already available on Google decreases your chance of being highly ranked.
Make sure your content is valuable within the language and voice of your brand. It must, most importantly, be in line with Google's EAT principles. This refers to Expertise, Authoritativeness, and Trustworthiness, which Google uses to determine a web page's quality. This is accomplished by backing your content with statistics and facts, linking to trustworthy websites, and constantly updating your content to reflect the latest views.                            
                                </small>
                            </div>
                            <div className="box p-4 col-12 col-sm-6 col-lg-4 mt-4">
                                <img className="iconSize" src={Icon4} alt="Best SEO services in Karachi, Search Engine Optimization Company"/>
                                <h4 className="fw mt-3">on page and Off page SEO BACKLINKS</h4>
                                <small className="pTag py-3">
                                    Backlinks are the main recipe for ranking higher in search results, but not just any link! That’s why you should partner with a professional SEO services company in Pakistan like ExpoBird that has a dedicated link-building team and has connections with many high-quality and relevant websites. Backlinks of your websites are instrumental to rank your website at the top of the search engine result page. The higher the domain authority of the sites where backlinks are originated from, the higher will be your chances to appear at the top. Backlinks are considered a lifeline for your website’s on page and off page Best SEO services in Karachi.
                                </small>
                            </div>
                            <div className="box p-4 col-12 col-sm-6 col-lg-4 mt-4">
                                <img className="iconSize" src={Icon5} alt="Best SEO services in Karachi, Search Engine Optimization Company"/>
                                <h4 className="fw mt-3">INTERNAL BROKEN LINKS</h4>
                                <small className="pTag py-3">
                                One of the ways search engines rank your website is by crawling your web links. Dead links on your website would mean search engine spiders and algorithms won’t perform their functions on your site. Thus, these links will stop them from crawling your site and indexing it. With ExpoBird best SEO services in Karachi
, all links will be perfect. off page optimization is crucial in establishing brand credibility and increasing online exposure. Partner with our professional SEO Services in Pakistan and facilitate the demonstration of your industry expertise. Our social media marketing service, link building, and influencer marketing to get qualified links and positive ratings. Increase your customers’ lifetime value and grow your online revenue with ExpoBird professional SEO services in Karachi. Our Search Engine Optimization company strategist integrates pay-per-click marketing with our on page and off page to maximize your conversion opportunities. 
                                </small>
                            </div>
                            <div className="box p-4 col-12 col-sm-6 col-lg-4 mt-4">
                                <img className="iconSize" src={Icon6} alt="Best SEO services in Karachi, Search Engine Optimization Company"/>
                                <h4 className="fw mt-3">KEYWORDS SPAMMING</h4>
                                <small className="pTag py-3">
                                Using the right keywords excessively is termed the Black Hat on page SEO services technique. You should be very cautious while drafting the keyword strategy for your business. Using the right keywords is not enough for on page SEO services in Karachi, in fact, you need to use them wisely in terms of quality and quantity. 
                                <br/>
                                Primary keywords, as well as secondary keywords and long-tail keywords in on page SEO services in Karachi, must define your content strategy. Keywords with a long tail (keywords also known as key terms which are more specific and generally longer than the most frequently used keywords) make up around 70% of internet search results. They can greatly aid in gaining a competitive edge because they boast 36% of conversion rates. If you can make your keywords more relevant, your keywords are for your target audience, and you're better off to rank high. So ensure you write specific content that is tailored to the needs of your target audience. This all will be done by ExpoBird providing the best SEO services in Karachi.
                                </small>
                            </div>
                        </div>
                    </div>
                </div>

                
                <div className='row text-center text-lg-left'>
                <div className="col-12 col-sm-2 col-md-4 "></div>
                <div className="box p-4 col-12 col-sm-8 col-md-4">
                                <img className="iconSize" src={Icon6} alt="Best SEO services in Karachi, Search Engine Optimization Company"/>
                                <h4 className="fw mt-3">Artificial Intelligence for Search Engine Optimization</h4>
                                <small className="pTag py-3">
                                Artificial intelligence impacts the business world in many ways and how people interact with information on the internet. The reason for this transformation AI gives is the personalized experience it provides to users. Google uses AI to provide the exact results that users search for. The power of this tool lies in its ability to learn.
ExpoBird believes that it is possible to create more compelling content for your website through AI. Additionally, you can enhance your keyword research(on page SEO services), improve every digital platform, and increase the number of links that you can build.</small>
                            </div>
                <div className=" col-12 col-sm-2 col-md-4"></div>

                </div>
                <div className="my-5">
                    <Fade>
                        <ClientSection/>
                    </Fade>
                </div>     
               
                <Portfolio
                    image={SEOServicesPortfolio} 
                    subheading1="With our Best SEO services in Karachi, Pakistan, transform your marketing strategy and discover your business's new leads. We at ExpoBird revamped many websites, revised content strategy, and incorporated data-backed SEO digital marketing approaches into every move we do in the last few years. Consider some of our client success stories, as well as our own performance metrics"   
                />
                <CtaFourth className="cta-image-right"
                    // heading="SEO – The X-FACTOR for YOUR BRAND"
                    subheading="SEO – The X-FACTOR for YOUR BRAND"
                    paragraph="When everyone around you is selling the same kind of product and service, when everyone is throwing the same promotions and discounts offers when everyone is reaching the target audience through the same platform, then what is that one factor that could give you an edge over your rivals in this saturated market? on page and off page SEO services is a complicated but vital aspect for businesses that want to be competitive on the internet. SEO digital marketing trends are a good way to earn more revenue, and you must be aware of them. If you're looking to stand out from your competitors, make sure you use these strategies correctly. For over 7 fruitful years, ExpoBird has been helping businesses with its best SEO services in Karachi, across all industries to grow their online presence to increase revenue. We have the experience and successes of our clients to support businesses of all sizes looking to increase online traffic and develop their leads. Get to know ExpoBird professional SEO services in Karachi well, and they will know your business and understand your unique needs. We live by our two core values: relationships and results. We are there for every customer for best SEO services in Karachi that you need."
                    image={SEOFactor}
                    button="Rank Your Website Now"
                />
                <div className="row mb-5">

                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 mb-3 text-center">
                        <div className="cta-image-right mt-5" >
                            <img className="slight-br mt-5" src={Image5} alt="Best SEO services in Karachi, Search Engine Optimization Company"/>
                        </div>
                        <div className="pentagon">
                            <img src={Pentagon} alt="Best SEO services in Karachi, Search Engine Optimization Company"/>
                        </div>
                    </div>

                    <div  class="heading-page-2 col-xs-12 col-sm-12 col-md-12 col-lg-5 text-center text-lg-left  p-3 p-sm-5">
                            <h3 className="BlogPage-Header my-4">We Put Customers In Your Hands</h3> 
                            <p className="margin-bottom8 p-style ">
                            The only way to fight this battle is to have a top rank on Search Engine, Google search engine to be more specific because this is the default home page for more than 90% of the world visitors. As long as you are appearing on the top searches of the google result page, more are the chances that people will buy from you. This breaks the backbone of your competitor and earns you a high market share and hence, more profits with Our SEO digital marketing services in Karachi. To ensure that your website has a top-quality SEO ranking, There are various aspects you should be aware of. This includes backlinks, social shares, traffic, and more. But these on page and off page professional SEO services elements are continuously changing due to Google algorithmic changes. What is working today might not be effective, be the case tomorrow. 
                            </p>
                            <Link to="/contact-us">
                                <button className="services-cta mt-3"> Rank Your Website Now</button>
                            </Link>
                    </div>
                    <div className="col-12 col-lg-1"></div>
                </div>

                 
                <div className="row mt-5 ">
                    <div className="col-12 text-center ch mt-5 seo-cta">
                        <h3 className="text-white fw lets-work mb-3">Let's Work Together!</h3>
                        <p className="text-white pTag px-5 mx-5">Your Business SEO Digital Marketing Solutions to Drive Your Business Forward</p>
                        <Link to="/contact-us"><button className="white-btn mt-3">Get a Quote Now</button></Link>
                        {/* <div className="wave-image">
                            <img src={bannerImg}   alt=""/>
                        </div> */}
                        <div id="seo-cta-pink">
                            <img src={pink} alt="Best SEO services in Karachi, Search Engine Optimization Company"/>
                        </div>
                    </div>
                </div>
               
                <div className="row my-5">
                    <div className="col-12 text-center">
                        <h2 className="text-center fw mt-5 BlogPage-Header px-5">Keep Your Expectations Higher from ExpoBird provides the top class SEO Services in Pakistan</h2>
                    </div>
                    <div className="col-1"></div>
                    <div className="col-10 text-center">
                        <p className="pTag py-3">Our on page and off page SEO services team will work with you to understand your SEO services that allow them to create a custom-tailor strategy for your business to maximize the return on your investment. Not only in Karachi only but nationwide service is available. Enhance your online visibility and earn high-quality traffic on the website. At ExpoBird, we ensure our SEO digital marketing services in Pakistan align with Google algorithm best practices to spice up your website’s trustworthiness. Additionally, our SEO services in Karachi experts publish unique, value-rich content, optimize your headlines and HTML tags and utilize high-resolution images with SEO-optimized image content and ALT text. We have on page SEO services experts specializing in helping businesses of all sizes with different industries. Our top Search Engine Optimization company is proactive and not reactive. We always play fair, using White Hat SEO to achieve results free of spam and system games that could lead to possible Google penalties.</p>
                    </div>
                    <div className="col-1"></div>
                </div>

                <div className="row">
                        <div className="col-12 text-center">
                            <span id="b-seo">Before S.E.O </span>
                            <label className="switch">
                                <input onClick={this.toggleClick} id="seo-check" type="checkbox" />
                                <span className="slider round"></span>
                            </label>
                            <span id="a-seo">After S.E.O </span>
                        </div>
                        <div className="col-1"></div>
                        <div className="col-10">
                            <div className="row my-5 text-center">
                                <div className="col-12 col-sm-6 col-lg-3">
                                    <div className="card-seo" >
                                        <h6 id="t-1" className="seoCard"><b>15,555</b></h6>
                                        <p>Search Traffic</p>
                                        {/* <img src="https://victoriousseo.com/app/themes/victorious/dist/images/small-chart-bg_c141fc16.png" alt=""/> */}
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-lg-3 mt-5 mt-sm-0 mt-lg-0">
                                    <div className="card-seo">
                                        <h6 id="t-2" className="seoCard"><b>8,997</b></h6>
                                        <p>Conversion Rate</p>
                                        {/* <img src="https://victoriousseo.com/app/themes/victorious/dist/images/small-chart-bg_c141fc16.png" alt=""/> */}
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-lg-3 mt-5 mt-lg-0">
                                    <div className="card-seo">
                                        <h6 id="t-3" className="seoCard"><b>0%</b></h6>
                                        <p>Top Keywords</p>
                                        {/* <img src="https://victoriousseo.com/app/themes/victorious/dist/images/small-chart-bg_c141fc16.png" alt=""/> */}
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-lg-3 mt-5 mt-lg-0">
                                    <div className="card-seo">
                                        <h6 id="t-4" className="seoCard"><b>10%</b></h6>
                                        <p> Online leads</p>
                                        {/* <img src="https://victoriousseo.com/app/themes/victorious/dist/images/small-chart-bg_c141fc16.png" alt=""/> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-1"></div>
                </div>
                <AnimatePopup
                            // text1="So what’s your next move?"
                            heading1="Get your goal-crushing SEO digital marketing services now that checkmate your opponents and bring you at the top of the search engine result page on your on page SEO services top keywords                            "
                            button1="Talk to SEO Strategist Now"
                        />
                <div className="row my-5 ">
                            <div className="col-12">
                                <h3 className="text-center heading-page mb-5">FAQ's</h3> 
                            </div>
                            <div className="col-1"></div>
                            <div className="col-10">
                                <Accordion title="Why do on page and off page SEO services take time before I see the benefits?" desc="This is because search engine algorithms are getting more advanced every single day with laser-focused on delivering the most relevant content to the users based on their search query. They have a long list to crawl before considering a website for the top rank on the result page from our SEO services in Karachi. Therefore, it takes time both for the search engine and the company itself to tick all the boxes."/>
                                <br/>
                                <Accordion title="How much time does it take to start seeing the results?" desc="It depends on the industry you are working in. The top SEO digital marketing services in Pakistan companies tend to believe that it takes more than a year to start seeing the results and more than a year to see the expected results. "/>
                                <br/>

                                <Accordion title="Why are keywords important?" desc="Without the right keywords, it is near to impossible to drive valuable traffic on your website. No search engine will be able to rank your website because they will be confused about what SEO services in Pakistan you actually provide and what to show to the visitors based on their queries."/>
                                <br/>
                                <Accordion title="What other factors are important in on page SEO services other than keywords?" desc="There are not only on page SEO services factors but off page as important as on page. It includes Site speed, URLs, meta tags, title text, headings, site structure, backlinks, internal broken links, website content etc."/>
                                <br/>
                                
                            </div>
                            <div className="col-1"></div>
                        </div>
                <ContactForm/>
                <div className="container">
                    <Link to="/">Home</Link>  &#xbb; <Link to="/search-engine-optimization">Search Engine Optimisation</Link>
                </div>
            </div>
        )
    }
} 
