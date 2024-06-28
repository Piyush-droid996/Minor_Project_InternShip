import React, {useEffect} from 'react';
import WebmCRO from './assets/svg_image/Animations/cro.webm';
import ServiceSidebar from './ServiceSidebar.component';

const ServiceCRO = () => {

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    return (
       <>
       <section class="page-banner">
            <div class="container">
                <div class="banner-content text-center">
                    <h2>Conversion Rate Optimization</h2>
                </div>
            </div>
        </section>
        {/* <!------------2nd section-------------> */}
        <section class="service-details pt-120 rpt-100 pb-115 rpb-95">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4">
                        <ServiceSidebar/>
                    </div>
                    <div class="col-lg-8">
                        <div class="service-details-content">
                            <h2>Conversion Rate Optimization</h2>
                            <p>CRO(Conversion rate optimization) is the process of increasing the percentage of conversions
                                from a website or mobile app.
                                Most businesses advertise on various social media sites to promote their website on the
                                front page. The conversion rate is the percentage of total website visitors who visit the
                                website and use the services on a particular landing page.
                                All this process comes in conversion rate optimization. Webhubzone provides you with this
                                service where you can check your website growth.

                            </p>

                            <div class="work-part-content">
                                <div class="row align-items-center">
                                    <div class="col-md-6">
                                        <div class="work-left">
                                            <div class="work-webm">
                                                <video playsInline autoPlay muted loop>
                                                    <source src={WebmCRO} type='video/webm' />
                                                </video>

                                            </div>

                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="work-content">
                                            <h2>Webhubzone CRO(Conversion Rate Optimization) Services </h2>
                                            <ol>
                                                <li>
                                                    Display Advertisement
                                                </li>
                                                <li>
                                                    Vedio/E-mail marketing
                                                </li>
                                                <li>Optimising paid search ads
                                                </li>
                                            </ol>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h2>Importance Of Conversion Rate Optimization </h2>
                            <ol>
                                <li> Collecting user data</li>
                                <li>Build the trust of Indian visitors/customers
                                </li>
                                <li>User-Friendly website Interface
                                </li>
                                <li> Usability, Exploration & Website copy inquiry
                                </li>
                                <li>Landing page, Increase ROI & Boost website SEO effect
                                </li>
                                <li>Website Tracking & Reports</li>

                            </ol>
                            <h2> What Do Webhubzone CRO Services Include? </h2>
                            <ol>
                                <li><b>Usability Exploration</b>:- The interface of the site is also one of the reasons why
                                    Indian people leave the website. If the interface is too difficult and out of the reach
                                    of mobile devices then it is not called an user friendly interface.
                                    Our company converts the website keeping in mind all these factors so that the Indian
                                    user visits your website.
                                </li>
                                <li><b>Conversion Analysis/Internet Marketing Reformation Analysis</b>:-
                                    We create and design attractive content to generate leads and attract visitors to your
                                    website. Our team works on your website after knowing the details of the people through
                                    internet marketing.
                                </li>
                                <li><b>Website Copy Inquiry</b>:- Our company designs unique content for your site and gives
                                    better answer to the questions from Indian visitors
                                </li>
                                <li><b>Creative Analysis</b>:- Webhub creates your website pages in a uniform and
                                    professional manner. We make sure that all the pages on your site are representing your
                                    brand, No
                                    aesthetic error is present as well an increase in conversion rate optimization.</li>

                            </ol>

                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="faq">
            <div class="faq-container">
                <h3>FAQ(Frequency Asked Questions)</h3>
                <div class="accordion">
                    <div class="accordion-item" id="question1">
                        <a class="accordion-link" href="#question1"> Why is conversion rate optimization important?
                            <i class="fa fa-plus" aria-hidden="true"></i>
                            <i class="fa fa-minus" aria-hidden="true"></i>
                        </a>
                        <div class="answer">
                            <p>
                                Conversion rate optimization helps to increase the traffic of Indian customers by working on
                                the bottom line of your website.
                            </p>

                        </div>
                    </div>
                    <div class="accordion-item" id="question2">
                        <a class="accordion-link" href="#question2">What are conversion rate optimization (CRO) services?

                            <i class="fa fa-plus" aria-hidden="true"></i>
                            <i class="fa fa-minus" aria-hidden="true"></i>
                        </a>
                        <div class="answer">
                            <p> Visitors who use the Services out of the total number of visitors to your website landing
                                page due to social media sites or any other source are handled by the Conversion Rate
                                Optimization Service.</p>

                        </div>
                    </div>
                    <div class="accordion-item" id="question3">
                        <a class="accordion-link" href="#question3">Why choose the Webhub zone for CRO services?
                            <i class="fa fa-plus" aria-hidden="true"></i>
                            <i class="fa fa-minus" aria-hidden="true"></i>
                        </a>
                        <div class="answer">
                            <p>Webhubzone is a full-service digital marketing company. We create custom strategies, work
                                with your website, and are transparent about our pricing. We have an expert and experienced
                                team, a large portfolio, testimonials, and reviews. (Content marketing, web designing, PPC
                                advertising, SEO, and many more).
                            </p>
                        </div>
                    </div>
                    <div class="accordion-item" id="question4">
                        <a class="accordion-link" href="#question4"> How to increase the conversion rate through webhubone?
                            <i class="fa fa-plus" aria-hidden="true"></i>
                            <i class="fa fa-minus" aria-hidden="true"></i>
                        </a>
                        <div class="answer">
                            <p>
                            <ol>
                                <li>Increase customer trust and remove friction</li>
                                <li>Optimise the website for a mobile-friendly mode</li>
                                <li>Creative marketing strategy</li>
                                <li>Improve website page speed</li>
                                <li>Communicate the website value proposition</li>     
                            </ol>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
       </>
    )
}

export default ServiceCRO;