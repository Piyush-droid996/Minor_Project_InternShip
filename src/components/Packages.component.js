import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import './assets/style/packages.css';

const Packages = () => {
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
    return(
        <div class="package-section">
            <div class="package-heading">
                <h1>Packages</h1>
            </div>
            <div class="package-container">
                <div class="drop">
                    <div class="content">
                        <h2>Digital Marketing</h2>
                        <p>Webhubzone provides a very affordable digital marketing packages in India..</p>
                        <Link to="/pricing/DigitalMarketing"><a href="/pricing/DigitalMarketing">Explore</a></Link>
                    </div>
                </div>
                <div class="drop">
                    <div class="content">
                        <h2>Website Development</h2>
                        <p>Webhubzon is a leading provider of website design and
                            development packages in India..</p>
                        <Link to="/pricing/WebPackages"><a href="/pricing/WebPackages">Explore</a></Link>
                    </div>
                </div>
                <div class="drop">
                    <div class="content">
                        <h2>Content Marketing</h2>
                        <p>Webhubzone provide best of the content writing packages in india..</p>
                        <Link to="/pricing/ContentWriting"><a href="/pricing/ContentWriting">Explore</a></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Packages;