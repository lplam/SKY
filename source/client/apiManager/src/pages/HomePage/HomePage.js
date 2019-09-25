import React, {Component} from "react";
import {Link} from "react-router-dom"
import MenuPage from './../../components/Menu/Menu'
import Footer from  "./../../components/Footer/Footer"
class HomePage extends Component{
    render(){
        return(
            <div>
                <div id="top-header" className="hello">
                    <div id = "contact-header">
                        <span className = "green-color mr-r-50"><i className="fa fa-question-circle-o green-color icon-mr-r-10" aria-hidden="true"></i>Have a question?</span>
                        <span className = "green-color mr-r-50"><i className="fa fa-phone green-color icon-mr-r-10" aria-hidden="true"></i>0344 656 534</span>
                        <span className = "green-color mr-r-50"><i className="fa fa-envelope-o green-color icon-mr-r-10" aria-hidden="true"></i>sound@myapi.com</span>
                    </div>

                <div class="ml-auto">
                    <div class="social-wrap">
                    <a href="#"><span class="icon-facebook"><i class="fa fa-facebook" aria-hidden="true"></i></span></a>
                    <a href="#"><span class="icon-twitter"><i class="fa fa-twitter" aria-hidden="true"></i></span></a>
                    <a href="#"><span class="icon-linkedin"><i class="fa fa-instagram" aria-hidden="true"></i></span></a>

                    <a href="#" class="d-inline-block d-lg-none site-menu-toggle js-menu-toggle text-black"><span
                        class="icon-menu h3"></span></a>
                </div>
            </div>                

                </div>   

                <MenuPage match = {this.props.match}/>
                <section id="showcase" className="showcase">
                <div className="container">
                    <h1>Affordable Professional Web Design</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu luctus ipsum, rhoncus semper magna. Nulla nec magna sit amet sem interdum condimentum.</p>
                </div>
                </section>
                <section id="newsletter">
                <div className="container">
                    <h1>Subscribe To Our Newsletter</h1>
                    <form>
                    <input type="email" placeholder="Enter your email..." />
                    <button type="submit" className="btn-sub">Subscribe</button>
                    </form>
                </div>
                </section>
              
                <section id="sec-1">
                <span id="join-over">
                    Join over <strong>5 million developers</strong>.
                </span>
                <span id="practice">
                    Practice coding, prepare for interviews, and get hired.
                </span>
                
                    <div id="btn-sign">
                    <Link className = "btnSign" to = "/login">
                        <div className="btns btn1">Sign Up &amp; Code</div>
                    </Link>
                    </div>
                
                </section>

                <div class="site-section">
                <div class="container">
                    <div class="row mb-5 justify-content-center text-center">
                    <div class="col-lg-4 mb-5">
                        <h2 class="section-title-underline mb-5">
                        <span>Why Academics Works</span>
                        </h2>
                    </div>
                    </div>
                    <div class="row">
                    <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">

                        <div class="feature-1 border">
                        <div class="icon-wrapper bg-primary">
                            <span class="flaticon-mortarboard text-white" style = {{}}></span>
                        </div>
                        <div class="feature-1-content">
                            <h2>Api Voice Into Word</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi hendrerit elit</p>
                            <p><a href="#" class="btn btn-primary px-4 rounded-0">Learn More</a></p>
                        </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
                        <div class="feature-1 border">
                        <div class="icon-wrapper bg-primary">
                            <span class="flaticon-school-material text-white"></span>
                        </div>
                        <div class="feature-1-content">
                            <h2>Api Word Into Voice</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi hendrerit elit</p>
                            <p><a href="#" class="btn btn-primary px-4 rounded-0">Learn More</a></p>
                        </div>
                        </div> 
                    </div>
                    <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
                        <div class="feature-1 border">
                        <div class="icon-wrapper bg-primary">
                            <span class="flaticon-library text-white"></span>
                        </div>
                        <div class="feature-1-content">
                            <h2>Api English Into Vietnamese</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi hendrerit elit</p>
                            <p><Link to = "/products" class="btn btn-primary px-4 rounded-0">Learn More</Link></p>
                        </div>
                        </div> 
                    </div>
                    </div>
                </div>
    </div>



                <Footer></Footer>
            </div>

        )
    }
}


export default HomePage;