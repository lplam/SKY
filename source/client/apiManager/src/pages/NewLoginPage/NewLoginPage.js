import React, {Component} from "react";


import {Link, Redirect} from "react-router-dom";
import API from '../Database/APICnn';
import Facebook from "../LoginPage/Facebook";
import Google from "../LoginPage/Google"

const api = new API();


class NewLoginPage extends Component{

  constructor(props) {
    super(props);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
    this.signIn = this.signIn.bind(this);
    this.state = {
      laccount :JSON.parse(localStorage.getItem('laccount')) || [],
      lpassword: JSON.parse(localStorage.getItem('lstate')) || [],

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




  putdata = () =>{
    // m tìm kiếm ID muốn replace trong this.state.data tìm bằng user nghe, cái user t đang lưu trong localstorage,
    // m get rồi tìm kiếm id là đc.
     // rồi truyền ID vào hàm push data
    // t bỏ hàm này trong SignIn khi m ấn btn sign nó sẽ replace
    // ví dụ ID = 1;
    var id = 1;
    // nhấn sign in xong kiểm tra console log in ra thành công rồi là ok 
    var data = {
      name: "Lê Hữu Lý",
      avatar: "avatar 1",
      birthday: 1569683675,
      numofbank: "0917644229",
      email: "lehuuly1512313@gmail.com",
      phone: "0338314081"
    }

    api.getDataWithAccountParams('account1');
    }

  signIn = () =>{
    this.putdata();
    var check = '0';
    Object.entries(this.state.data).map(([key,value],i) =>{
      if(value.account === this.state.laccount && value.password === this.state.lpassword)
      {
        check = '1';
      }
    })
    if(check === '0')
      alert("đăng nhập thất bại! tài khoản hoặc mật khẩu không chính xác");
    else
      {
        console.log("đăng nhập thành công");
      
      this.setState({
        laccount: this.state.laccount,
        redirect : true,
        lpassword: this.state.lpassword,
        lstate: this.state.lstate,
      },() => {
        localStorage.setItem('user', JSON.stringify(this.state.laccount
        ))
      });
      localStorage.setItem('state',JSON.stringify(this.state.lstate));
      window.location.reload()
      }
}

    render(){
      var {redirect} = this.state;
      redirect = localStorage.getItem('redirect');
      if(redirect)
      {
        localStorage.clear();
        // window.location.reload();
      }
      if(localStorage.getItem('user'))
      {
        return <Redirect to = '/homepage'></Redirect>
      }
      else{
        return(
          <div style = {{backgroundColor: "white !impotant"}} className = "backgroundWhite">
        <div class="rowss">
     
          <div style = {{cursor : "pointer"}} id="branding" >
            <h3 style={{marginTop:"15px"}}><strong>SOU</strong>nd API</h3>
          </div>

       
        <div className="containers">
        <form id="contact" action method="post">
          <h3>Sign in into SoundAPI</h3>
          <fieldset>
            <input placeholder="Input your email" tabIndex={1} type="email" required onChange = {this.handleUsername}/>
            {/* <p style = {{left: 25, position: "absolute", top: 126}} className="copyright" tabIndex = {4}><Link to = "/newlogin">Are you Forgot password?</Link></p> */}

          </fieldset>

          <fieldset style = {{marginTop: "10px"}}>
            <input placeholder="Input your password" type="password" tabIndex={2} required onChange = {this.handlePassword}/>
          </fieldset>
          <fieldset >
            <button name="submit" type="button" id="contact-submit" onClick = {this.signIn} tabIndex = {3} >Sign In</button>
          </fieldset>

          <Facebook></Facebook>
          <Google></Google>
          
          <p style = {{float : "left"}}className="copyright" tabIndex = {4}>Are you <Link to = "/newlogin">Forgot password?</Link></p>
          <p style = {{marginLeft: "222px"}} className="copyright" tabIndex = {5}><Link to = "/newsignup">Sign up now</Link></p>

        </form>
      </div> 
        </div>
          </div>
          
        )
    }
  }
}


export default NewLoginPage;