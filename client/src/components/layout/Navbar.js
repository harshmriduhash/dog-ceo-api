import React, { Component } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css";

class Navbar extends Component {
  componentDidMount() {
    M.AutoInit();
    document.addEventListener('DOMContentLoaded', function () {
      var elems = document.querySelectorAll('.sidenav');
      var instances = M.Sidenav.init(elems, {});
    });
  }
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
      </div>
    );
  }
}
export default Navbar;
