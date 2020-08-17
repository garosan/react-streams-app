import React, { Component } from "react";
require("dotenv").config();

class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      console.log();
      window.gapi.client.init({
        clientId: process.env.GOOGLE_API_CLIENTID,
        scope: "email",
      });
    });
  }
  render() {
    return <div>GoogleAuth</div>;
  }
}

export default GoogleAuth;
