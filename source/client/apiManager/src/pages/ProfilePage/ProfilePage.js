import React, {Component} from "react";
import MenuPage from './../../components/Menu/Menu'
import Header from './../../components/Header/header'
import axios from 'axios'
import {Redirect} from "react-router-dom";

class ProfilePage extends Component{

  constructor(props) {
    super(props);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
    this.handleLastname = this.handleLastname.bind(this);
    this.handleFirstname = this.handleFirstname.bind(this);
    this.edit = this.edit.bind(this);
    this.state = {
      laccount :JSON.parse(localStorage.getItem('laccount')) || [],
      lpassword: JSON.parse(localStorage.getItem('lpassword')) || [],
      first_name: "",
      last_name: "",
      redirect: false
    };
  }
  RenderRedirect = ()=>{
    if(this.state.redirect)
      return <Redirect to = '/profile'></Redirect>
  }

    edit = () =>{
      axios.put('http://5d8a1f54b2568e0014d884cb.mockapi.io/api/v1/accounts/11',{
        account: this.state.laccount,
        password: this.state.lpassword,
        name: this.state.last_name + " " + this.state.first_name 
      })
      .then(response =>{
        console.log(response);
        console.log("1");
      })
      .catch(err => {
        console.log(err);
      });
  
    }
    handleUsername(e)
    {
      this.setState({laccount: e.target.value});
      console.log(this.state.laccount);
    }

    handlePassword(e)
    {
      this.setState({lpassword: e.target.value});
    }
    handleFirstname(e)
    {
      this.setState({first_name: String(e.target.value)});
      console.log(this.state.first_name);
    }
    handleLastname(e)
    {
      this.setState({last_name: String(e.target.value)});
    }
   

    render(){
        return(
          <div>
                <Header/>
                <MenuPage match = {this.props.match}/>

        <link href="./servicesStyle/css/bootstrap.min.css" rel="stylesheet" />  

        <hr />
        <div className="container bootstrap snippet">
          <div className="row">
            <div className="col-sm-10"><h1>User name</h1></div>
            {/* <div className="col-sm-2"><a href="/users" className="pull-right"><img title="profile image" className="img-circle img-responsive" src="http://www.gravatar.com/avatar/28fd20ccec6865e2d5f0e1f4446eb7bf?s=100" /></a></div> */}
          </div>
          <div className="row">
            <div className="col-sm-3">{/*left col*/}
              <div className="text-center">
                <img src="./servicesStyle/images/person_1.jpg" className="avatar img-circle img-thumbnail" alt="avatar" />
                <h6>Upload a different photo...</h6>
                <input type="file" className="text-center center-block file-upload" />
              </div><br />
              <div className="panel panel-default">
                <div className="panel-heading">Website <i className="fa fa-link fa-1x" /></div>
                <div className="panel-body"><a href="http://bootnipets.com">bootnipets.com</a></div>
              </div>
             
              <div className="panel panel-default">
                <div className="panel-heading">Social Media</div>
                <div className="panel-body">
                  <i className="fa fa-facebook fa-2x" /> <i className="fa fa-github fa-2x" /> <i className="fa fa-twitter fa-2x" /> <i className="fa fa-pinterest fa-2x" /> <i className="fa fa-google-plus fa-2x" />
                </div>
              </div>
            </div>{/*/col-3*/}
            <div className="col-sm-9">
              <ul className="nav nav-tabs">
                <li className="active"><a data-toggle="tab" href="#home">Home</a></li>
                
              </ul>
              <div className="tab-content">
                <div className="tab-pane active" id="home">
                  <hr />
                  <div className="form" id="registrationForm">
                    <div className="form-group">
                      <div className="col-xs-6">
                        <label htmlFor="first_name" style={{margin:"5px"}}><h4>First name</h4></label>
                        <input type="text" className="form-control" style={{height:"34px" ,margin:"5px"}} name="first_name" id="first_name" placeholder="first name" title="enter your first name if any." onChange={this.handleFirstname} />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-xs-6">
                        <label htmlFor="last_name" style={{margin:"5px"}}><h4>Last name</h4></label>
                        <input type="text" className="form-control"  style={{height:"34px" ,margin:"5px"}} name="last_name" id="last_name" placeholder="last name" title="enter your last name if any." onChange={this.handleLastname}/>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-xs-6">
                        <label htmlFor="phone" style={{margin:"5px"}}><h4>Phone</h4></label>
                        <input type="text" className="form-control" style={{height:"34px" ,margin:"5px"}} name="phone" id="phone" placeholder="enter phone" title="enter your phone number if any." />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-xs-6">
                        <label htmlFor="mobile" style={{margin:"5px"}}><h4>Card Number</h4></label>
                        <input type="text" className="form-control" style={{height:"34px" ,margin:"5px"}} name="mobile" id="mobile" placeholder="enter card number" title="enter your mobile number if any." />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-xs-6">
                        <label htmlFor="email" style={{margin:"5px"}}><h4>Username</h4></label>
                        <input type="text" className="form-control" style={{height:"34px" ,margin:"5px"}} name="email" id="email" placeholder="you@email.com" title="enter your email." onChange={this.handleUsername}/>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-xs-6">
                        <label htmlFor="email" style={{margin:"5px"}}><h4>Location</h4></label>
                        <input type="email" className="form-control" style={{height:"34px" ,margin:"5px"}} id="location" placeholder="somewhere" title="enter a location" />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-xs-6">
                        <label htmlFor="password" style={{margin:"5px"}}><h4>Password</h4></label>
                        <input type="password" className="form-control"  style={{height:"34px" ,margin:"5px"}} name="password" id="password" placeholder="password" title="enter your password." onChange={this.handlePassword}/>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-xs-6">
                        <label htmlFor="password2" style={{margin:"5px"}}><h4>Verify</h4></label>
                        <input type="password" className="form-control" style={{height:"34px" ,margin:"5px"}} name="password2" id="password2" placeholder="password2" title="enter your password2." />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-xs-12">
                        <br />
                        {this.RenderRedirect}
                        <button className="btn btn-lg btn-success" onClick={this.edit}><i className="glyphicon glyphicon-ok-sign" /> Save</button>
                        <button className="btn btn-lg" type="reset"><i className="glyphicon glyphicon-repeat" /> Reset</button>
                      </div>
                    </div>
                  </div>
                  <hr />
                </div>{/*/tab-pane*/}
                
          </div>{/*/col-9*/}
        </div>{/*/row*/}

      </div>
      
            
                </div>
                </div>
        )
    }
        
}

export default ProfilePage;