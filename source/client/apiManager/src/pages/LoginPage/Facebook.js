import React,{Component} from 'react';
import FacebookLogin from 'react-facebook-login';
import {Redirect} from "react-router-dom";


class Facebook extends Component
{

  constructor(props)
  {
    super(props);
    this.state = {
      userID : '',
      IsloggedIn: true,
      name: '',
      email: '',
      picture: '',
    }
  }

  
  responseFacebook = response =>{
    this.setState({
      IsloggedIn: true,
      userID: response.userID,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url,
    })
    localStorage.setItem('FacebookUser',this.state.email);
    localStorage.setItem('FacebookName',this.state.name);
    localStorage.setItem('FacebookID',this.state.userID);
    localStorage.setItem('FacebookPicture',this.state.picture);
  }


  render()
  {
    var {IsloggedIn} = this.state;
    let fbcontent;
    if(IsloggedIn)
    {
        fbcontent = (
            <FacebookLogin
            appId="518873332229482"
            fields="name,email,picture"
            callback={this.responseFacebook} />
          )
    }
    if(localStorage.getItem('FacebookUser'))
    {
        return <Redirect to = '/homepage'></Redirect>
    }
    else
    {
    return(
        <div>{fbcontent}</div>
        )
    }
  }
}


export default Facebook;
