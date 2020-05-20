import React, { Component } from "react";

class Signup extends Component {
  state = {
    email: "test@test.com",
    password: "12345",
    firstName: "qwerty",
    lastName: "uiop",
    phone: "1111111111",
    address: {
        line1: "1",
        city: "qwerty",
        state: "qwerty",
        pincode: "123456",
    },
    location: {
        lat: 0,
        long: 0,
    },
    validData: true
  };

  sendData = async (url, data) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      const responseJson = await response.json();
      return responseJson.success;
    } catch (error) {
      console.error(error);
    }
  };

  handleSubmit = e => {
    e.preventDefault();
   
    if (this.state.validData) {
      this.sendData("/auth/registerSeller", this.state);
    }
  };

  handleChange = e => {
    this.setState(
      {
        [e.target.id]: e.target.value
      },
      () => {
      }
    );
  };

  render() {
    return (
      <section>
        <div>
          <div className="signup-content">
            <div className="signup-form">
              <h1>Signup</h1>
              <form
                method="POST"
                className="register-form"
                id="register-form"
                onSubmit={this.handleSubmit}
              >
                <div className="form-group">
                  <label for="email">
                    <i className="zmdi zmdi-email" />
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label for="pass">
                    <i className="zmdi zmdi-lock" />
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label for="re-pass">
                    <i className="zmdi zmdi-lock-outline" />
                  </label>
                  <input
                    type="password"
                    name="confPassword"
                    id="confPassword"
                    placeholder="Repeat your password"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group" />
                <div className="form-group">
                </div>
                <div className="form-group form-button">
                  <input
                    type="submit"
                    name="signup"
                    id="signup"
                    className="form-submit"
                    value="Register"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Signup;