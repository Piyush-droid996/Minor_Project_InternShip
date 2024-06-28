import React, {useEffect} from 'react';
import WebmSMO from './assets/svg_image/Animations/Smo.webm';
import ServiceSidebar from './ServiceSidebar.component';

const ServiceSMO = () => {

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    return (
       <>
             <section class="page-banner">
                <div class="container">
                    <div class="banner-content text-center">
                        <h2>Social Media optimisation(SMO)</h2>

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

                                <h2>Social Media optimisation(SMO)</h2>
                                <p>SMO services involve using social media platforms like Facebook, LinkedIn, Twitter, and
                                    Instagram to promote businesses, products, or brands. This is one of the social media
                                    marketing techniques that can be used to improve a website's branding and help a business
                                    succeed. Since most target audiences use social networking sites, Social Media Optimization
                                    can be beneficial for businesses and individuals.
                                </p>

                                <div class="work-part-content">
                                    <div class="row align-items-center">
                                        <div class="col-md-6">
                                            <div class="work-left">
                                                <div class="work-webm">
                                                    <video playsInline autoPlay muted loop>
                                                        <source src={WebmSMO} type='video/webm' />
                                                    </video>

                                                </div>

                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="work-content">
                                                <h2>Objective Of SMO</h2>
                                                <p>The goal of this type of optimization is to increase revenue, business, and
                                                    visitors to a site. This is done through Search engine optimization, which
                                                    places the site's link in various locations, and SMO Packages and services,
                                                    which develop a strategy that includes blogs, communities, and popular
                                                    networks on social sites. The process also encourages visitors to
                                                    participate in commenting, recommending, and sharing messages. This way,
                                                    businesses can share their services and products with thousands of potential
                                                    customers across the web.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h2>
                                    WebhubZone SMO Services Include:
                                </h2>
                                <ol>
                                    <li>
                                        Creating brilliant and creative online networking arrangements and procedures can help
                                        improve your company's brand awareness.</li>

                                    <li>Having a large number of subscribers/followers on Facebook, Google, Instagram, and
                                        Twitter can help promote your services or products and reach a larger audience.
                                    </li>

                                    <li>Active participation and membership in different social channels can also help manage
                                        and improve your online reputation.
                                    </li>

                                </ol>
                                <h2>Webhubzone Offered Services For Social Media</h2>
                                <p>Webhubzone offers social media services to help promote and advertise your brand. We will
                                    strategize your social media posts to make the most of popular platforms such as Facebook,
                                    Twitter, Instagram, LinkedIn, and Pinterest. Social media marketing is a powerful tool that
                                    should not be ignored.
                                    Social media is a great way to reach a lot of people and promote your brand. Webhubzone can
                                    help you make the most of social media and efficiently promote your brand. Here are some of
                                    the social media services we offer:
                                <ol>
                                    <li>Facebook Advertisement</li>
                                    <li>Instagram Marketing</li>
                                    <li>LinkedIn Marketing</li>
                                    <li>YouTube Marketing</li>
                                    <li>Influencer Marketing</li>
                                    <li>App Installation Ads</li>
                                </ol>
                                </p>
                                <h2>
                                    Benefits of Webhubzone SMO Services
                                </h2>
                                <p>Our team of professional technical experts at the best SMO Company in Jaipur increases your
                                    website's chances of securing the top rankings. We have completed and delivered many
                                    projects to our clients on time.<br/>
                                    Our company provides you with expert SMO services. Using social media sites and techniques,
                                    we also increase page views on your website and help you build links.<br/>
                                    We at Webhubzone of Digital Marketing have become known for our custom, innovative, and
                                    successfully implemented social media optimization strategies, including blogs, forums, and
                                    adding.<br/>
                                    We offer affordable SMO packages to boost your website's visibility and credibility, as
                                    proven by top rankings on top search engines & social networks, and to uncover the needs of
                                    your clients.<br/>
                                <ul>
                                    <li>You will receive more targeted traffic with Webhubzone's digital marketing company.</li>
                                    <li>Increasing the number of customers and the reach of your business.</li>
                                    <li>Boosting your product or service's online brand awareness.</li>
                                    <li>An increase in inbound links of high quality.</li>
                                    <li>Effective and brilliant web-based publicising at a low cost.</li>
                                    <li>Increased visibility, higher rankings, and much more.</li>

                                </ul>
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
       </>
    )
}

export default ServiceSMO;