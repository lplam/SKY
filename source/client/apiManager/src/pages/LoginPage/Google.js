import GoogleLogin from 'react-google-login';
import React,{Component} from 'react';
import {Redirect} from "react-router-dom";
import './../../App.css';


class Google extends Component
{

  constructor(props)
  {
    super(props);
    this.state = {
      userID : '',
      name: '',
      email: '',
      picture: '',
      IsloggedIn: true,
    }
  }

  responseGoogle = (response) => {
      this.setState({
          userID: response.profileObj.googleId,
          name: response.profileObj.name,
          email: response.profileObj.email,
          picture: response.profileObj.imageUrl,
      })
    localStorage.setItem('GoogleUser',this.state.email);
    localStorage.setItem('GoogleName',this.state.name);
    localStorage.setItem('GoogleID',this.state.userID);
    localStorage.setItem('GooglePicture',this.state.picture);
    window.location.reload();
  }

  render()
  {    
    var {IsloggedIn} = this.state;
    let fbcontent;
    if(IsloggedIn)
    {
        fbcontent = (
            <GoogleLogin
            clientId="1060295974592-82oh1am3c9s99qvd2s12rdkgvn437h05.apps.googleusercontent.com"
            buttonText="Login With Gooogle"
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
            cookiePolicy={'single_host_origin'}
            className= "ggbtn"
          />
          )
    }

    if(localStorage.getItem('GoogleUser'))
    {
        return <Redirect to = '/'></Redirect>
    }
    else
    {
    return(
        <div>{fbcontent}</div>
        )
    }
  }
}


export default Google;
