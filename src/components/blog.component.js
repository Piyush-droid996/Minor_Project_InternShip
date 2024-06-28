import React, {useEffect} from 'react';
//import { Routes, Route, BrowserRouter} from 'react-router-dom';
import './assets/style/blog.css';

import SvgBlog from './assets/svg_image/blog.svg';
import ServiceImg from './assets/images/services_image.jpg';

const Blog = () => {
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    return(
        <div id="newblog">
        <div class="bg_gradient_home_v2">
            <div class="vce-main-content container site-content new-home">
                <div class="topSection">
                    <div class="container">
                        <div class="top_text_title">
                            <p class="subtitle">
                                Want To Have A Best Designing And Optimization?
                            </p>
                        </div>
                        <div class="top_image">
                            <img src={SvgBlog} width="480" height="285" class="skip-lazy" alt="blogmain" />
                        </div>
                    </div>
                </div>
                <div class="container-blog">
                    <div id="main-box-1" class="main-box vce-border-top">
                        <div class="main-box-inside">
                            <div class="vce-loop-wrap">
                                <div class="nlatest_post">
                                    <div class="bg_images">

                                    </div>
                                    <article
                                        class="vce-post vce-lay-c post-133574 post type-post status-publish format-standard has-post-thumbnail hentry category-influencermarketing tag-financial"
                                        >
                                        <div class="meta-image">
                                                <img width="1140" height="597" src={ServiceImg} alt="blog1" />

                                        </div>
                                        <header class="entry-header">
                                            <h2 class="entry-title">
                                                <a href='/' title="">Web Hub Zone</a>
                                            </h2>
                                        </header>
                                        <div class="entry-content">
                                            <div itemprop="articleBody">
                                                <p>Xmas is one of the main events on a marketer's content calendar. It's
                                                    one of the few golden…</p>
                                            </div>
                                        </div>
                                        <div class="post-info">
                                            <span></span>
                                        </div>
                                    </article>
                                    <article
                                        class="vce-post vce-lay-c post-132007 post type-post status-publish format-standard has-post-thumbnail hentry category-influencermarketing">
                                        <div class="meta-image">
                                                <img width="1140" height="597" src={ServiceImg} alt="blog2"/>

                                        </div>
                                        <header class="entry-header">
                                            <h2 class="entry-title">
                                                <a href='/'
                                                    title="FMCG and Influencer Marketing Make a Power Couple">Web Hub
                                                    Zone</a>
                                            </h2>
                                        </header>
                                        <div class="entry-content">
                                            <div itemprop="articleBody">
                                                <p>Fast-moving consumer goods (FCMG) go hand in hand with influencer
                                                    marketing. Influencer Marketing marketplace, Zefmo, found that the…
                                                </p>
                                            </div>
                                        </div>
                                        <div class="post-info">
                                            <span></span>
                                        </div>
                                    </article>
                                    <article
                                        class="vce-post vce-lay-c post-132978 post type-post status-publish format-standard has-post-thumbnail hentry category-ecommerce category-influencermarketing"
                                        >
                                        <div class="meta-image">
                                                <img width="1140" height="597" src={ServiceImg} alt="aiblog" />

                                        </div>
                                        <header class="entry-header">
                                            <h2 class="entry-title">
                                                <a href="/"
                                                    title="6 Social Selling Tips to Market Your Product to a B2B Audience">Web
                                                    Hub Zone</a>
                                            </h2>
                                        </header>
                                        <div class="entry-content">
                                            <div itemprop="articleBody">
                                                <p>If there's one thing the pandemic changed about consumer habits, it's
                                                    how they shop. Not only are they…</p>
                                            </div>
                                        </div>
                                        <div class="post-info">
                                            <span></span>
                                        </div>
                                    </article>
                                </div>
                                {/* <!--------------blogsssssssssssssssssssss--> */}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    )
}

export default Blog;