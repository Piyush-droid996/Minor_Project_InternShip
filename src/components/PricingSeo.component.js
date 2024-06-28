import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
//import { Routes, Route, BrowserRouter} from 'react-router-dom';

import './assets/style/pricing_table.css';

const PricingSeo = () => {

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    return(
        <section class="table-section">
        <div class="container-fluid">
            <div class="container-pricing-table">
                <div class="container-heading">
                    <h1>SEO Packages</h1>
                    <p>The Digital Marketing department at Webhubzone provides affordable SEO packages in all Indian
                        cities like Jaipur, Delhi, Chennai, Mumbai, Kolkata, Hyderabad, and Bangalore to domestic
                        clients. Our SEO packages are in most demanded in India, which is affordable for even small
                        businesses. Custom packages are also available for particular On-Page SEO packages or Off-Page
                        SEO packages. When you get more leads through the website, you'll see your business grow as a
                        result of these quality SEO packages.<br></br>

                        If your goal is to rank on the first page of Google or any search engine. Depending on the
                        number of keywords and the size of your business, choose the best SEO package at an affordable
                        SEO price. We offer four types of SEO package are: Basic SEO Plan, Standard SEO Plan,
                        Professional
                        SEO Plan, and Enterprise SEO Plan. INR 1000/Keyword is the starting price for a basic SEO
                        package.</p>
                </div>
                <div class="pricing-area ">
                    <div class="row">
                        {/* <!----------1st package start-------------> */}
                        <div class="col-sm-3">
                            <div class="price-table">
                                <div class="price-head">
                                    <h4>Basic SEO Plan</h4>
                                    <h6>₹ 14999 / Month (15 Keywords)</h6>
                                </div>
                                <div class="price-content">
                                    <ul>
                                        <li class="ami-price"><i class="fa fa-hand-o-right"></i><strong> Min. Contract 4
                                                Months</strong></li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Local & National
                                            SEO</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Minimum
                                            8 Keywords</li>
                                        <li class="ami-price"><i class="fa fa-hand-o-right"></i><strong> Top 10
                                                Guarantee
                                                -
                                                40%*</strong>
                                        </li>
                                        <li class="ami-price"><i class="fa fa-hand-o-right"></i><strong> Initial
                                                Research
                                                And
                                                Analysis</strong></li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Business Analysis
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> In-depth Website
                                            Study
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Competitor Analysis
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Content Duplicacy
                                            Check
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Initial Backlinks
                                            Analysis</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Google Penalty Check
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Website Speed
                                            Analysis
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Keyword Research</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Canonicalization</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Website Page Load
                                            Optimization</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Initial Report</li>
                                        <li class="ami-price"><i class="fa fa-hand-o-right"></i><strong> On Page
                                                SEO</strong></li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Title Tags
                                            Optimization
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> URL Optimization</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Internal linking &
                                            Optimization</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Image & ALT Tag
                                            Optimization</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Content Optimization
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Robots.txt Creation
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> HTML & XML Sitemap
                                            Submission</li>
                                        <li class="ami-price"><i class="fa fa-close"></i> Schema For Contact</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Google Search Console
                                        </li>
                                        <li class="ami-price"><i class="fa fa-close"></i> Bing Webmaster Tools</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Google Analytics</li>
                                        <li class="ami-price"><i class="fa fa-close"></i> HTML Code Cleanup & Optimization</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Location Based Page
                                            Optimisation</li>
                                        <li class="ami-price"><i class="fa fa-hand-o-right"></i><strong> Local
                                                SEO</strong>
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Google My Business
                                            Setup and Verification</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Google Places
                                            Optimization</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Google My Business
                                            Customer Reviews/ratings</li>
                                        <li class="ami-price"><i class="fa fa-close"></i> Bing local listing
                                        </li>

                                        <li class="ami-price"><i class="fa fa-hand-o-right"></i><strong> Off Page
                                                SEO</strong></li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Blog Writing &
                                            Submission
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> PDF/Doc Submission
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Classifieds</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Blog Commenting</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Q & A</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Informational Article
                                            Writing & Submission</li>
                                        <li class="ami-price"><i class="fa fa-close"></i> Press Release
                                            Writing & Submission</li>
                                        <li class="ami-price"><i class="fa fa-close"></i> Guest Blog
                                            Posting</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Infographic Creation
                                            &
                                            Distribution</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Blog Posting*</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Social Bookmarking
                                        </li>
                                        <li class="ami-price"><i class="fa fa-hand-o-right"></i><strong> Status And
                                                Report</strong></li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Search Engine Rank
                                            Report
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> SEO Reports</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Google Analytics
                                            Report
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Activitiy Report</li>
                                        <li class="ami-price"><i class="fa fa-close"></i> Monthly Action
                                            Plan</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Email/Chat/Online
                                        </li>
                                        <li class="ami-price"><i class="fa fa-close"></i> 24/7 Live
                                            Project Tracking</li>

                                        <Link to="/contact"><li class="price-button"> <a href="/contact">Proceed Now</a></li></Link>
                                    </ul>

                                </div>
                            </div>

                        </div>
                        {/* <!-----------1st end---------------->
                        <!---------------2nd start---------------> */}
                        <div class="col-sm-3">
                            <div class="price-table">
                                <div class="price-head">
                                    <h4>Standard</h4>
                                    <h6>₹ 23999 / Month (30 Keywords)</h6>
                                </div>
                                <div class="price-content">
                                    <ul>

                                        <li class="ami-price"><i class="fa fa-hand-o-right"></i><strong> Min. Contract 6
                                                Months
                                            </strong></li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Local &
                                            National, International SEO</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Minimum 20 Keywords
                                        </li>
                                        <li class="ami-price">
                                            <i class="fa fa-hand-o-right"></i><strong> Top 10 Guarantee - 50%*</strong>
                                        </li>

                                        <li class="ami-price">
                                            <i class="fa fa-hand-o-right"></i><strong> Initial Research And
                                                Analysis</strong>
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Business Analysis
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> In-depth Website
                                            Study</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Competitor Analysis
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Content Duplicacy
                                            Check</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Initial Backlinks
                                            Analysis</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Google Penalty Check
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Website Speed
                                            Analysis</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Keyword Research</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Canonicalization</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Website Page Load
                                            Optimization</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Initial Report</li>

                                        <li class="ami-price">
                                            <i class="fa fa-hand-o-right"></i><strong> On Page SEO</strong>
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Title Tags
                                            Optimization</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> URL Optimization</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Internal linking &
                                            Optimization</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Image & ALT Tag
                                            Optimization</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Content Optimization
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Robots.txt Creation
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> HTML & XML Sitemap
                                            Submission</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Schema for Contact
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Google Search Console
                                        </li>
                                        <li class="ami-price"><i class="fa fa-close"></i> Bing
                                            Webmaster Tools</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Google Analytics</li>
                                        <li class="ami-price"><i class="fa fa-close"></i> HTML Code Cleanup & Optimization</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Location Based Page
                                            Optimization</li>
                                        <li class="ami-price">
                                            <i class="fa fa-hand-o-right"></i><strong> Local SEO</strong>
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Google My Business
                                            Setup and Verification</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Google Places
                                            Optimization</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Google My Business
                                            Customer Reviews/ratings</li>
                                        <li class="ami-price"><i class="fa fa-close"></i> Bing local
                                            listing</li>

                                        <li class="ami-price">
                                            <i class="fa fa-hand-o-right"></i><strong> Off Page SEO</strong>
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Blog Writing &
                                            Submission</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> PDF/Doc Submission
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Classifieds</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Press Release Writing
                                            & Submission</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Q & A</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Informational Article
                                            Writing & Submission</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Blog Posting*</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Guest Blog Posting
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Infographic Creation
                                            & Distribution</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Blog Posting*</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Social Bookmarking
                                        </li>



                                        <li class="ami-price">
                                            <i class="fa fa-hand-o-right"></i><strong> Status And Report</strong>
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Search Engine Rank
                                            Report</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> SEO Reports</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Google Analytics
                                            Report</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Activitiy Report</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Monthly Action Plan
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Email/Chat/Online
                                        </li>
                                        <li class="ami-price"><i class="fa fa-close"></i> 24/7 Live
                                            Project Tracking</li>

                                        <Link to="/contact"><li class="price-button"> <a href="/contact">Proceed Now</a></li></Link>
                                    </ul>
                                </div>

                            </div>
                        </div>
                        {/* <!-----------------2nd end------------------>
                        <!---------------3rd start--------------------> */}
                        <div class="col-sm-3">
                            <div class="price-table">
                                <div class="price-head">
                                    <h4>Professional</h4>
                                    <h6>₹ 34999 / Month (50 Keywords)</h6>
                                </div>
                                <div class="price-content">
                                    <ul>
                                        <li class="ami-price">
                                            <i class="fa fa-hand-o-right"></i><strong> Min. Contract 12 Months</strong>
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Local &
                                            National, International SEO</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Minimum 40 Keywords
                                        </li>
                                        <li class="ami-price">
                                            <i class="fa fa-hand-o-right"></i><strong> Top 10 Guarantee - 50%*</strong>
                                        </li>
                                        <li class="ami-price">
                                            <i class="fa fa-hand-o-right"></i><strong> Initial Research And
                                                Analysis</strong>
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Business Analysis
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> In-depth Website
                                            Study</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Competitor Analysis
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Content Duplicacy
                                            Check</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Initial Backlinks
                                            Analysis</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Google Penalty Check
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Website Speed
                                            Analysis</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Keyword Research</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Canonicalization</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Website Page Load
                                            Optimization</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Initial Report</li>

                                        <li class="ami-price">
                                            <i class="fa fa-hand-o-right"></i><strong> On Page SEO</strong>
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Title Tags
                                            Optimization</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> URL Optimization</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Internal linking &
                                            Optimization</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Image & ALT Tag
                                            Optimization</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Content Optimization
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Robots.txt Creation
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> HTML & XML Sitemap
                                            Submission</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Schema for Contact
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Google Search Console
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Bing Webmaster Tool
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Google Analytics</li>
                                        <li class="ami-price"><i class="fa fa-close"></i> HTML Code Cleanup
                                            & Optimization</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Location Based Page
                                            Optimization</li>
                                        <li class="ami-price">
                                            <i class="fa fa-hand-o-right"></i><strong> Local SEO</strong>
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Google My Business
                                            Setup and Verification</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Google Places
                                            Optimization</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Google My Business
                                            Customer Reviews/ratings</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Bing Local Listing
                                        </li>

                                        <li class="ami-price">
                                            <i class="fa fa-hand-o-right"></i><strong> Off Page SEO</strong>
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Blog Writing &
                                            Submission</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> PDF/Doc Submission
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Classifieds</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Blog Commenting</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Q & A</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Informational Article
                                            Writing & Submission</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Press Release Writing
                                            & Submission</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Guest Blog Posting
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Infographic Creation
                                            & Distribution</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Blog Posting*</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Social Bookmarking
                                        </li>
                                        <li class="ami-price">
                                            <i class="fa fa-hand-o-right"></i><strong> Status And Report</strong>
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Search Engine Rank
                                            Report</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> SEO Reports</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Google Analytics
                                            Report</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Activitiy Report</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Monthly Action Plan
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Email/Chat/Online
                                        </li>
                                        <li class="ami-price"><i class="fa fa-close"></i> 24/7 Live
                                            Project Tracking</li>

                                        <Link to="/contact"><li class="price-button"> <a href="/contact">Proceed Now</a></li></Link>
                                    </ul>
                                </div>

                            </div>
                        </div>
                        {/* <!----------------3rd end------------------------>
                        <!------------------4th package start-------------------> */}
                        <div class="col-sm-3">
                            <div class="price-table">
                                <div class="price-head">
                                    <h4>Enterprise</h4>
                                    <h6>₹ 44999 / Month (70 Keywords)</h6>
                                </div>
                                <div class="price-content">
                                    <ul>
                                        <li class="ami-price">
                                            <i class="fa fa-hand-o-right"></i><strong> Min. Contract 1 Year</strong>
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Local &
                                            National, International SEO</li>

                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Minimum 60 Keywords
                                        </li>
                                        <li class="ami-price">
                                            <i class="fa fa-hand-o-right"></i><strong> Top 10 Guarantee - 70%*</strong>
                                        </li>
                                        <li class="ami-price">
                                            <i class="fa fa-hand-o-right"></i><strong> Initial Research And
                                                Analysis</strong>
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Business Analysis
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> In-depth Website
                                            Study</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Competitor Analysis
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Content Duplicacy
                                            Check</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Initial Backlinks
                                            Analysis</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Google Penalty Check
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Website Speed
                                            Analysis</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Keyword Research</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Canonicalization</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Website Page Load
                                            Optimization</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Initial Report</li>

                                        <li class="ami-price">
                                            <i class="fa fa-hand-o-right"></i><strong> On Page SEO</strong>
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Title Tags
                                            Optimization</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> URL Optimization</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Internal linking &
                                            Optimization</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Image & ALT Tag
                                            Optimization</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Content Optimization
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Robots.txt Creation
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> HTML & XML Sitemap
                                            Submission</li>
                                        <li class="ami-price"><i class="fa fa-close clrright"></i> Schema for Contact
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Google Search Console
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Bing Webmaster Tool
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Google Analytics</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> HTML Code Cleanup &
                                            Optimization</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Location Based Page
                                            Optimization</li>
                                        <li class="ami-price">
                                            <i class="fa fa-hand-o-right"></i><strong> Local SEO</strong>
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Google My Business
                                            Setup and Verification</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Google Places
                                            Optimization</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Google My Business
                                            Customer Reviews/ratings</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Bing Local Listing
                                        </li>

                                        <li class="ami-price">
                                            <i class="fa fa-hand-o-right"></i><strong> Off Page SEO</strong>
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Blog Writing &
                                            Submission</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> PDF/Doc Submission
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Classifieds</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Blog Commenting</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Q & A</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Informational Article
                                            Writing & Submission</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Guest Blog Posting
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Infographic Creation
                                            & Distribution</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Blog Posting*</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Social Bookmarking
                                        </li>



                                        <li class="ami-price">
                                            <i class="fa fa-hand-o-right"></i><strong> Status And Report</strong>
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Search Engine Rank
                                            Report</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> SEO Reports</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Google Analytics
                                            Report</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Activitiy Report</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Monthly Action Plan
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Email/Chat/Online
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> 24/7 Live Project
                                            Tracking</li>

                                        <Link to="/contact"><li class="price-button"> <a href="/contact">Proceed Now</a></li></Link>
                                    </ul>
                                </div>

                            </div>
                        </div>
                        {/* <!------------------4th package end----------------> */}

                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default PricingSeo;