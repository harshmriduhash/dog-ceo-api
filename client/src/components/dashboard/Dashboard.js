import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class Dashboard extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      keys: [],
      selectedOption: 'affenpinscher'
    }
  }
  async componentDidMount() {
    this.getDogBreeds();
  }

  async getDogBreeds() {
    const response = await fetch("https://dog.ceo/api/breeds/list/all")
    const data = await response.json()
    this.setState({ breeds: data.message })
    console.log(data.message)
    this.setState({ keys: Object.keys(data.message) });

  }
  populateList() {
    let items = [];
    for (let i = 0; i <= this.state.keys.length; i++) {
      items.push(<option key={i} value={this.state.keys[i]}>{this.state.keys[i]}</option>)
    }
    return items;
  }

  handleChange = ({ target }) => {
    this.setState({
      selectedOption: target.value,
    });
  }

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;
    return (
      <div className="container-fluid">
        <div className="nav-wrapper white" style={{ margin: 15 }}>
          <Link
            to="/"
            style={{
              fontFamily: "monospace",
              fontSize: 28
            }}
            className="col s5 brand-logo black-text"
          >
            Woof Woof!
      </Link>
          <div class="float-right">
            <button
              style={{
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: 5
              }}
              onClick={this.onLogoutClick}
              className="btn btn-small waves-effect waves-light hoverable blue accent-3"
            >
              Logout
            </button>
          </div>
        </div>
        <div style={{ height: "75vh" }} className="container valign-wrapper center-align">
          <div className="row">
            <div className="landing-copy col s12">
              <h4>
                <b>Hey there,</b> {user.name.split(" ")[0]}!</h4>
              <h6>Select a dog breed: </h6>
            </div>
            {/* <span>{this.state.selectedOption}</span> */}
            <div className="input-field col s12">
              <div className="display-inline">
                <select className="browser-default center-align"
                  style={{ fontSize: 18 }}
                  value={this.state.selectedOption}
                  onChange={this.handleChange}
                >
                  {this.populateList()}
                </select>
              </div>
              <div class="display-inline">
                <Link
                  to={{
                    pathname: `/details/${this.state.selectedOption}`
                  }}
                  style={{
                    height: 40,
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    margin: "1rem"
                  }}
                  className="btn btn-small waves-effect waves-light hoverable teal accent-3 display-inline"
                >
                  <div style={{color: "#000"}}><span>Fetch </span><i class="material-icons">pets</i></div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  selectedOption: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  selectedOption: state.selectedOption
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);
