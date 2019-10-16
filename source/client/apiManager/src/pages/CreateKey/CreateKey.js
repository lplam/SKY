import React, {Component} from "react";
import API from '../Database/APICnn';
import '../../App.css';
import ReceiveKey from "./ReceiveKey"
import {Link, Redirect, Route} from "react-router-dom";
import { Switch, BrowserRouter as Router } from "react-router-dom";

const api = new API();
class CreateKey extends Component{

  constructor(props) {
    super(props);
    this.create = this.create.bind(this)
    this.state = {
      maccount :JSON.parse(localStorage.getItem('laccount')) || '',
      mpassword: JSON.parse(localStorage.getItem('lpassword')) || '',
      user: localStorage.getItem('user'),
      facebookuser: localStorage.getItem('FacebookUser'),
      googleuser: localStorage.getItem("GoogleUser"),

      data: [],
      name : "",
    };
  }

  componentWillMount() {
    api.getData().then(response => {
      console.log('Data fetched', response)
      this.setState({
        data: response
      })

      api.getData().then(response => {
        console.log('Data fetched', response)
        this.setState({
          ...this.state,
          data: response
        })
        for(var i=0;i<this.state.data.length;i++)
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
              bank: this.state.data[i].numofbank,
              name : this.state.last_name + " " +  this.state.first_name

            })
           
        }
      })
    })
    
  if(this.state.user == null ){
  }
  }





create = () =>{
  var data = {
    method: "get-key",
    id: "0",
    type: "free-trial",
    user: "128s0209",
    start: Date.now()
  }

  api.GenKey(data).then(response =>{
    localStorage.setItem("apikey", response.data);
    localStorage.setItem("redirectrekey", true)
  })
}



    render(){
        let name = this.state.name
        let phone = this.state.phone
        let card = this.state.bank
     
        return(

          
            <div>
              
              <div id = "backgroundForm"><div id = "supCredit">
                  <span id = "card1">
                      <img src ="credit1.png"></img>
                  </span>
                  <h2>Access to all Platform products</h2>
                  <p>Get all the resources you need to build and run your apps, websites, and services, including Firebase and the Convert API.</p>
                <h2>$ 300 credit offered</h2>
                    <p>Sign up and get a $ 300 credit on the Google Cloud Platform for 12 months.</p>
                    <h2>No direct debit after the free trial</h2>
                    <p>We ask you to enter your credit card information to verify that you are not a robot. Your account will not be charged unless you decide to manually upgrade to a paid account.</p>
                </div></div>
              
            <div className="form-style-10">
                  
        <h1>Create Key Now<span>Fill out the information to get the key!</span></h1>
        <form >
          <div className="section"><span>1</span>Your Information </div>
          <div className="inner-wrap">
            <label style={{color: "black"}}>Your Full Name <input type="text" name="field1" value = {name} readOnly /></label>
            <label  style={{color: "black"}}>Your Number <input type="text" name="field1" value = {phone} readOnly/></label>
            <label  style={{color: "black"}}>Address <textarea name="field2" defaultValue={""} /></label>
          </div>
          <div className="section"><span>2</span>Credit Card &amp; Paypal</div>
          <div className="inner-wrap">
            <label  style={{color: "black"}}>Pay <input type="email" name="field3" value = "Viet Nam" readOnly/></label>
            <label  style={{color: "black"}}>Card Number <input  style={{color: "black"}} type="text" name="field4" value = {card} /></label>
          </div>
          <div className="section"><span>3</span>Key will be send to your email &amp; phone number </div>
          <div className="inner-wrap">
            <label  style={{color: "black"}}>Your email <input type="email" name="field5"  value =""/></label>
            <label  style={{color: "black"}}>Your phone number<input type="text" name="field6" /></label>
          </div>
          <div className="button-section">
            <Link to = "/receivekey"> <input type="button" value = "Create" name="Sign Up" onClick ={this.create} /></Link>
            <span className="privacy-policy">
              <input type="checkbox" name="field7" />You agree to our rules. 
            </span>
          </div>
        </form>
      </div>
          </div>
        )
    }
}


export default CreateKey;