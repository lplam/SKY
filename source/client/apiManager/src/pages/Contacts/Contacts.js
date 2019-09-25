import React, { Component } from 'react';


import MenuPage from "./../../components/Menu/Menu"
import Footer from "./../../components/Footer/Footer"


class Contacts extends Component {
    render() {

        return (
            <div>
            <div className="site-wrap">
              
           
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
                               <div className="site-section ftco-subscribe-1 site-blocks-cover pb-4" style={{backgroundImage: 'url("./servicesStyle/images/bg_1.jpg")',height: "150px",backgroundPosition : "center center",position : "relative",  }}>
                
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-7">
              <h2 className="mb-0">Contact</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
          </div>
        </div>
      </div>
              <div className="site-section">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <label htmlFor="fname">First Name</label>
                      <input type="text" id="fname" className="form-control form-control-lg" />
                    </div>
                    <div className="col-md-6 form-group">
                      <label htmlFor="lname">Last Name</label>
                      <input type="text" id="lname" className="form-control form-control-lg" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <label htmlFor="eaddress">Email Address</label>
                      <input type="text" id="eaddress" className="form-control form-control-lg" />
                    </div>
                    <div className="col-md-6 form-group">
                      <label htmlFor="tel">Tel. Number</label>
                      <input type="text" id="tel" className="form-control form-control-lg" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 form-group">
                      <label htmlFor="message">Message</label>
                      <textarea name id="message" cols={30} rows={10} className="form-control"  />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <input type="submit" defaultValue="Send Message" className="btn btn-primary btn-lg px-5" />
                    </div>
                  </div>
                </div>
              </div>
             
              
            </div>
            <Footer/>
            {/* .site-wrap */}
            {/* loader */}
          </div>
        );
    }
}


export default Contacts;
