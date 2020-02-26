import { Link } from 'react-router-dom';
import React, { Component } from "react";

class Landing extends Component {
  render() {
    return (
      <div>
        <div className="nav-wrapper white">
          <Link
            to="/"
            style={{
              fontFamily: "monospace",
              fontSize: 28,
              paddingLeft: 10
            }}
            className="col s5 brand-logo black-text"
          >
            Woof Woof!
      </Link>
        </div>
        <div style={{
          height: "75vh",
          fontFamily: "monospace",
          letterSpacing: "1.5px",
          fontSize: 24
        }}
          className="container valign-wrapper">
          <div className="row">
            <div className="landing-copy col s12 center-align">

              Testing Dog.ceo api; The internet's biggest collection
      of open source dog pictures.
        </div>

            <div className="row center-align">
              <Link
                to="/register"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  marginTop: 20
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Register
              </Link>
              <Link
                to="/login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  marginTop: 20
                }}
                className="btn btn-large btn-flat waves-effect white black-text"
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
