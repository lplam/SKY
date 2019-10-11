import React, {Component} from "react";
import {Link} from "react-router-dom";
import {Redirect} from "react-router-dom";
import API from '../../pages/Database/APICnn';
import Avatar from 'react-avatar';
import '../../App.css'
const api = new API();

class Menu extends Component{

    constructor(props) {
        super(props);
        this.state = {
          maccount :JSON.parse(localStorage.getItem('laccount')) || '',
          mpassword: JSON.parse(localStorage.getItem('lpassword')) || '',
          user: localStorage.getItem('user'),
          facebookuser: localStorage.getItem('FacebookUser'),
          googleuser: localStorage.getItem("GoogleUser"),
          redirect: false,
          data: [],
          check: "",
          active: "",
          avatar: ""
        };
      }

      componentWillMount() {
        api.getData().then(response => {
          console.log('Data fetched', response)
          this.setState({
            data: response
          })
        })
        
      if(this.state.user != null || this.state.googleuser != null || this.state.facebookuser != null){
        this.setState({
            check: "1"
          })
      }
      }

      componentDidMount(){
       
        if(this.state.check === "1"){
            this.setState({
                active: "active",
                avatar : "https://consequenceofsound.net/wp-content/uploads/2019/07/joker-2019.jpg?quality=80&w=807"

              })
        }else{
            this.setState({
                active: "undefined"
              })
        }

      }

    onClick_LogOutOrSignUp = ()=>{
        if(this.state.user || this.state.facebookuser || this.state.googleuser)
        {
        localStorage.clear();
        this.setState({
            redirect: true
        })
        this.props.history.push("/newlogin")
        // window.location.reload();
    }
    }


    RenderRedirect = ()=>{
        if(this.state.redirect)
          {
              return <Redirect to = ''></Redirect>
            }
      }

