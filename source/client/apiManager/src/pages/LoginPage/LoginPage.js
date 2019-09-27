import React, {Component} from "react";
import {Link, Redirect} from "react-router-dom";
import API from '../Database/APICnn';
const api = new API();

class LoginPage extends Component{
    
    constructor(props) {
      super(props);
      this.handlePassword = this.handlePassword.bind(this);
      this.handleUsername = this.handleUsername.bind(this);
      this.signIn = this.signIn.bind(this);
      this.state = {
        laccount :JSON.parse(localStorage.getItem('laccount')) || [],
        lpassword: JSON.parse(localStorage.getItem('lpassword')) || [],
        redirect: false,
        data: []
      };
    }

    componentWillMount() {
      api.getData().then(response => {
        console.log('Data fetched', response)
        this.setState({
          data: response
        })
      })
    }


   getInitialState() {
      var selectedOption = localStorage.getItem( 'SelectedOption' ) || 1;
  
      return {
          selectedOption: selectedOption
      };
    }
  
    setSelectedOption( option ) {
          localStorage.setItem( 'SelectedOption', option );
          this.setState( { selectedOption: option } );
      }

    handleUsername(e)
    {
      this.setState({laccount: e.target.value});
    }

    handlePassword(e)
    {
      this.setState({lpassword: e.target.value});
    }

    addProject = (newProject) => {
      this.setState({
        allProjects: this.state.allProjects.concat(newProject)
      },() => {
        localStorage.setItem('allProjects', JSON.stringify(this.state.allProjects))
      });
    }

    signIn = () =>{
      var check = '0';
      Object.entries(this.state.data).map(([key,value],i) =>{
        if(value.account === this.state.laccount && value.password === this.state.lpassword)
        {
          check = '1';
        }
      })
      if(check === '0')
        console.log("đăng nhập thất bại");
      else
        {
          console.log("đăng nhập thành công");
        
        this.setState({
          laccount: this.state.laccount,
          redirect : true,
          lpassword: this.state.lpassword
        },() => {
          localStorage.setItem('user', JSON.stringify(this.state.laccount
          ))
        });
      }
  }

  RenderRedirect = ()=>{
    if(this.state.redirect)
      return <Redirect to = ''></Redirect>
  }
    

    render(){
        return(
          <div>

            <link rel="stylesheet" type="text/css" href="./loginStyle/css/main.css"></link>

        <div className="limiter">
          <div className="container-login100" style={{backgroundImage: 'url("./loginStyle/images/bg-01.jpg")'}}>
            <div className="wrap-login100 p-l-110 p-r-110 p-t-37 p-b-33">
              <form className="login100-form validate-form flex-sb flex-w">
                <span className="login100-form-title p-b-34">
                  Sign In With
                </span>
                <a href="#" className="btn-face m-b-20">
                  <i className="fa fa-facebook-official" />
                  Facebook
                </a>
                <a href="#" className="btn-google m-b-20">
                  <img src="loginStyle/images/icons/icon-google.png" alt="GOOGLE" />
                  Google
                </a>
                <div className="p-t-7 p-b-9">
                  <span className="txt1">
                    Username
                  </span>
                </div>
                <div className="wrap-input100 validate-input" data-validate="Username is required">
                  <input className="input100" type="text" name="username" id = 'account' onChange = {this.handleUsername}/>
                  <span className="focus-input100" />
                </div>
                <div className="p-t-13 p-b-9">
                  <span className="txt1">
                    Password
                  </span>
                  <a href="#" className="txt2 bo1 m-l-5">
                    Forgot?
                  </a>
                </div>
                <div className="wrap-input100 validate-input" data-validate="Password is required">
                  <input className="input100" type="password" name="pass" id = 'password' onChange = {this.handlePassword}/>
                  <span className="focus-input100" />
                </div>
                <div className="container-login100-form-btn">
                  {this.RenderRedirect()}
                  <button type="button" className="login100-form-btn" onClick = {this.signIn}>
                    Sign In
                  </button>
                  
                </div>
                <div className="w-full text-center p-t-28">
                  <span className="txt2">
                    Not a member?
                  </span>
                  <Link to = "/resgister" className="txt2 bo1">
                    Sign up now
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div id="dropDownSelect1" />
      </div>
        )
    }
}


export default LoginPage;