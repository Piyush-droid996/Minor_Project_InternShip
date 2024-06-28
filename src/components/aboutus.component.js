import React, {useEffect} from 'react';

// import achievementImg from './assets/svg_image/achivement.svg';
import Img_DigitalMarketing from './assets/svg_image/digital_marketing.svg';
import Img_OurMission from './assets/svg_image/our_mission.svg';
import Img_TeamWork from './assets/svg_image/team_work.svg';
import Img_OurExpertise from './assets/svg_image/our_expertise.svg';
import Img_OurCommitment from './assets/svg_image/our_commitment.svg';

import Webm_achievement from './assets/svg_image/Animations/achievement.webm';

//import { Routes, Route, BrowserRouter} from 'react-router-dom';
import './assets/style/aboutus.css';

const About = () => {
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
    return (
        <div class="aboutusComp">
            <section class="achievements">
                <div class="container achievements__container">
                    <div class="achievements__left">
                        <video playsInline autoPlay muted loop>
                            <source src={Webm_achievement} type='video/webm' />
                        </video>

                    </div>
                    <div class="achievements__right">
                        <h1>Achievements</h1>
                        <p>WEBHUB ZONE NETWORK PVT. LTD. It was founded in 2020 as a digital marketing agency, which has
                            provided a web portal to the customers for their business</p>
                        <div class="achievements__cards">
                            <article class="achievement__card">
                                <span class="achievement__icon">
                                    <i class="uil uil-users-alt"></i></span>
                                <h3>98%</h3>
                                <p>positive Feedback</p>
                            </article>

                            <article class="achievement__card">
                                <span class="achievement__icon">
                                    <i class="uil  uil-check-circle"></i>
                                </span>
                                <h3>99%</h3>
                                <p>Completed Projects</p>
                            </article>

                            <article class="achievement__card">
                                <span class="achievement__icon">
                                    <i class="uil uil-trophy"></i>
                                </span>
                                <h3>26+</h3>
                                <p>We In Number</p>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <div class="about-blocks__container container container--lg">
                <div class="about-blocks__image-text">
                    <div class="about-blocks__text-wrapper ">
                        <div class="about-blocks__paragraph ">
                            <p><b>WEBHUB ZONE NETWORK PVT. LTD.</b> It was founded in 2020 as a digital marketing agency, which
                                has
                                provided a web portal to the customers for their business. This is a one-stop digital marketing
                                agency with high expertise in Search Engine Optimisation (SEO),
                                Web design & development, content Creation, Search Engine Marketing (SEO), Digital Marketing
                                (Creative Design tool, Brand marketing, Design solution), Website E-commerce, and Social Media
                                Management (SMM).</p>
                        </div>
                    </div>
                    <div class="about-blocks__image-wrapper">
                        <img class="about-blocks__image2" src={Img_DigitalMarketing} alt="digital_marketing" />
                    </div>
                </div>
                <div class="about-blocks__image-text">
                    <div class="about-blocks__image-wrapper">
                        <img class="about-blocks__image2" src={Img_OurMission} alt="our mission" />
                    </div>
                    <div class=" about-blocks__text-wrapper ">
                        <h2 class="about-blocks__title h3 ">Our Mission</h2>
                        <div class="about-blocks__paragraph ">
                            <p>We are a digital marketing company with only one goal: to make it easy for our customers'
                                businesses to sell products and services on the global market through an online platform
                                Increasing your brand's power and working together for success.&nbsp;</p>
                        </div>
                    </div>
                </div>
            </div>
            


            {/* <!-- about us  card page start--> */}
            <div class="team-area ">
                <div class="head_name">
                    <h1>Why Choose Us?</h1>
                </div>
                <div class="container-cards ">
                    <div class="row ">
                        <div class="col-md-4 ">
                            <div class="ncard ">
                                <div class="Team_work ">
                                    <img src={Img_TeamWork} alt=" team work" />
                                </div>
                                <div class="main-text ">
                                    <h2> Team Work</h2>
                                    <p>Providing world-class service to our clients is driven by a teamwork culture that
                                        encourages our workforce to strive for excellence constantly. Our highly qualified and
                                        certified team of digital marketers, web designers, graphic designers, SEO
                                        professionals, and project coordinators work hard to deliver the best digital solutions.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 ">
                            <div class="ncard ">
                                <div class="Team_work ">
                                    <img src={Img_OurExpertise} alt="our expertise" />
                                </div>
                                <div class="main-text ">
                                    <h2>Our Expertise</h2>
                                    <p>We Upgrade the search ranking position for target keywords, Combine marketing campaigns,
                                        Boost overall traffic (visitors) from search, Enhance overall CTR,
                                        Upgrading landing page and overall site conversion rates, Boost the site's overall
                                        usability and customer experience and Improve brand consciousness and growth through
                                        search.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 ">
                            <div class="ncard ">
                                <div class="Team_work ">
                                    <img src={Img_OurCommitment} alt="our commintment " />
                                </div>
                                <div class="main-text ">
                                    <h2>Our Commitment</h2>
                                    <p>We Upgrade the search ranking position for target keywords, Combine marketing campaigns,
                                        Boost overall traffic (visitors) from search, Enhance overall CTR,
                                        Upgrading landing page and overall site conversion rates, Boost the site's overall
                                        usability and customer experience and Improve brand consciousness and growth through
                                        search.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>


                </div>

            </div>
        </div> 
    )
}

export default About;