    render(){
        var name = 'Login';
        var log_out = 'Sign Up';
        var link = 'resgister';
        var iconlogin_profile = "fa fa-sign-in";
        var iconsingup_logout = "fa fa-user-plus";
        var substring = '';
        var avatar = this.state.avatar;
        let active = this.state.active


        if(this.state.facebookuser)
        {
            log_out = 'Log out';
            iconsingup_logout = "fa fa-sign-out";
            link = '';
            name = localStorage.getItem('FacebookName');
            iconlogin_profile = "fa fa-facebook-official";
            avatar = localStorage.getItem('FacebookPicture');
        }

        if(this.state.googleuser)
        {
            log_out = 'Log out';
            iconsingup_logout = "fa fa-sign-out";
            link = '';
            name = localStorage.getItem('GoogleName');
            iconlogin_profile = "fa fa-google";
            avatar = localStorage.getItem('GooglePicture');
            
        }
       
        if(this.state.user)
        {
            substring = this.state.user.slice(1,-1);
            log_out = 'Log out';
            iconsingup_logout = "fa fa-sign-out";
            link = '';
            Object.entries(this.state.data).map(([key,value],i)=>{
                if(value.account === substring)
                {
                    name = value.name;
                    iconlogin_profile = "fa fa-user";
                }
            });
        }
        

        return(
                
                <div id="padding-sticky" className="header">
                    {/* <div className="row">
  <span>
    <input className="clean-slide" id="age" type="text" placeholder="Go for the high score!" /><label for="age">Age</label>
  </span>
 
</div> */}
                    <div id="sticky-header" >
                        <Link to = "/">
                        <div id="branding" >
                            {/* <img alt = "Image" src="https://www.hackerrank.com/wp-content/uploads/2018/08/hackerrank_logo.png" className="img-responsive" /> */}
                            <h3 style={{marginTop:"15px"}}><strong>SOU</strong>nd API</h3>
                        </div>
                        </Link>
                        <nav id = "togle">
                        <ul id = "res">
                            <li className="hov alway"><Link to = "./products">Products</Link>
                            <ul>
                                <li><a href="gl">Api Voice Into Words</a></li>
                                <li><a href="gl">Api Word Into Voice</a></li>
                                <li><Link to="/products">Api English Into VietNamese</Link></li>
                            </ul>
                            </li>
                            <li className="hov alway"><Link to = "/profile">Customers</Link></li>
                            <li className="hov alway"><Link to = "/products">Resources</Link></li>
                            <li className="alway"><Link to = "/contacts">Contact</Link></li>
                            <li className="alway"><Link to = "/about">About Us</Link> </li>
                            
                        </ul>
                        </nav>
                  
                        <div className = {`rows ${active}rows`}>
  <span>
    <input className="clean-slide" id="age" type="text" placeholder="Search form" /><label>Search</label>
  </span>
<span><i className="fab fa-accessible-icon"></i></span>

                        </div>
                        
                        <div className = "toggle"><i className="fa fa-bars menu"></i></div>
                        {this.RenderRedirect()}
                       
                       
                       
                        {/* <div className = "dropdown">
                            <Avatar src= {avatar} size="50"  round = {true} className = "avatar-header"/>
                                <div className="dropdown-content">
                                    <Link to ={`/${name}`} className = "Link"><span><i className={iconlogin_profile} aria-hidden="true"></i>{"  "}{name}</span></Link>
                                    <Link to = {`/${link}`} className = "Link"><span onClick = {this.onClick_LogOutOrSignUp}><i className={iconsingup_logout} aria-hidden="true"></i>{"  "}{log_out}</span></Link>
                                </div>
                        </div> */}
                        <div id="log-sig">

                       
                        <div className = {`dropdown ${active}none`}>
                            <Avatar src= {avatar} size="50"  round = {true} className = "avatar-header"/>
                                <div className="dropdown-content">
                                    <div style = {{color: "#000000b5",borderBottom: "black solid 1px"}} id = "labelLoginName">Signed in as<br></br><span><strong style = {{fontSize : "15px" }}>{`${name}`}</strong></span></div>
                                    <Link style = {{fontSize : "15px",color: "#000000b5"}} to ="/profile" className = "Link"><span><i className={iconlogin_profile} ></i>{"  "}{"Your profile"}</span></Link>
                                    <Link style = {{fontSize : "15px",color: "#000000b5"}}  to ="/profile" className = "Link"><span><i className={iconlogin_profile} ></i>{"  "}{"Your products"}</span></Link>

                                    <Link style = {{fontSize : "15px",color: "#000000b5"}}   to = {`/${link}`} className = "Link"><span onClick = {this.onClick_LogOutOrSignUp}><i className={iconsingup_logout} aria-hidden="true"></i>{"  "}{log_out}</span></Link>
                                </div>
                             </div>
                            
                            <Link className = {`${active}`} to = "/newlogin"><span id="login">{name}</span></Link>
                            <Link className = {`${active}`} to = "/newsignup"><span id="sign-up" onClick = {this.onClick_LogOutOrSignUp}>{log_out}</span></Link>

                
                            
                           
                            <span id = "btn-menu-hidden" ><i className="fa fa-bars fa-menu-hidden" aria-hidden="true"></i></span>
                            <div className= "sticky-header-show-nobackground"></div>   
                    </div>
                    </div>
                    <div className = "sticky-header-block" >
                        <div>
                            <nav id = "togle-block" >
                                <div id = "btn-cancle-icon"><i className="fa fa-times fa-cancle-icon" aria-hidden="true"></i></div>
                        <ul className = "spaceClickReturnWhiteColor">
                            <li><a href="/products">Products</a>
                            <ul>
                                <li><a href="gl">Api Voice Into Words</a></li>
                                <li><a href="gl">Api Word Into Voice</a></li>
                                <li><Link to="/products">Api English Into VietNamese</Link></li>
                            </ul>
                            </li>
                            <li ><Link to = "/profile">Customers</Link></li>
                            <li ><Link to = "/products">Resources</Link></li>
                            <li ><Link to = "/contacts">Contact</Link></li>
                            <li ><Link to = "/about">About Us</Link> </li>
                        </ul>
                        </nav>
                        </div>
                    </div>
                </div>
        )
    }
}


export default Menu;