import React, {useEffect} from 'react';
// import './assets/style/serviceTable.css';
import ServiceSidebar from './ServiceSidebar.component';
import WebmContentMarketing from './assets/svg_image/Animations/contentmarketing.webm';

const ServiceContentMark = () => {

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    return (
       <>
            <section class="page-banner">
                <div class="container">
                    <div class="banner-content text-center">
                        <h2>Content Marketing</h2>
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
                                <h2>Content Marketing</h2>
                                <p>Content marketing is the strategy in which the content is created, that content can be in the
                                    form of website content and articles/ blogs that provide information about a website to us
                                    in the form of content can be in the form of a website blog, video content, podcast,
                                    e-books, blogging, video content/ Vlogging, Audio Content, Infographic, etc.
                                    Webhubzone Published your website content E-Mail marketing, templates, promotional content,
                                    social media content, blog/articles, paid advertisement content, video graphics, etc.
                                    Webhubzone focuses on Publishing, Creating, and Distributing content for your target
                                    audience online.

                                </p>

                                <div class="work-part-content">
                                    <div class="row align-items-center">
                                        <div class="col-md-6">
                                            <div class="work-left">
                                                <div class="work-webm">
                                                    <video playsInline autoPlay muted loop>
                                                        <source src={WebmContentMarketing} type='video/webm' />
                                                    </video>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="work-content">
                                                <h2>What Is It?</h2>
                                                <p>All the content that you see on a website or newspaper,
                                                    Such as Texts, Videos, Images, etc. All this comes under content marketing,
                                                    the main reason for using it is to attract more and more audiences, many big
                                                    companies have increased their sales by adopting this type of strategy.
                                                </p>
                                                <h2>WebHub Zone Content Marketing Service</h2>
                                                <ol>
                                                    <li>Brand awareness</li>
                                                    <li>Media Visibility</li>
                                                    <li>Client Engagement</li>
                                                    <li>Website visitor's traffic</li>
                                                    <li>Competitive advantage</li>
                                                </ol>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h2>Why Content Marketing Is Essential For Any Website</h2>
                                <ol>
                                    <li> Content marketing helps your website it boosts brand credibility by content marketing
                                        through marketing trust.</li>
                                    <li>Upgraded content help put forth your SEO attempts better.</li>
                                    <li>Incredible content creation is a practical method to get new leads.</li>
                                    <li>Using this approach, you establish expertise, build brand loyalty & awareness, and
                                        ensure your business stays on top of mind when potential customers are looking to buy.
                                    </li>
                                    <li>It helps Lead generation and build Visitors' traffic.</li>
                                </ol>
                                <h2>Webhub Zone Unique Content Marketing Strategy</h2>
                                <ol>
                                    <h5>
                                        <li>Website Objectives</li>
                                    </h5>
                                    <p>Our company creates the content strategy based on the products and services of your
                                        website
                                        In this, we work on the pattern of your product and make Indian customers aware by
                                        educating them about the services
                                    </p>
                                    <h5>
                                        <li> Content Topics </li>
                                    </h5>
                                    <p>The content is designed to be attractive across a variety of topics such as social media
                                        content, podcast content, video, and graphic content as well as images, which are easy
                                        to understand for Indian customers
                                        Apart from this, online brochures are also created in which the keywords of the business
                                        are targeted.
                                    </p>
                                    <h5>
                                        <li>Tone Of Voice</li>
                                    </h5>
                                    <p>There are many types of content, from which the content or information about services or
                                        offers related to the content website is for the website to educate the Indian customer
                                    </p>
                                    <h5>
                                        <li>Readers' Goals</li>
                                    </h5>
                                    <p>If the services are done according to the interest of the Indian customer, your website
                                        gets more traffic.
                                    </p>
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
                            <a class="accordion-link" href="#question1">What does content marketing do?
                                <i class="fa fa-plus" aria-hidden="true"></i>
                                <i class="fa fa-minus" aria-hidden="true"></i>
                            </a>
                            <div class="answer">
                                <p>
                                    Content marketing provides the best possible answer to the question the Indian visitor
                                    sought out through keyword research, content research, content writing, and graphic design
                                    promotion and shares.
                                </p>

                            </div>
                        </div>
                        <div class="accordion-item" id="question2">
                            <a class="accordion-link" href="#question2">How to content marketing work?

                                <i class="fa fa-plus" aria-hidden="true"></i>
                                <i class="fa fa-minus" aria-hidden="true"></i>
                            </a>
                            <div class="answer">
                                <p>
                                    Content marketing works on increasing the value of your business brand as compared to
                                    traditional marketing like
                                <ol>
                                    <li> Customer engagement</li>
                                    <li>Lead generation and nurturing</li>
                                    <li> Supporting sales</li>
                                    <li>through content awareness of the brand</li>
                                </ol>
                                </p>

                            </div>
                        </div>
                        <div class="accordion-item" id="question3">
                            <a class="accordion-link" href="#question3">What are the leads of content marketing?
                                <i class="fa fa-plus" aria-hidden="true"></i>
                                <i class="fa fa-minus" aria-hidden="true"></i>
                            </a>
                            <div class="answer">
                                <p> The top benefits of content marketing are increased website traffic, established authority
                                    Increased Indian customer trust, and improved conversion rates.
                                </p>
                            </div>
                        </div>
                        <div class="accordion-item" id="question4">
                            <a class="accordion-link" href="#question4">What is the content marketing process?
                                <i class="fa fa-plus" aria-hidden="true"></i>
                                <i class="fa fa-minus" aria-hidden="true"></i>
                            </a>
                            <div class="answer">
                                <p>Research, Create Content, Optimize, Published, Promote, and Measure.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
       </>
    )
}

export default ServiceContentMark;