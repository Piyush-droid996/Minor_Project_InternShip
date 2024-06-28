import React, {useEffect} from 'react';
import WebmProductListing from './assets/svg_image/Animations/product-listing.webm';
import ServiceSidebar from './ServiceSidebar.component';

const ServiceProductListing = () => {

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    return (
       <>
            <section class="page-banner">
        <div class="container">
            <div class="banner-content text-center">
                <h2>Product Listing Optimization</h2>
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

                        <h2>Product Listing Optimization</h2>
                        <p>PLPs (Product Listing Page) are pages on various applications that display a list of products
                            based on any category, description, and search query.
                            They are essential to the E-commerce process as they funnel Indian traffic to product detail
                            pages and are more likely to convert customers.
                            Our PLPs optimization affects SEO rankings and internal link building. We focus on ads
                            strategy and visibility through keywords, Indian customer reviews, and promotion strategy.
                        </p>

                        <div class="work-part-content">
                            <div class="row align-items-center">
                                <div class="col-md-6">
                                    <div class="work-left">
                                        <div class="work-webm">
                                            <video playsInline autoPlay muted loop>
                                                <source src={WebmProductListing} type='video/webm' />
                                            </video>

                                        </div>

                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="work-content">
                                        <h2>Webhubzone Product Listing Optimization Services In India </h2>
                                        <ol>
                                            <li>SEO-based Product title, description, feature image, URL, back-end
                                                keyword,
                                                photography services, and Onboarding services.</li>
                                            <li> Enhance brand content and optimise back-end keywords.</li>
                                            <li> Listing & Cataloging, product feature optimization (Webhubzone creates
                                                eye-catching authentic images for your brand), URL optimization.</li>
                                            <li> Account management and payment reconciliation & marketing strategy
                                                planning and
                                                execution.</li>
                                            <li> Sponsored website & app advertisement.</li>
                                        </ol>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <h2>Product Listing Strategies To Boost Sales
                        </h2>
                        <ol>
                            <li>Making your product a star through keyword research and attractive descriptions
                            </li>
                            <li>We also include multiple videos and images of your products</li>
                            <li>Enhance product and service review</li>
                        </ol>
                        <h2>Webhubzone Product Listing Optimization Ranking Factors </h2>
                        <ol>
                            <li>By SEO, we optimise titles including media, web design analysis, keywords, social
                                content, marketing strategy and product listing which plays a vital role in ranking.
                            </li>
                            <li>Long sentences are divided into different parts through bullet points which makes the
                                content look catchy and User-Friendly.
                            </li>
                            <li>We target the Indian audience, which uses hidden keywords to improve the ranking.</li>
                            <li>HTML coding is used to create the website, which is accessed via a web browser and
                                boosts sales and rankings on any search engine.

                            </li>


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
                    <a class="accordion-link" href="#question1"> What is a product listing optimization service?
                        <i class="fa fa-plus" aria-hidden="true"></i>
                        <i class="fa fa-minus" aria-hidden="true"></i>
                    </a>
                    <div class="answer">
                        <p>
                            Product listing optimization is specific for product descriptions, common questions and
                            answers about the product, images, videos, Indian customer reviews, etc.
                        </p>

                    </div>
                </div>
                <div class="accordion-item" id="question2">
                    <a class="accordion-link" href="#question2"> How is a product listing beneficial for an E-Commerce
                        business?

                        <i class="fa fa-plus" aria-hidden="true"></i>
                        <i class="fa fa-minus" aria-hidden="true"></i>
                    </a>
                    <div class="answer">
                        <p> Product listening on E-Commerce portals allows you to run your business 24/7 with low
                            operation costs, and it is easier for you to start and manage products and services.</p>

                    </div>
                </div>
                <div class="accordion-item" id="question3">
                    <a class="accordion-link" href="#question3"> What is covered under Product Listing?
                        <i class="fa fa-plus" aria-hidden="true"></i>
                        <i class="fa fa-minus" aria-hidden="true"></i>
                    </a>
                    <div class="answer">
                        <p> All products according to Indian customers, pricing of the products, advertising, review of
                            the customers, High-resolution images, manufacturers, and branding.
                        </p>
                    </div>
                </div>
                <div class="accordion-item" id="question4">
                    <a class="accordion-link" href="#question4"> Why is Product listing optimization essential?
                        <i class="fa fa-plus" aria-hidden="true"></i>
                        <i class="fa fa-minus" aria-hidden="true"></i>
                    </a>
                    <div class="answer">
                        <p>
                            If you want your product to reach Indian customers in this ongoing competition and make
                            maximum profit by running your website on the front page then product listing optimization
                            becomes very important for you.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
       </>
    )
}

export default ServiceProductListing;