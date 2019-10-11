import React, {Component} from "react";
import {Link} from "react-router-dom"
import Footer from  "./../../components/Footer/Footer"
import MenuPage from './../../components/Menu/Menu'
import TopHeader from './../../components/TopHeader/TopHeader'


class HomePage extends Component{
    constructor(props) {
        super(props);
        this.state = {
               user: localStorage.getItem('user'),
        };
      }
    
      componentWillMount() {
        console.log("co' vao homepage")
      if(this.state.user == null ){
        this.props.history.push("/")
      }
    }

    render(){



        return(
            <div>
            
              <div className="slidershow middle">
        <div className="slides">
          <input type="radio" name="r" id="r1" defaultChecked />
          <input type="radio" name="r" id="r2" />
          <input type="radio" name="r" id="r3" />
          <input type="radio" name="r" id="r4" />
          <input type="radio" name="r" id="r5" />
          <div className="slide s1">
            <img style = {{position : "absolute", top: "-144px",marginTop: "-150px",height: "177%"}} src="./loginStyle/img/showcase.jpg" alt="" />
          </div>
          <div className="slide">
            <img style = {{ position : "absolute", top: "-144px",marginTop: "-150px",height: "177%"}} src="./loginStyle/img/showcase.jpg" alt="" />
          </div>
          <div className="slide">
            <img style = {{position : "absolute", top: "-144px",marginTop: "-150px",height: "177%"}} src="./aboutStyle/3.jpg" alt="" />
          </div>
          <div className="slide">
            <img style = {{position : "absolute", top: "-144px",marginTop: "-150px",height: "177%"}} src="./aboutStyle/4.jpg" alt="" />
          </div>
          <div className="slide">
            <img style = {{position : "absolute", top: "-144px",marginTop: "-150px",height: "177%"}} src="./aboutStyle/5.jpg" alt="" />
          </div>
        </div>
        <div className="navigation">
          <label htmlFor="r1" className="bar" />
          <label htmlFor="r2" className="bar" />
          <label htmlFor="r3" className="bar" />
          <label htmlFor="r4" className="bar" />
          <label htmlFor="r5" className="bar" />
        </div>
      </div>

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

                <div className="site-section">

                    <div className="justify-content-center text-center why-academics">
                    <div className="mb-5 ">
                        <h2 className="section-title-underline mb-5">
                        <span>Why Academics Works</span>
                        </h2>
                    </div>
                    </div>
                    <div className = "container">
                    <div className="row">
                    <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">

                        <div className="features-1 feature-1 border">
                        
                        <div className="feature-1-content">
                            <h2>Api Voice Into Word</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi hendrerit elit</p>
                            <p><a href="#" className="btn btn-primary px-4 rounded-0">Learn More</a></p>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                        <div className="features-1 feature-1 border">
                       
                        <div className="feature-1-content">
                            <h2>Api Word Into Voice</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi hendrerit elit</p>
                            <p><a href="#" className="btn btn-primary px-4 rounded-0">Learn More</a></p>
                        </div>
                        </div> 
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                        <div className="features-1 feature-1 border">
                        
                        <div className="feature-1-content">
                            <h2>Api English Into Vietnamese</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi hendrerit elit</p>
                            <p><Link to = "/products" className="btn btn-primary px-4 rounded-0">Learn More</Link></p>
                        </div>
                        </div> 
                    </div>
                    </div>
                    </div>
    </div>


   

            </div>

        )
    }
}


export default HomePage;