import React, {useEffect} from 'react';
import WebmWebDev from './assets/svg_image/Animations/web-development.webm';
import ServiceSidebar from './ServiceSidebar.component';

const ServiceWebDev = () => {

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    return (
       <>
            <section class="page-banner">
                <div class="container">
                    <div class="banner-content text-center">
                        <h2>Web Development</h2>

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

                                <h2>Web Development</h2>
                                <p>Web development is the work of creating a website through coding, which is made to share the
                                    data uploaded of the site's information and services on the Internet.
                                    Webhubzone works on coding tasks like markup, scripting, and programming for your website
                                    And both the Front-end and back-end interface of your website.
                                    Web development is responsive to some tasks like website structure, designing, layout,
                                    website modification and website functionality, performance, etc. We build and redesign
                                    Indian customer-facing and enterprise web applications to achieve higher adoption and
                                    conversion rates.
                                </p>

                                <div class="work-part-content">
                                    <div class="row align-items-center">
                                        <div class="col-md-6">
                                            <div class="work-left">
                                                <div class="work-webm">
                                                    <video playsInline autoPlay muted loop>
                                                        <source src={WebmWebDev} type='video/webm' />
                                                    </video>

                                                </div>

                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="work-content">
                                                <h2>Webhubzone Web Design & Development Services</h2>
                                                <p>Blog post, Web hosting, Brand logo design, UX/UI design, E-commerce-related
                                                    solutions, Drag & drop websites, template design, front-end level,
                                                    open-source platform, static & dynamic website design, multi-device
                                                    compatibility, website maintenance.
                                                </p>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h2>In Webhubzone Web Development Solution, We Provide</h2>
                                <ol>
                                    <li> Extract and intranet portals.</li>
                                    <li>Cloud-based and SAAS development.</li>
                                    <li>E-commerce related solutions.</li>
                                    <li> Custom website development.</li>
                                    <li>Informational websites we create.</li>

                                </ol>
                                <h2> The Importance Of Web Development For Any Website </h2>
                                <ol>
                                    <li> Make Map-reading easy navigation on the website.</li>
                                    <li>We are focused on your site's better SEO on parameters, tags, keywords, image
                                        optimization, and visual content.</li>
                                    <li>For inventive marketing and advertising increase traffic to your website.</li>
                                    <li>We focus on a well-designed website to extend your reach and engage more audience.</li>
                                    <li>Enhance business by increasing leads and keeping Indian visitors consistent.</li>
                                    <li>We also provide visual content for your website, Our company provides the facility to
                                        select promo videos and additional images for your website.</li>
                                    <li>Webhubzone attract lifelong customers to your business
                                    </li>
                                    <li>Webhubzone aspires to spread & expand the wings of your website, we highlight the
                                        clients who are interested to perform your services.
                                    </li>
                                    <li>We make website design pocket-friendly (for mobile users)
                                    </li>
                                    <li>Innovative marketing and advertising.</li>
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
                            <a class="accordion-link" href="#question1">What is done in web development?
                                <i class="fa fa-plus" aria-hidden="true"></i>
                                <i class="fa fa-minus" aria-hidden="true"></i>
                            </a>
                            <div class="answer">
                                <p>
                                    Web developers help brands grow in today's ever-changing digital landscape by creating
                                    website solutions that deliver real business results.

                                </p>

                            </div>
                        </div>
                        <div class="accordion-item" id="question2">
                            <a class="accordion-link" href="#question2">Can you tell me which industries Webhub zone websites
                                develop for?

                                <i class="fa fa-plus" aria-hidden="true"></i>
                                <i class="fa fa-minus" aria-hidden="true"></i>
                            </a>
                            <div class="answer">
                                <p> We are building web applications for many Indian businesses worldwide: E-commerce,
                                    Start-ups, marketplace, food delivery, social media networking, retail, clinical research,
                                    Education, Healthcare, human capital, Hospitality, media & publishing, manufacturing, and
                                    all type of websites.</p>

                            </div>
                        </div>
                        <div class="accordion-item" id="question3">
                            <a class="accordion-link" href="#question3"> Why is web development significant?
                                <i class="fa fa-plus" aria-hidden="true"></i>
                                <i class="fa fa-minus" aria-hidden="true"></i>
                            </a>
                            <div class="answer">
                                <p>These factors of websites are needed for the web development of any business.
                                    Indian Website Maintenance and Sustainability, Search Engine Optimization to win, boost
                                    sales growth, build Indian customer relationships and attract more Indian customers, expand
                                    reach and ease navigation.

                                </p>
                            </div>
                        </div>
                        <div class="accordion-item" id="question4">
                            <a class="accordion-link" href="#question4">What is the most important in Web development?
                                <i class="fa fa-plus" aria-hidden="true"></i>
                                <i class="fa fa-minus" aria-hidden="true"></i>
                            </a>
                            <div class="answer">
                                <p>
                                    Any Web developer should be skilled and learn the basic building blocks of HTML, CSS, and
                                    JAVA scripts.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
       </>
    )
}

export default ServiceWebDev;