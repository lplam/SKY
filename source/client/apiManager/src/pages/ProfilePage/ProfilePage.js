import React, {Component} from "react";
import MenuPage from './../../components/Menu/Menu'
import TopHeader from './../../components/TopHeader/TopHeader'
import axios from 'axios'
import {Redirect} from "react-router-dom";
import {Link} from "react-router-dom";
import API from '../Database/APICnn';
const api = new API();

class ProfilePage extends Component{

  constructor(props) {
    super(props);
    this.handleBank = this.handleBank.bind(this);
    this.handlePhone = this.handlePhone.bind(this);
    this.handleLastname = this.handleLastname.bind(this);
    this.handleFirstname = this.handleFirstname.bind(this);
    this.edit = this.edit.bind(this);
    this.state = {
      laccount :  [],
      lpassword:  [],
      account: JSON.parse(localStorage.getItem('user')) || [],
      first_name: "",
      last_name: "",
      phone:"",
      bank:"",
      redirect: false,
      data: [],
      id: 0
    };
  }
  componentWillMount() {
    api.getData().then(response => {
      console.log('Data fetched', response)
      this.setState({
        ...this.state,
        data: response
      })
      for(var i=0;i<this.state.data.length;i++)
      {
        console.log(this.state.account)
        if(this.state.data[i].account === this.state.account)
        {
          var name = this.state.data[i].name.split(" ")
          this.setState({
            ...this.state,
            first_name: name.pop(),
            last_name: name.toString().split(",").join(" "),
            id: this.state.data[i].id,
            laccount:this.state.data[i].account,
            lpassword:this.state.data[i].password,
            phone:this.state.data[i].phone,
            bank: this.state.data[i].numofbank
          })
          
        }
      }
      console.log(this.state.first_name)
      console.log(this.state.last_name)

    })
    
  }
  RenderRedirect = ()=>{
    if(this.state.redirect)
      return <Redirect to = '/profile'></Redirect>
  }
  reset = ()=>{
    this.setState({
      ...this.state,
      first_name:"",
      last_name:"",
      phone:"",
      bank:""
    })
  }
    edit = () =>{
      console.log(this.state.id)
      axios.put(`http://5d8a1f54b2568e0014d884cb.mockapi.io/api/v1/accounts/${this.state.id}`,{
        account: this.state.laccount,
        password: this.state.lpassword,
        phone: this.state.phone,
        numofbank: this.state.bank,
        name: this.state.last_name + " " + this.state.first_name 
      })
      .then(response =>{
        alert("edit succeed");
      })
      .catch(err => {
        console.log(err);
      });
  
    }
    handlePhone(e){
      this.setState({phone: String(e.target.value)});
    }
    handleBank(e)
    {
      this.setState({bank: String(e.target.value)});
    }
    handleFirstname(e)
    {
      this.setState({first_name: String(e.target.value)});
    }
    handleLastname(e)
    {
      this.setState({last_name: String(e.target.value)});
    }
   
    onChangeHandler = event =>{
        console.log(event.target.files[0])
    }

    render(){
        return(
          <div>
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
                <input type="file" className="text-center center-block file-upload" onChange={this.onChangeHandler} />
              </div><br />
              <div className="panel panel-default">
                <div className="panel-heading">Website <i className="fa fa-link fa-1x" /></div>
                <div className="panel-body"><Link to = "/">SoundAPI.com</Link></div>
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
                <li className="active"><a data-toggle="tab" href="#home">Profile</a></li>
                
              </ul>
              <div className="tab-content">
                <div className="tab-pane active" id="home">
                  <hr />
                  <div className="form" id="registrationForm">
                    <div className="form-group">
                      <div className="col-xs-6">
                        <label htmlFor="first_name" ><h4>First name</h4></label>
                        <input type="text" className="form-control"  name="first_name" id="first_name"  value={this.state.first_name} title="enter your first name if any." onChange={this.handleFirstname} />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-xs-6">
                        <label htmlFor="last_name" ><h4>Last name</h4></label>
                        <input type="text" className="form-control"   name="last_name" id="last_name" value={this.state.last_name} title="enter your last name if any." onChange={this.handleLastname}/>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-xs-6">
                        <label htmlFor="phone" ><h4>Phone</h4></label>
                        <input type="text" className="form-control"  name="phone" id="phone" placeholder="enter phone" title="enter your phone number if any." onChange={this.handlePhone} value={this.state.phone}/>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-xs-6">
                        <label htmlFor="mobile" ><h4>Card Number</h4></label>
                        <input type="text" className="form-control"  name="mobile" id="mobile" placeholder="enter card number" title="enter your mobile number if any." onChange={this.handleBank} value={this.state.bank}/>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-xs-6">
                        <label htmlFor="email" ><h4>Username</h4></label>
                        <input type="text" className="form-control"  name="email" id="email" placeholder="you@email.com" title="enter your email." value={this.state.laccount} readOnly />
                      </div>
                    </div>
                    
                    <div className="form-group">
                      <div className="col-xs-6">
                        <label htmlFor="password" ><h4>Password</h4></label>
                        <input type="password" className="form-control"   name="password" id="password" placeholder="password" title="enter your password." value={this.state.lpassword} readOnly/>
                      </div>
                    </div>
                   
                    <div className="form-group">
                      <div className="col-xs-12">
                        <br />
                        {this.RenderRedirect}
                        <button className="btn btn-lg btn-success" onClick={this.edit}><i className="glyphicon glyphicon-ok-sign" /> Save</button>
                        <button className="btn btn-lg" type="reset" onClick={this.reset}><i className="glyphicon glyphicon-repeat" /> Reset</button>
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