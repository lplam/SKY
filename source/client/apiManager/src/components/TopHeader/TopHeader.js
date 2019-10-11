import React, { Component } from 'react';


class TopHeader extends Component {
    render() {

        return (
            <div id="top-header" className="hello">
                    <div id = "contact-header">
                        <span className = "green-color mr-r-50"><i className="fa fa-question-circle-o green-color icon-mr-r-10" aria-hidden="true"></i>Have a question?</span>
                        <span className = "green-color mr-r-50"><i className="fa fa-phone green-color icon-mr-r-10" aria-hidden="true"></i>0344 656 534</span>
                        <span className = "green-color mr-r-50"><i className="fa fa-envelope-o green-color icon-mr-r-10" aria-hidden="true"></i>sound@myapi.com</span>
                    </div>

                    <div className="ml-auto">
                        <div className="social-wrap">
                          <a href="#"><span className="icon-facebook"><i className="fa fa-facebook" aria-hidden="true"></i></span></a>
                          <a href="#"><span className="icon-twitter"><i className="fa fa-twitter" aria-hidden="true"></i></span></a>
                          <a href="#"><span className="icon-linkedin"><i className="fa fa-instagram" aria-hidden="true"></i></span></a>
                        </div>
                    </div>                
            </div>   
        );
    }
}







export default TopHeader;