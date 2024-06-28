import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
//import { Routes, Route, BrowserRouter} from 'react-router-dom';
import './assets/style/pricing_table.css';

const PricingSmo = () => {

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    return(
        <section class="table-section">
        <div class="container-fluid">
            <div class="container-pricing-table">
                <div class="container-heading">
                    <h1>SMO Packages</h1>
                    <p>In recent times, Digital marketing has become an integral part of our daily lives. Webhubzone
                        offers a very affordable Digital Marketing SMO Package. Facebook, Twitter, Instagram, and
                        LinkedIn are hugely popular among Indian clients. Furthermore, these social websites are an
                        excellent marketing tool to promote business websites and their goods and services as well.

                        These social networks offer businesses extraordinary opportunities to connect with potential
                        clients and additionally potential customers. We are in the midst of the social media era in
                        Internet marketing. Our company, Webhubzone Digital Marketing, offers the best Social Media
                        Marketing Packages in India. YouTube Marketing, Facebook Marketing, Instagram Marketing,
                        LinkedIn Marketing, Pinterest, Twitter Marketing, etc.

                        You can choose from a variety of social media marketing packages, including:-<br/>
                        Basic SMO plan - all you need for basic marketing.<br/>
                        Standard SMO plan - maintains presence through a combination of channels.<br/>
                        Professional SMO plan - utilising professional marketing techniques to drive sales.<br/>
                        Enterprise SMO plan - marketing strategy for the entire enterprise. </p>
                </div>
                <div class="pricing-area">
                    <div class="row">
                        {/* <!----------1st package start-------------> */}
                        <div class="col-sm-3">
                            <div class="price-table">
                                <div class="price-head">
                                    <h4>Basic SMO Plan</h4>
                                    <h6>₹ 14,999 / Month (25 Posts)</h6>
                                </div>
                                <div class="price-content">
                                    <ul>
                                        <li class="ami-price">
                                            <i class="fa fa-hand-o-right"></i><strong> Instagram Marketing</strong>
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Instagram Account
                                            Set-Up</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Write applicable
                                            posts</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Instagram Followers/M
                                            - 10%</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Monthly Post Regular
                                            Updates</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Maintain profile</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> #Hashtag Trend
                                            Research</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Instagram Posts Like
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Query Reply on Social
                                            Media</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Instagram Analytics
                                            Monitoring</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Instagram Paid Ads*
                                        </li>

                                        <li class="ami-price">
                                            <i class="fa fa-hand-o-right"></i><strong> Facebook Marketing</strong>
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> FB Page Creation</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> FB Regular Updates
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> FB Application
                                            Integration</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> FB Page Likes/M - 10%
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> FB Timeline Design
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> FB Profile Design
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Boost Post & Advert*
                                        </li>
                                        <li class="ami-price">
                                            <i class="fa fa-hand-o-right"></i><strong> Twitter Marketing</strong>
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Twitter Page Creation
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Twitter Regular
                                            Updates</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Twitter Profile
                                            Design Intergration</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Twitter Tweet
                                            Favourite</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Twitter List
                                            Management</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Twitter Followers/M -
                                            10%</li>

                                        <li class="ami-price">
                                            <i class="fa fa-hand-o-right"></i><strong> Pinterest Marketing</strong>
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Pinterest Account
                                            Creation</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Sourcing of pin board
                                            content</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Creation of custom
                                            business URL</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Pinterest Followers
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Re-pinning of
                                            relevant content</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Updating of pin
                                            boards</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Following of relevant
                                            Pinners</li>
                                        <li class="ami-price">
                                            <i class="fa fa-hand-o-right"></i><strong> Linkedin Marketing</strong>
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Linkedin Business
                                            Page Creation </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Linkedin Account
                                            Management</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Linkedin Regular
                                            Updates</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Linkedin Profile
                                            Maintenance</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Linkedin
                                            Advertisement*</li>
                                        <li class="ami-price">
                                            <i class="fa fa-hand-o-right"></i><strong> YouTube Marketing</strong>
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> YouTube Channel
                                            Creation</li>
                                        <li class="ami-price"><i class="fa fa-close clrclose"></i> YouTube Background
                                            Design</li>
                                        <li class="ami-price"><i class="fa fa-close clrclose"></i> Video Optimization
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Video Upload</li>
                                        <li class="ami-price"><i class="fa fa-close clrclose"></i> Video Like or
                                            Subscribers</li>
                                        <li class="ami-price"><i class="fa fa-close clrclose"></i> Video Views</li>

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
                                    <h6>₹ 23,999 / Month (50 Posts)</h6>
                                </div>
                                <div class="price-content">
                                    <ul>

                                        <li class="ami-price">
                                            <i class="fa fa-hand-o-right"></i><strong> Instagram Marketing</strong>
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Instagram Account
                                            Set-Up</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Write applicable
                                            posts</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Instagram Followers/M
                                            - 10%</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Monthly Post Regular
                                            Updates</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Maintain profile</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> #Hashtag Trend
                                            Research</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Instagram Posts Like
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Query Reply on Social
                                            Media</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Instagram Analytics
                                            Monitoring</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Instagram Paid Ads*
                                        </li>
                                        <li class="ami-price">
                                            <i class="fa fa-hand-o-right"></i><strong> Facebook Marketing</strong>
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> FB Page Creation</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> FB Regular Updates
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> FB Application
                                            Integration</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> FB Page Likes/M - 10%
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> FB Timeline Design
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> FB Profile Design
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Boost Post & Advert*
                                        </li>
                                        <li class="ami-price">
                                            <i class="fa fa-hand-o-right"></i><strong> Twitter Marketing</strong>
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Twitter Page Creation
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Twitter Regular
                                            Updates</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Twitter Profile
                                            Design Intergration</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Twitter Tweet
                                            Favourite</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Twitter List
                                            Management</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Twitter Followers/M -
                                            10%
                                        </li>
                                        <li class="ami-price">
                                            <i class="fa fa-hand-o-right"></i><strong> Pinterest Marketing</strong>
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Pinterest Account
                                            Creation</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Sourcing of pin board
                                            content</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Creation of custom
                                            business URL</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Pinterest Followers
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Re-pinning of
                                            relevant content</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Updating of pin
                                            boards</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Following of relevant
                                            Pinners</li>
                                        <li class="ami-price">
                                            <i class="fa fa-hand-o-right"></i><strong> Linkedin Marketing</strong>
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Linkedin Business
                                            Page Creation </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Linkedin Account
                                            Management</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Linkedin Regular
                                            Updates</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Linkedin Profile
                                            Maintenance</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Linkedin
                                            Advertisement*</li>
                                        <li class="ami-price">
                                            <i class="fa fa-hand-o-right"></i><strong> Youtube Marketing</strong>
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> You Tube Channel
                                            Creation</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> You Tube Background
                                            Design</li>
                                        <li class="ami-price"><i class="fa fa-close clrclose"></i> Video Optimization
                                        </li>
                                        <li class="ami-price"><i class="fa fa-close clrclose"></i> Video Submission</li>
                                        <li class="ami-price"><i class="fa fa-close clrclose"></i> Video Like or
                                            Subscribers</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Video Views (Paid
                                            Ads)</li>

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
                                    <h6>₹ 34,999 / Month (100 Posts)</h6>
                                </div>
                                <div class="price-content">
                                    <ul>
                                        <li class="ami-price">
                                            <i class="fa fa-hand-o-right"></i><strong> Instagram Marketing</strong>
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Instagram Account
                                            Set-Up</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Write applicable
                                            posts</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Instagram Followers/M
                                            - 10%</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Monthly Post Regular
                                            Updates</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Maintain profile</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> #Hashtag Trend
                                            Research</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Instagram Posts Like
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Query Reply on Social
                                            Media</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Instagram Analytics
                                            Monitoring</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Instagram Paid Ads*
                                        </li>
                                        <li class="ami-price">
                                            <i class="fa fa-hand-o-right"></i><strong> Facebook Marketing</strong>
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> FB Page Creation</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> FB Regular Updates
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> FB Application
                                            Integration</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> FB Page Likes/M - 10%
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> FB Timeline Design
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> FB Profile Design
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Boost Post & Advert*
                                        </li>
                                        <li class="ami-price">
                                            <i class="fa fa-hand-o-right"></i> Twitter Marketing
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Twitter Page Creation
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Twitter Regular
                                            Updates</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Twitter Profile
                                            Design Intergration</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Twitter Tweet
                                            Favourite</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Twitter List
                                            Management</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Twitter Followers/M -
                                            10%</li>


                                        <li class="ami-price">
                                            <i class="fa fa-hand-o-right"></i><strong> Pinterest Marketing</strong>
                                        </li>

                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Pinterest Account
                                            Creation</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Sourcing of pin board
                                            content</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Creation of custom
                                            business URL</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Pinterest Followers
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Re-pinning of
                                            relevant content</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Updating of pin
                                            boards</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Following of relevant
                                            Pinners</li>

                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Linkedin Business
                                            Page Creation </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Linkedin Account
                                            Management</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Linkedin Regular
                                            Updates</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Linkedin Profile
                                            Maintenance</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Linkedin
                                            Advertisement*</li>

                                        <li class="ami-price">
                                            <i class="fa fa-hand-o-right"></i><strong> Youtube Marketing</strong>
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> You Tube Channel
                                            Creation</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> You Tube Background
                                            Design</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Video Optimization
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Video Submission</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Video Like or
                                            Subscribers</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Video Views</li>
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
                                    <h6>₹ 44999 / Month (150 Keywords)</h6>
                                </div>
                                <div class="price-content">
                                    <ul>
                                        <li class="ami-price">
                                            <i class="fa fa-hand-o-right"></i><strong> Instagram Marketing</strong>
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Instagram Account
                                            Set-Up</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Write applicable
                                            posts</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Instagram Followers/M
                                            - 10%</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Monthly Post Regular
                                            Updates</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Maintain profile</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> #Hashtag Trend
                                            Research</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Instagram Posts Like
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Query Reply on Social
                                            Media</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Instagram Analytics
                                            Monitoring</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Instagram Paid Ads*
                                        </li>
                                        <li class="ami-price">
                                            <i class="fa fa-hand-o-right"></i><strong> Facebook Marketing</strong>
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> FB Page Creation</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> FB Regular Updates
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> FB Application
                                            Integration</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> FB Page Likes/M - 10%
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> FB Timeline Design
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> FB Profile Design
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Boost Post & Advert*
                                        </li>
                                        <li class="ami-price">
                                            <i class="fa fa-hand-o-right"></i><strong> Twitter Marketing</strong>
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Twitter Page Creation
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Twitter Regular
                                            Updates</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Twitter Profile
                                            Design Intergration</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Twitter Tweet
                                            Favourite</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Twitter List
                                            Management</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Twitter Followers/M -
                                            10%</li>
                                        <li class="ami-price">
                                            <i class="fa fa-hand-o-right"></i><strong> Pinterest Marketing</strong>
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Pinterest Account
                                            Creation</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Sourcing of pin board
                                            content</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Creation of custom
                                            business URL</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Pinterest Followers
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Re-pinning of
                                            relevant content</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Updating of pin
                                            boards</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Following of relevant
                                            Pinners</li>
                                        <li class="ami-price">
                                            <i class="fa fa-hand-o-right"></i><strong> Linkedin Marketing</strong>
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Linkedin Profile
                                            Creation</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Linkedin Account
                                            Management</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Linkedin Regular
                                            Updates</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Linkedin Profile
                                            Maintenance</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Linkedin Business
                                            Page</li>
                                        <li class="ami-price">
                                            <i class="fa fa-hand-o-right"></i><strong> Youtube Marketing</strong>
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> You Tube Channel
                                            Creation</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> You Tube Background
                                            Design</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Video Optimization
                                        </li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Video Submission</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Video Like or
                                            Subscribers</li>
                                        <li class="ami-price"><i class="fa fa-check clrright"></i> Video Views</li>
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

export default PricingSmo;