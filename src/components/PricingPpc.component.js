import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
//import { Routes, Route, BrowserRouter} from 'react-router-dom';
import './assets/style/pricing_table.css';


const PricingPpc = () => {
    
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    return(
        <section class="table-section">
        <div class="container-fluid">
            <div class="container-pricing-table">
                <div class="container-heading">
                    <h1>PPC Packages</h1>
                    <p>We offer you the best PPC packages in India through our Webhubzone of Digital Marketing company
                        in Jaipur. Get quality PPC (Google Ads, Facebook/Instagram Ads) management services by our
                        certified PPC experts team. You must buy India's Best PPC Package If you are still low on ad
                        conversion, leads or traffic or revenue to Your Website. Our team will help your business grow
                        by
                        making your website or brand more visible through Facebook/Instagram or Google Ads. Apart from
                        Google Ads, We provide PPC for Facebook, LinkedIn, Instagram and other platforms. Our quality
                        PPC packages are perfect for your esteemed organisation if you're looking to generate maximum
                        business enquiries or sales.</p>
                </div>
                <div class="pricing-area ">
                    <div class="row">
                        {/* <!----------1st package start-------------> */}
                        <div class="col-sm-4">
                            <div class="price-table">
                                <div class="price-head">
                                    <h4>Basic PPC Plan</h4>
                                    <h6>₹ 11999 INR/M</h6>
                                </div>
                                <div class="price-content">
                                    <ul>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i>Ad Budget Less than
                                            INR 50000/M</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Any 1 Network Account
                                            Set-up
                                            (Google Ads, Facebook/Instagram)</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Upto 50 Keywords</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Contract Min. 30 Days
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i>Text Ads</li>

                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Display Ads
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Shopping Ads</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> App Installation Ads
                                        </li>
                                        <li class="ami-price">
                                            <i class="fa fa-check clrright"></i> Landing Page Selection
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> GEO Targeting Setup
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Setup Conversion Code
                                        </li>
                                        <li class="ami-price"><i class="fa fa-close clrclose"></i> Competitor Analysis
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Keyword Optimization
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Ad Copy Optimization
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Keyword Bid
                                            Optimization</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Landing Page
                                            Optimization Consultation</li>
                                        <li class="ami-price"><i class="fa fa-close clrclose"></i> Landing Page Design
                                        </li>
                                        <li class="ami-price"><i class="fa fa-close clrclose"></i> CTR Analysis
                                        </li>
                                        <li class="ami-price"><i class="fa fa-close clrclose"></i> A/B Testing</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Keyword Refinements
                                            (if required)</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Bid Refinements (if
                                            required)</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Google Analytics
                                            Setup Basic</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Google Ads Conversion
                                            Setup
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Weekly Reports</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Monthly Reports
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i>Advanced Reports
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Shared Account
                                            Manager
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Support
                                            Email, Chat & Call</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Landing Page Creation
                                            INR 3500 Extra</li>

                                        <Link to="/contact"><li class="price-button"> <a href="/contact">Proceed Now</a></li></Link>
                                    </ul>
                                </div>

                            </div>

                        </div>
                        {/* <!-----------1st end---------------->
                        <!---------------2nd start---------------> */}
                        <div class="col-sm-4">
                            <div class="price-table">
                                <div class="price-head">
                                    <h4>Standard</h4>
                                    <h6>₹ 20% of Total Budget</h6>
                                </div>
                                <div class="price-content">
                                    <ul>

                                        <li class="ami-price"><i class="fa fa-check clrright"></i>Ad Budget 51k to 1
                                            Lakh/M</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> All Network Account
                                            Set-up
                                            (Google Ads, Facebook/Instagram)</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Upto 100 Keywords
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Contract Min. 30 Days
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Text Ads</li>

                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Display Ads
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Shopping Ads</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> App Installation Ads
                                        </li>
                                        <li class="ami-price">
                                            <i class="fa fa-check clrright"></i> Landing Page Selection
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> GEO Targeting Setup
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Setup Conversion Code
                                        </li>
                                        <li class="ami-price"><i class="fa fa-close clrclose"></i> Competitor Analysis
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Keyword Optimization
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Ad Copy Optimization
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Keyword Bid
                                            Optimization</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Landing Page
                                            Optimization Consultation</li>
                                        <li class="ami-price"><i class="fa fa-close clrclose"></i> Landing Page Design
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> CTR Analysis
                                        </li>
                                        <li class="ami-price"><i class="fa fa-close clrclose"></i> A/B Testing</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Keyword Refinements
                                            (if required)</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Bid Refinements (if
                                            required)</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Google Analytics
                                            Setup Basic</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Google Ads Conversion
                                            Setup
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Weekly Reports</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Monthly Reports
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Advanced Reports
                                        </li>
                                        <li class="ami-price"><i class="fa fa-close clrclose"></i> Dedicated Account
                                            Manager
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Support
                                            Email, Chat & Call</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Landing Page Creation
                                            INR 3500 Extra</li>
                                        <Link to="/contact"><li class="price-button"> <a href="/contact">Proceed Now</a></li></Link>
                                    </ul>
                                </div>

                            </div>
                        </div>
                        {/* <!-----------------2nd end------------------>
                        <!---------------3rd start--------------------> */}
                        <div class="col-sm-4">
                            <div class="price-table">
                                <div class="price-head">
                                    <h4>Professional</h4>
                                    <h6>₹ 15% of Total Budget</h6>
                                </div>
                                <div class="price-content">
                                    <ul>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i>Ad Budget More Than 1
                                            Lakh/M</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> All Network Account
                                            Set-up
                                            (Google Ads, Facebook/Instagram)</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Unlimited Keywords
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Text Ads</li>

                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Display Ads
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Shopping Ads</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> App Installation Ads
                                        </li>
                                        <li class="ami-price">
                                            <i class="fa fa-check clrright"></i> Landing Page Selection
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> GEO Targeting Setup
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Setup Conversion Code
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Competitor Analysis
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Keyword Optimization
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Ad Copy Optimization
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Keyword Bid
                                            Optimization</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Landing Page
                                            Optimization Consultation</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Landing Page Design
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> CTR Analysis
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> A/B Testing</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Keyword Refinements
                                            (if required)</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Bid Refinements (if
                                            required)</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Google Analytics
                                            Setup Basic</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Google Ads Conversion
                                            Setup
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Weekly Reports</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Monthly Reports
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Advanced Reports
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Dedicated Account
                                            Manager
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Support
                                            Email, Chat & Call</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Landing Page Creation
                                            INR 3500 Extra</li>
                                        <Link to="/contact"><li class="price-button"> <a href="/contact">Proceed Now</a></li></Link>
                                    </ul>
                                </div>

                            </div>
                        </div>
                        {/* <!----------------3rd end------------------------> */}

                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default PricingPpc;