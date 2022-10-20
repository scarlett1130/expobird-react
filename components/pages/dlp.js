import { render } from '@testing-library/react';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class DataLeakagePolicy extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render(){
    return ( 

        <div>
            <div className="row background-2">
                    <div className="container text-center">
                    <h1 id="heading-main">Data Leakage Prevention Policy</h1>
                    <div className="container text-center linkText">
                        <Link className="linkText" to="/">Home</Link>  &#xbb; <Link className="linkText" to="/data-leakage-prevention-policy">Data Leakage Prevention Policy</Link>
                    </div>
                </div>
            </div>
            <div className="row my-5 p-4 p-sm-5">
                <div className="col-12 col-lg-3"></div>
                <div className="col-12 col-lg-6 privacyCard p-4 p-sm-5">
                    <div className=" pb-4">
                        <h2 className="PrivacyHeading">Data Leakage Prevention Policy</h2>
                    </div>
                    <div className="bulliten">
                    <ul>
                        <li className="pp-text">
                        ExpoBird safeguards the information of every client it works with and stops end-users
from leaking sensitive data outside the network. We use tools to track data shared and
accessed by end users.
                        </li>
                        <li className="pp-text">Employees have many ways to share and access distributed data, making inadvertent
data loss a pressing issue. Therefore we use different softwares and methodologies
where no one except from the top management can have super-user access to sensitive
information.</li>
                        <li className="pp-text">Although no protection is absolute, best practices allow us to implement a successful
data protection policy.</li>
                        <li className="pp-text">Identify data that requires protection, see which information requires protection, by
classifying, prioritizing, and interpreting data based on its vulnerability and risk
factors.</li>
                        <li className="pp-text">Understand how to assess vendors, establish a framework with relevant questions to
make an informed purchasing decision.
</li>
                        <li className="pp-text"> Specify the roles of all parties involved, outline the role of every individual to prevent
data misuse.</li>
                        <li className="pp-text">
                        Monitoring data movement, understand how data is used and identify behaviour that
puts data at risk.
                        </li>
                        <li className="pp-text">
                        Educate the workforce, we tend to view employees as the weak link in data loss
prevention. So we educate them to understand the policy and its importance.
                        </li>
                    </ul>
                    </div>
                </div>
                <div className="col-12 col-lg-3"></div>
            </div>
        </div>
    );
    }
}
 
export default DataLeakagePolicy;