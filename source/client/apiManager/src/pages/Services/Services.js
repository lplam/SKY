import React, {Component} from "react";
import {Link} from "react-router-dom"
import Footer from "../../components/Footer/Footer";
import MenuPage from './../../components/Menu/Menu'

import TopHeader from './../../components/TopHeader/TopHeader'
class Services extends Component{
  constructor(props) {
    super(props);
    this.state = {
           user: localStorage.getItem('user'),
    };
  }

  componentWillMount() {
  if(this.state.user == null ){
    this.props.history.push("/")
  }
}

    render(){
        return(
            


       
            <div>
              
            <div className="site-wrap">
       
              <div className="site-section">
                <div className="container">
                  <div className="row row-center">
                    <div className="col-lg-4 col-md-6 mb-4">
                      <div className="course-1-item">
                        <figure className="a">
                          <a href="course-single.html"><img src="servicesStyle/images/course_1.jpg" alt="Image" className="img-fluid" /></a>
                          <div className="price">$0.00</div>
                          <div className="category"><h3>Api English into Vietnamese</h3></div>  
                        </figure>

                        <div className="course-1-content pb-4">
                          <h2>How To Create Key Api English into Vietnamese</h2>
                          <h1  style = {{color: "#1e580dcf"}}> Free Trial</h1>
                          <div className="rating text-center mb-3">
                            <span className="icon-star2 text-warning" />
                            <span className="icon-star2 text-warning" />
                            <span className="icon-star2 text-warning" />
                            <span className="icon-star2 text-warning" />
                            <span className="icon-star2 text-warning" />
                          </div>
                          <p className="desc mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique accusantium ipsam.</p>
                          <p><Link to = "/createkey" className="btn btn-primary rounded-0 px-4">Create Key</Link></p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                      <div className="course-1-item">
                        <figure className="thumnail">
                          <a href="course-single.html"><img src="servicesStyle/images/course_2.jpg" alt="Image" className="img-fluid" /></a>
                          <div className="price">$99.00</div>
                          <div className="category"><h3>Mobile Application</h3></div>  
                        </figure>
                        <div className="course-1-content pb-4">
                          <h2>How To Create Mobile Apps Using Ionic</h2>
                          <h1  style = {{color: "#1e580dcf"}}>3 Month</h1>

                          <div className="rating text-center mb-3">
                            <span className="icon-star2 text-warning" />
                            <span className="icon-star2 text-warning" />
                            <span className="icon-star2 text-warning" />
                            <span className="icon-star2 text-warning" />
                            <span className="icon-star2 text-warning" />
                          </div>
                          <p className="desc mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique accusantium ipsam.</p>
                          <p><Link to = "/createkey" className="btn btn-primary rounded-0 px-4">Create Key</Link></p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                      <div className="course-1-item">
                        <figure className="thumnail">
                          <a href="course-single.html"><img src="servicesStyle/images/course_3.jpg" alt="Image" className="img-fluid" /></a>
                          <div className="price">$99.00</div>
                          <div className="category"><h3>Mobile Application</h3></div>  
                        </figure>
                        <div className="course-1-content pb-4">
                          <h2>How To Create Mobile Apps Using Ionic</h2>
                          <h1  style = {{color: "#1e580dcf"}}>1 Year</h1>

                          <div className="rating text-center mb-3">
                            <span className="icon-star2 text-warning" />
                            <span className="icon-star2 text-warning" />
                            <span className="icon-star2 text-warning" />
                            <span className="icon-star2 text-warning" />
                            <span className="icon-star2 text-warning" />
                          </div>
                          <p className="desc mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique accusantium ipsam.</p>
                          <p><Link to = "/createkey" className="btn btn-primary rounded-0 px-4">Create Key</Link></p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                      <div className="course-1-item">
                        <figure className="thumnail">
                          <a href="course-single.html"><img src="servicesStyle/images/course_4.jpg" alt="Image" className="img-fluid" /></a>
                          <div className="price">$99.00</div>
                          <div className="category"><h3>Mobile Application</h3></div>  
                        </figure>
                        <div className="course-1-content pb-4">
                          <h2>How To Create Mobile Apps Using Ionic</h2>
                          <div className="rating text-center mb-3">
                            <span className="icon-star2 text-warning" />
                            <span className="icon-star2 text-warning" />
                            <span className="icon-star2 text-warning" />
                            <span className="icon-star2 text-warning" />
                            <span className="icon-star2 text-warning" />
                          </div>
                          <p className="desc mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique accusantium ipsam.</p>
                          <p><Link to = "/createkey" className="btn btn-primary rounded-0 px-4">Create Key</Link></p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                      <div className="course-1-item">
                        <figure className="thumnail">
                          <a href="course-single.html"><img src="servicesStyle/images/course_5.jpg" alt="Image" className="img-fluid" /></a>
                          <div className="price">$99.00</div>
                          <div className="category"><h3>Mobile Application</h3></div>  
                        </figure>
                        <div className="course-1-content pb-4">
                          <h2>How To Create Mobile Apps Using Ionic</h2>
                          <div className="rating text-center mb-3">
                            <span className="icon-star2 text-warning" />
                            <span className="icon-star2 text-warning" />
                            <span className="icon-star2 text-warning" />
                            <span className="icon-star2 text-warning" />
                            <span className="icon-star2 text-warning" />
                          </div>
                          <p className="desc mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique accusantium ipsam.</p>
                          <p><Link to = "/createkey" className="btn btn-primary rounded-0 px-4">Create Key</Link></p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                      <div className="course-1-item">
                        <figure className="thumnail">
                          <a href="course-single.html"><img src="servicesStyle/images/course_6.jpg" alt="Image" className="img-fluid" /></a>
                          <div className="price">$99.00</div>
                          <div className="category"><h3>Mobile Application</h3></div>  
                        </figure>
                        <div className="course-1-content pb-4">
                          <h2>How To Create Mobile Apps Using Ionic</h2>
                          <div className="rating text-center mb-3">
                            <span className="icon-star2 text-warning" />
                            <span className="icon-star2 text-warning" />
                            <span className="icon-star2 text-warning" />
                            <span className="icon-star2 text-warning" />
                            <span className="icon-star2 text-warning" />
                          </div>
                          <p className="desc mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique accusantium ipsam.</p>
                          <p><Link to = "/createkey" className="btn btn-primary rounded-0 px-4">Create Key</Link></p>
                        </div>
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


export default Services;