import React, {Component} from "react";
import {Link, Redirect} from "react-router-dom";
import API from '../Database/APICnn';
const api = new API();


class NewSignUpPage extends Component{

    constructor(props) {
        super(props);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleUsername = this.handleUsername.bind(this);
        this.handleUConfirmPassword = this.handleUConfirmPassword.bind(this);
        this.handleFullname = this.handleFullname.bind(this);
        this.handlePhone = this.handlePhone.bind(this)
        this.SignUp = this.SignUp.bind(this);
        this.state = {
          laccount :JSON.parse(localStorage.getItem('laccount')) || null,
          lpassword: JSON.parse(localStorage.getItem('lstate')) || null,
          lrepassword: JSON.parse(localStorage.getItem('lstate')) || null,
          lname: "",
          lphone: "",
          redirect:  JSON.parse(localStorage.getItem('redirect')) || false,
          cheackusername: null,
          dataget:[]
        };
      }
      handlePhone(e){
        this.setState({lphone: e.target.value});

      }
      handleUsername(e)
      {
        this.setState({laccount: e.target.value});
      }
      handleFullname(e)
      {
        this.setState({lname: e.target.value});

      }
      handlePassword(e)
      {
        this.setState({lpassword: e.target.value});
      }
    
      handleUConfirmPassword(e)
      {
        this.setState({lrepassword: e.target.value});
      }
    
      componentWillMount()
      {
        api.getData().then(response => {
          console.log('Data fetched', response)
          this.setState({
            dataget: response
          })
        })
      }
      
      SignUp = ()=>
      {
        console.log("hello" + lphone)
        var check = false;
        var {laccount,lpassword,lrepassword,lname,lphone} = this.state;
        console.log(lname);
        Object.entries(this.state.dataget).map(([key,value],index)=>{
          if(value.account === this.state.laccount)
          {
            check = true;
            return;
          }
        })
        if(check === true){
          alert("tài khoản đã tồn tại");
        }
        else if(!laccount || !lpassword || !lrepassword) 
        {
          alert("Bạn chưa điền đầy đủ thông tin");
        }
        else if(lpassword!==lrepassword)
        {
          alert("Bạn nhập lại mật khẩu sai! vui lòng kiểm tra lại");
        }
        else
        {
          console.log("hello" + lphone)
          var datapost = [
            {
              account: laccount,
              password: lpassword,
              name: lname, //"Lê Hữu Lý",//lay name để thay đổi cái này nè chứ để vâyj st
              // m lấy thông qua cái input ấyy 
              // thêm cái Handle input rôiồlây
              phone: lphone,
              avatar: "avatar n"
            }
          ]
          Object.entries(datapost).map(([key,val],i)=>{
            api.postData(val).then(response =>{
              alert("Đăng ký thành công! bạn sẽ được chuyển hướng sang trang đăng nhập");
              this.setState({
                redirect : true,
              },() => {
                localStorage.setItem('redirect', JSON.stringify(this.state.redirect
                ))
              });
              this.props.history.push("/")
            })
          })
    
        }
      }
    
      // RedirectRender = ()=>{
     
      //   if(this.state.redirect)
      //   {
      //     return <Redirect to = '/'></Redirect>
      //   }
      // }

    render(){
        return(
          <div style = {{backgroundColor: "white !impotant"}} className = "backgroundWhite">
        <div class="rowss-signup">
        <Link to = "/">
          <div id="branding" >
            <h3 style={{marginTop:"15px"}}><strong>SOU</strong>nd API</h3>
          </div>
        </Link>

       
        <div className="containers">
        <form id="contact" >
          <h3>Create your account</h3>

          <fieldset>
            <input placeholder="Input your full name" tabIndex={1} type="text" required onChange = {this.handleFullname}/>
          </fieldset>
          <fieldset>
            <input placeholder="Your Email Address" type="email" tabIndex={2} required onChange = {this.handleUsername} />
          </fieldset>
          <fieldset>
            <input placeholder="Your Phone Number (optional)" type="tel" tabIndex={3} required onChange = {this.handlePhone} />
          </fieldset>
       
          <fieldset>
            <input placeholder="Input your password" type="password" tabIndex={4} required onChange = {this.handlePassword}/>
          </fieldset>
          <fieldset>
          <input placeholder="Confirm your password" type="password"  tabIndex={4} required onChange = {this.handleUConfirmPassword}/>
          </fieldset>
          {/* {this.RedirectRender()} */}
          <fieldset>
            <button name="submit" type="button"  onClick= {this.SignUp} id="contact-submit">Sign Up</button>
          </fieldset>
          <p className="copyright">Login into SoundAPI <Link to = "/">SoundAPI</Link></p>
        </form>
      </div> 
        </div>
          </div>
          
        )
    }
}


export default NewSignUpPage;