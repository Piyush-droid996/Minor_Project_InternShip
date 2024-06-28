import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
//import { Routes, Route, BrowserRouter} from 'react-router-dom';
import './assets/style/pricing_table.css';

const PricingDigitalMarketing = () => {
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
    return(
        <section>
        <div class="container-fluid">
            <div class="container">
                <div class="container-heading">
                    <h1>Digital Marketing Packages</h1>
                    <p>Webhubzone provides a very affordable digital marketing package in India. We offer digital
                        marketing services in many cities just like Jaipur, Delhi, Mumbai, Chennai, Bangalore, Hyderabad
                        and Kolkata. Our digital marketing packages start from INR 26000/Month and they are
                        so much in demand in India. These are many digital marketing services including SEO, SMM, Paids
                        Ads Management, Blog Writing, Lead Generations Campaign, Online Reputations Management, App
                        Installation Etc.

                        In order to help you reach your target audience, we have developed various customized digital
                        marketing packages. These packages are suitable for any size company whether it's small, a
                        startup, or an enterprise. To grow your business, you need proper marketing strategies and an
                        affordable digital marketing package.</p>
                </div>
                <div class="pricing-area">
                    <div class="row">
                        <div class="col-sm-3">
                            <div class="price-table">
                                <div class="price-head">
                                    <h4>SEO PACKAGES</h4>
                                    <h6>Best For Individuals</h6>
                                </div>
                                <div class="price-content">
                                    <ul>
                                        <li><strong> Min. Contract 4
                                                Months - 1 Year</strong></li>
                                        <li class="ami-price"><i class="fa fa-hand-o-right"></i> Top 10 Guarantee - 40%*
                                            - 70%*</li>
                                        <li class="ami-price"><i class="fa fa-hand-o-right"></i> Initial Research</li>
                                        <li class="ami-price"><i class="fa fa-hand-o-right"></i> Local SEO </li>
                                        <li class="ami-price"><i class="fa fa-hand-o-right"></i> Off Page SEO </li>
                                        <li class="ami-price"><i class="fa fa-hand-o-right"></i> On Page SEO</li>
                                        <li class="ami-price"><i class="fa fa-hand-o-right"></i> Status And Report
                                        </li>


                                        <Link to="/pricing/DigitalMarketing/SEO"><li class="price-button"> <a href="/pricing/DigitalMarketing/SEO">Explore</a></li></Link>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-3">
                            <div class="price-table">
                                <div class="price-head">
                                    <h4>SMO PACKAGES</h4>
                                    <h6>Best For Individuals</h6>
                                </div>
                                <div class="price-content">
                                    <ul>
                                        <li><strong>Min. Contract 1 Month</strong></li>
                                        <li class="ami-price"><i class="fa fa-hand-o-right"></i> Instagram Marketing
                                        </li>
                                        <li class="ami-price"><i class="fa fa-hand-o-right"></i> Facebook Marketing
                                        </li>
                                        <li class="ami-price"><i class="fa fa-hand-o-right"></i> Twitter Marketing </li>
                                        <li class="ami-price"><i class="fa fa-hand-o-right"></i> Pinterest Marketing
                                        </li>
                                        <li class="ami-price"><i class="fa fa-hand-o-right"></i> Linkedin Marketing
                                        </li>
                                        <li class="ami-price"><i class="fa fa-hand-o-right"></i> YouTube Marketing </li>

                                        <Link to="/pricing/DigitalMarketing/SMO"><li class="price-button"> <a href="/pricing/DigitalMarketing/SMO">Explore</a></li></Link>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-3">
                            <div class="price-table">
                                <div class="price-head">
                                    <h4>SMM PACKAGES</h4>
                                    <h6>Best For Individuals</h6>
                                </div>
                                <div class="price-content">
                                    <ul>
                                        <li><strong>Min. Contract 1 Month</strong></li>
                                        <li class="ami-price"><i class="fa fa-hand-o-right"></i> Ads Budget - Rs 50,000
                                            Up to
                                            5
                                            Lakh Budget Per Month </li>
                                        <li class="ami-price"><i class="fa fa-hand-o-right"></i> Account Management
                                        </li>
                                        <li class="ami-price"><i class="fa fa-hand-o-right"></i> Creation Of Campaign
                                        </li>
                                        <li class="ami-price"><i class="fa fa-hand-o-right"></i> Ads Creative Creation &
                                            Design
                                        </li>
                                        <li class="ami-price"><i class="fa fa-hand-o-right"></i> Ads Monitoring And
                                            Management
                                        </li>
                                    </ul>
                                </div>
                                <Link to="/pricing/DigitalMarketing/SMM" ><div class="price-button"> <a href="/pricing/DigitalMarketing/SMM">Explore</a></div></Link>
                            </div>
                        </div>
                        <div class="col-sm-3">
                            <div class="price-table">
                                <div class="price-head">
                                    <h4>PPC PACKAGES</h4>
                                    <h6>Best For Individuals</h6>
                                </div>
                                <div class="price-content">
                                    <ul>
                                        <li><strong>Min. Contract 1 Month</strong></li>
                                        <li class="ami-price"><i class="fa fa-hand-o-right"></i> Ad Budget 5000 to More
                                            Than 1
                                            Lakh</li>
                                        <li class="ami-price"><i class="fa fa-hand-o-right"></i> All Network Account
                                            Set-up
                                            (Google Ads, Facebook) </li>
                                        <li class="ami-price"><i class="fa fa-hand-o-right"></i> All Ads(Text, Display)
                                        </li>
                                        <li class="ami-price"><i class="fa fa-hand-o-right"></i> Competitor Analysis
                                        </li>
                                        <li class="ami-price"><i class="fa fa-hand-o-right"></i> A/B Testing</li>


                                        <Link to="/pricing/DigitalMarketing/PPC" ><li class="price-button"> <a href="/pricing/DigitalMarketing/PPC">Explore</a></li></Link>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}

export default PricingDigitalMarketing;