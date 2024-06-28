import React, {useEffect} from 'react';
import WebmSMM from './assets/svg_image/Animations/smm.webm';
import ServiceSidebar from './ServiceSidebar.component';

const ServiceSocialMedia = () => {

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    return (
       <>
            <section class="page-banner">
                <div class="container">
                    <div class="banner-content text-center">
                        <h2>Social Media Marketing</h2>

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

                                <h2>Social Media Marketing(SMM)</h2>
                                <p>Social media marketing is a technique in which any business, brand, or individual can use to
                                    promote their services and products on different social sites.
                                    Our company creates your site account on various social media platforms to do marketing and
                                    publish the exact offers and information about your services in the form of content.
                                    Social media is a platform through which you can reach your target Indian audience very
                                    easily. This marketing strategy can give rapid growth to your business.
                                </p>

                                <div class="work-part-content">
                                    <div class="row align-items-center">
                                        <div class="col-md-6">
                                            <div class="work-left">
                                                <div class="work-webm">
                                                    <video playsInline autoPlay muted loop>
                                                        <source src={WebmSMM} type='video/webm' />
                                                    </video>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="work-content">
                                                <h2>Webhubzone Social Media Marketing Service</h2>
                                                <p>Blog posting, page optimization, social bookmarking, premium links, article
                                                    submission, sponsored posts, video promotions, creating content, improving
                                                    search engine ranking, and many more.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h2>
                                    How Webhubzone Grows Your Website Through Social Media Marketing
                                </h2>
                                <ol>
                                    <li>
                                        Businesses, brands, and individuals can promote their products and services through
                                        social
                                        media marketing.</li>

                                    <li>Webhubzone also does advertising to reach the Indian audience/ Indian visitors to your
                                        website and increase the awareness of your brand.</li>

                                    <li>Webhubzone creates a professional page by creating your website logo, cover page,
                                        business
                                        website and content on social media platforms according to your business category.</li>

                                    <li>The main target of our company is to increase the business by taking organic Indian
                                        traffic
                                        to your website, making this strategy, and publishing the scheduled content.</li>

                                    <li>After creating various social media platforms, we publish content on those sites on a
                                        daily
                                        basis.</li>
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
                            <a class="accordion-link" href="#question1"> How to use social media through Webhubzone digital
                                marketing?
                                <i class="fa fa-plus" aria-hidden="true"></i>
                                <i class="fa fa-minus" aria-hidden="true"></i>
                            </a>
                            <div class="answer">
                                <p>We publish your website on various social media sites and present your products and services
                                    through creative and attractive content which can engage more Indian people on your website
                                    by increasing the awareness of your brand.</p>

                            </div>
                        </div>
                        <div class="accordion-item" id="question2">
                            <a class="accordion-link" href="#question2">Which social platforms does Webhubzone use for social
                                media marketing?

                                <i class="fa fa-plus" aria-hidden="true"></i>
                                <i class="fa fa-minus" aria-hidden="true"></i>
                            </a>
                            <div class="answer">
                                <p> We publish your websites on social media platforms like Facebook, Instagram, Twitter,
                                    Pinterest, YouTube, and LinkedIn.</p>

                            </div>
                        </div>
                        <div class="accordion-item" id="question3">
                            <a class="accordion-link" href="#question3">What are some general tips for achieving social media
                                success?

                                <i class="fa fa-plus" aria-hidden="true"></i>
                                <i class="fa fa-minus" aria-hidden="true"></i>
                            </a>
                            <div class="answer">
                                <p> Make sure you post consistently, let your passion shine through, engage in conversations and
                                    answer questions, Engage your Indian audience by providing valuable contents.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
       </>
    )
}

export default ServiceSocialMedia;