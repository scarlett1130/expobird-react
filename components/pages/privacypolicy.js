import { render } from '@testing-library/react';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Privacypolicy extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render(){
    return ( 

        <div>
            <div className="row background-2">
                    <div className="container text-center">
                    <h1 id="heading-main">Privacy Policy</h1>
                    <div className="container text-center linkText">
                        <Link className="linkText" to="/">Home</Link>  &#xbb; <Link className="linkText" to="/privacy-policy">Privacy Policy</Link>
                    </div>
                </div>
            </div>
            <div className="row my-5 p-4 p-sm-5">
                <div className="col-12 col-lg-3"></div>
                <div className="col-12 col-lg-6 privacyCard p-4 p-sm-5">
                    <div className=" pb-4">
                        <h1 className="PrivacyHeading">Privacy Policy</h1>
                    </div>
                    <p className="pp-text pb-4">
                    Privacy is important to us. Therefore, ExpoBird Digital Marketing's policy is to respect your privacy regarding any information we may collect from you across our website,<span> <Link className='text-decoration-none pp-text' to="/">https://www.expobird.com/</Link></span> , and other sites we own and operate.
                    </p>
                    <h2 className="PrivacyHeading">
                    We gather information
                    </h2>
                    <h3 className="text-left pt-4 pb-3 privacy-Subheading">
                    Log data
                    </h3>
                    <p className="pp-text">
                    If you visit our site, Our servers can automatically record the basic data supplied by your web browser. The data we collect is deemed "non-identifying information", as it doesn't personally identify you by itself. It could comprise your PC's Internet Protocol (IP) address as well as your browser's type as well as the version you are using, websites which you access, date as well as the date you visited, as well as the length of time spent on each site and any other information.<br/>
                    <br/>
                    We also gather information about the device that you are using to visit our site. This information could include the type of device, the operating system and unique device identifiers, the settings of your device, and geolocation information. The information we gather will depend on the specific configurations of the device and the software. Therefore, it is recommended to review the policies of the device manufacturer or software provider to understand the information they provide to us.
                    </p>
                    <h3 className="text-left pt-4 pb-3 privacy-Subheading">
                    Personal information
                    </h3>
                    <p className="pp-text">
                    We might ask for your personal information, including your:
                    </p>
                    <ul>
                        <li className="pp-text">Name</li>
                        <li className="pp-text">Email</li>
                        <li className="pp-text">Social media profiles</li>
                        <li className="pp-text">Phone/mobile number</li>
                        <li className="pp-text">Address for work</li>
                        <li className="pp-text">Information on payment</li>
                    </ul>
                    <p className="pp-text">
                    This information is regarded as "identifying information", as it can identify you personally. We will only collect details relevant to providing the service you need, and we only use them to improve or provide the quality of this service.
                    </p>
                    <h3 className="text-left pt-4 pb-3 privacy-Subheading">
                    What information do we collect?
                    </h3>
                    <p className="pp-text">
                    We collect data using legitimate and legal means that are based on your consent and knowledge. We inform you of the reason we're collecting information and the way we'll use it. You have the option of denying our request to collect this information but knowing that you might be unable to provide the desired services without this information.
                    </p>

                    <h3 className="text-left pt-4 pb-3 privacy-Subheading">
                    Information use
                    </h3>
                    <p className="pp-text">
                    We may employ a mix of non-identifying and identifying data to learn who our customers are, how they use our services and how we can improve the user experience on our website in the future. We do not share the particulars of this data with the public, but we do share anonymised and aggregated versions of this data, such as in customer and website use trends reports.
<br/>
                    <br/>
                    We can use your personal information to send you news about our site and products and promotional content we believe could be relevant to you. If you want to unsubscribe from receiving promotional emails, then adhere to the "unsubscribe" instructions provided alongside any correspondence we send out to you with promotional content.

                    </p>

                    <h3 className="text-left pt-4 pb-3 privacy-Subheading">
                    Processing and storage of data
                    </h3>
                    <p className="pp-text">
                    The information we collect about you is processed and stored in the United States, or where we, our affiliates, partners, and third-party providers have facilities. We only transfer data to areas that are subject to data protection laws that reflect our dedication to safeguarding the privacy of our customers.
                    <br/>
                    <br/>
                    We will only keep personal data for the period needed to provide the service or to enhance our services in the future. When we keep this information and protect it, we do so using commercially acceptable methods to avoid theft and loss and unauthorised access to, disclosure, copying and use, or alteration. However, we caution that any storage or electronic transmission method is entirely secure, and we cannot ensure absolute data security.
                    <br/>
                    <br/>
                    Suppose you request that your personal information be erased, or the information you provide is irrelevant to our business operations. In that case, We will remove the information from our database within a reasonable period of time.
                    </p>

                    <h3 className="text-left pt-4 pb-3 privacy-Subheading">
                    Cookies
                    </h3>
                    <p className="pp-text">
                    We make use of "cookies" to collect information about your activities on our website. Cookies are a tiny amount of data our website saves on your device and retrieves every time you visit to know how you interact with our website. This allows us to provide you with content according to the preferences you've specified. 
                    </p>
                    

                    <h3 className="text-left pt-4 pb-3 privacy-Subheading">
                    Third-party access to data
                    </h3>
                    <p className="pp-text">
                    We make use of third-party services to:
                    </p>
                    <ul>
                        <li className="pp-text">Analytics tracking</li>
                        <li className="pp-text">User authentication</li>
                        <li className="pp-text">Advertising and marketing</li>
                        <li className="pp-text">Marketing content</li>
                        <li className="pp-text">Email marketing</li>
                        <li className="pp-text">Payment processing</li>
                    </ul>
                    <p className="pp-text">
                    The services they use may have access to our data only to complete specific tasks for us. We will not provide any personal details of the service without your express consent. We don't grant them the right to share or use our data for any other reason.
From time to time, grant restricted access to our data by consultants and other agencies for analysis and service improvement. The access granted is only valid for the duration required to fulfil a particular task. We only work with outside agencies whose privacy policies match with ours.
                    <br/>
                    We will deny government and police requests to collect information when we think a request is excessively broad or not relevant to the stated goal. However, we are willing to help if that the sought-after information is needed and necessary to follow legal procedures, to protect our properties and rights, or to safeguard the security of the general public and anyone else, to prevent an offence or prevent something we believe to be unlawful legal, legally appropriate, or illegal activity.
<br/>
We do not give or sell your personal information to any third-party companies. Likewise, we do not rent or sell your data to marketers or other third-party companies.
                    </p>

                    <h3 className="text-left pt-4 pb-3 privacy-Subheading">
                    Children's privacy
                    </h3>
                    <p className="pp-text">
                    Our company is committed to safeguarding the privacy of children using our services. We urge parents to work with us to protect their children's privacy while making sure they have a safe, fun online adventure. We invite you to read our Privacy and Security Policy for Children for further details. 
                    </p>

                    
                    <h3 className="text-left pt-4 pb-3 privacy-Subheading">
                    The policy's limitations
                    </h3>
                    <p className="pp-text">
                    This privacy policy is only for ExpoBird Digital Marketing's collection and processing of information. We only cooperate with affiliates, partners, and third-party service providers who have privacy policies in line with ours. We do not accept any responsibility or responsibility for their privacy policies.
<br/>
                    <br/>
                    Our website may contain links to other websites which we do not control. Be aware that we do not have control over the contents and policies of these sites, and we cannot assume responsibility or assume liability for their privacy policies.
                    </p>
                    
                    <h3 className="text-left pt-4 pb-3 privacy-Subheading">
                    Modifications to this policy
                    </h3>
                    <p className="pp-text">
                    At our absolute discretion, we can modify our privacy policies by current standards of conduct. We will be able to inform users of any changes through our website. If you are a registered user on <span> <Link className='text-decoration-none pp-text' to="/">https://www.expobird.com/</Link></span>, we will notify you using the contact details saved in your account. If you continue to use this website following any modifications of this statement, you will accept our policies concerning privacy and personal information. 
                    </p>

                    <h3 className="text-left pt-4 pb-3 privacy-Subheading">
                    Your rights and obligations
                    </h3>
                    <p className="pp-text">
                    As a customer, as a user, you are entitled to know how your information is processed and stored. You have the right to know the information we gather about you and how it is used. You have the right to correct and amend any personal data regarding you and to request that the information you provide us is removed. You can modify or erase the information on your account at any time using the tools within your account control panel.
<br/>
                    <br/>
                    You are entitled to limit or deny our processing of your information, but you retain the right to use your data for personal use. You are entitled to remove yourself from data regarding you being used for making decisions solely based on an automated process.
Don't hesitate to contact us with any questions or concerns about how we handle your data and information.
                    </p>

                    <h3 className="text-left pt-4 pb-3 privacy-Subheading">
                    Cookie Policy
                    </h3>
                    <p className="pp-text">
                    We use cookies to help improve your experience of <span> <Link className='text-decoration-none pp-text' to="/">https://www.expobird.com/</Link></span>. This policy on cookies is part of the privacy policies for Rawson Internet Marketing.
<br/>
                    <br/>
                    Guidelines cover how cookies are used that are shared between the device you are using and our website. We also provide information about any third-party service we use that might also utilize cookies connected with their services, although they aren't included in our policy.
                    </p>
                    <br/>
                    <p className="pp-text">
                    If you don't wish to accept cookies from us, you should instruct your browser to refuse cookies from <span> <Link className='text-decoration-none pp-text' to="/">https://www.expobird.com/</Link></span>, with the understanding that we may be unable to provide you with some of your desired content and services.
                    </p>
                </div>
                <div className="col-12 col-lg-3"></div>
            </div>
        </div>
     );
}
}
 
export default Privacypolicy;