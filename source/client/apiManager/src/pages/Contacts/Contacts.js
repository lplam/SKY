import React, { Component } from 'react';

import MenuPage from './../../components/Menu/Menu'
import Footer from './../../components/Footer/Footer'

import TopHeader from './../../components/TopHeader/TopHeader'
class Contacts extends Component {

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
    render() {

        return (
            <div>
                      
            <div className="site-wrap">
              
           
           
               
          <div className="noIndex site-section ftco-subscribe-1 site-blocks-cover pb-4" style={{backgroundImage: 'url("./servicesStyle/images/bg_1.jpg")',height: "150px",backgroundPosition : "center center",position : "relative",  }}>
                
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
           

          </div>
        );
    }
}







export default Contacts;
