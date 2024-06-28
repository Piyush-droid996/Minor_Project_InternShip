import React, { useEffect } from "react";
import WebmSEO from "./assets/svg_image/Animations/SEO.webm";
import ServiceSidebar from "./ServiceSidebar.component";

const ServiceSEO = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <section class="page-banner">
        <div class="container">
          <div class="banner-content text-center">
            <h2>SEO (Search Engine Optimization)</h2>
          </div>
        </div>
      </section>
      {/* <!------------2nd section-------------> */}
      <section class="service-details pt-120 rpt-100 pb-115 rpb-95">
        <div class="container">
          <div class="row">
            <div class="col-lg-4">
              <ServiceSidebar />
            </div>
            <div class="col-lg-8">
              <div class="service-details-content">
                <h2>Search Engine Optimization</h2>
                <p>
                  SEO (Search Engine Optimization) is a technique by which we
                  can optimise the content of the Indian customer's website and
                  bring traffic to their website by getting it ranked on the top
                  position on any search engine by using keywords. If you want
                  to get ahead of your competitors and grow your business, then
                  it is essential for you to bring your website on the front
                  page. Webhubzone is an excellent way to take your website to
                  the top position in the SERP.
                </p>

                <div class="work-part-content">
                  <div class="row align-items-center">
                    <div class="col-md-6">
                      <div class="work-left">
                        <div class="work-webm">
                          <video playsInline autoPlay muted loop>
                            <source src={WebmSEO} type="video/webm" />
                          </video>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="work-content">
                        <h2>Webhubzone SEO Services</h2>
                        <p>
                          These are mainly three types of methods in SEO with
                          the help of which the website can be optimised.
                        </p>
                        <ol>
                          <h5>
                            <li>Technical SEO</li>
                          </h5>
                          <p>
                            It makes your website mobile-friendly and gives a
                            responsive theme for your website and it also has
                            Technical on-site factors.
                          </p>
                          <h5>
                            <li> On-page SEO </li>
                          </h5>
                          <p>
                            We create unique and attractive content and Optimise
                            keywords.
                          </p>
                          <h5>
                            <li>Technical SEO</li>
                          </h5>
                          <p>
                            Backlink menu, articles, guest posting, blogs,
                            social bookmarks.
                          </p>
                        </ol>
                      </div>
                    </div>
                    <h2>
                      Webhubzone ranks the site by generating core traffic to
                      the website through these points
                    </h2>
                    <p>
                      Improves ranking by maintaining page speed, on-page SEO
                      webhubzone to optimize your website blog content,
                      Optimizing keywords, like title, meta description,
                      subtitle, tags, heading and URL Structure, and Indian User
                      experience. Back Links,(Creating backlinks to making links
                      to another website, it on the site, blog, or content there
                      is some way to create backlinks like social bookmarking
                      guest posting, article, blogs, etc.) Technical - on-site
                      factors, Indian User feedback metrics, creating unique and
                      attractive content, Content Marketing, and increased
                      authority & reputation of the website.
                    </p>
                  </div>
                </div>
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
              <a class="accordion-link" href="#question1">
                {" "}
                Why should I choose the WebhubZone agency for SEO?
                <i class="fa fa-plus" aria-hidden="true"></i>
                <i class="fa fa-minus" aria-hidden="true"></i>
              </a>
              <div class="answer">
                <p>
                  <ol>
                    <li>Highly-trained SEO experts.</li>
                    <li>Keyword targeting and tracking.</li>
                    <li>Content relevancy and website analysis.</li>
                  </ol>
                </p>
              </div>
            </div>
            <div class="accordion-item" id="question2">
              <a class="accordion-link" href="#question2">
                Why is SEO important for a website?
                <i class="fa fa-plus" aria-hidden="true"></i>
                <i class="fa fa-minus" aria-hidden="true"></i>
              </a>
              <div class="answer">
                <p>
                  {" "}
                  In today's digital era where online is dominated, SEO has a
                  huge contribution in making a place in the digital world,
                  without this you cannot get your business ranked on the front
                  page and your business cannot reach in heights.
                </p>
              </div>
            </div>
            <div class="accordion-item" id="question3">
              <a class="accordion-link" href="#question3">
                {" "}
                What are the SEO plans to increase traffic on your website?
                <i class="fa fa-plus" aria-hidden="true"></i>
                <i class="fa fa-minus" aria-hidden="true"></i>
              </a>
              <div class="answer">
                <p>
                  {" "}
                  E-mail list building, business blogs, expanding the Indian
                  customer base, Webinars & online community, brand awareness,
                  building credibility, social media posting, on-page
                  optimization, site-speed analysis, web designing check, and
                  backlink analysis.
                </p>
              </div>
            </div>
            <div class="accordion-item" id="question4">
              <a class="accordion-link" href="#question4">
                What are the benefits of SEO for your website?
                <i class="fa fa-plus" aria-hidden="true"></i>
                <i class="fa fa-minus" aria-hidden="true"></i>
              </a>
              <div class="answer">
                <p>
                  {" "}
                  <ol>
                    <li> Software optimization</li>
                    <li>Improved Social networking</li>
                    <li>Improved SERP ranking</li>
                    <li>Content marketing</li>
                    <li>Site map optimization</li>
                    <li>Generate quality-based leads</li>
                    <li>Increased site revenue</li>
                  </ol>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceSEO;
