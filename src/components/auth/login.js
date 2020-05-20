import React from "react";
import axios from "axios";
import { Redirect } from 'react-router-dom'

class Login extends React.Component {
  state = {
    email: "test1@test69.com",
    password: "test1"
  };

  getData = () => {
    const url = "/auth/sellerLogin";
    // var self = this;
    console.log("in getData")
    axios
      .post(url, this.state)
      .then((response) => {
        console.log(response);
        // self.completeLogin(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  completeLogin = response => {
    if (response.status == 200) {
      console.log("in complete");
      this.setState(
        {
          loginTrySuccess: true
        },
        () => {
          console.log(response.data.token)
          localStorage.setItem('auth-token',response.data.token)

        }
      );
    }
  };

  // handleLogin = e => {
  //   console.log("in handleLogin")
  //   this.getData(this.state.email, this.state.password);
  // };

  // handleChange = e => {
  //   this.setState(
  //     {
  //       [e.target.id]: e.target.value
  //     },
  //   );
  // };


  render() {
     if(this.state.loginTrySuccess){
      return <Redirect to='/' />
    }

    return (
      <div>
        <form className="form-group" onSubmit={this.getData}>
              {/* <label htmlFor="exampleInputEmail1">Email</label>
              <input
                className="form-control"
                onChange={this.handleChange}
                type="email"
                aria-describedby="emailHelp"
                placeholder="Email"
              />
              <br></br>
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                className="form-control"
                onChange={this.handleChange}
                type="password"
                placeholder="Password"
              /> */}
              <button>Login</button>
            </form>  
       
      </div>
    );
  }
}

export default Login;