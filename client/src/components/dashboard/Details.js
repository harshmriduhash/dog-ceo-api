import React, { Component } from "react";
import { Link } from "react-router-dom";

class Details extends Component {
    constructor(props) {
        super(props)
        this.state = {
            url: null,
            breedName: this.props.match.params.breedName
        }
    }
    componentDidMount() {
        this.state.breedName = this.props.match.params.breedName;
        this.getDogImage()
    }
    getDogImage() {
        // console.log(this.state.breedName);  

        fetch("https://dog.ceo/api/breed/" + this.state.breedName + "/images/random")
            .then(response => response.json())
            .then(data => this.setState({ url: data.message }));
        console.log(this.state.url)
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="nav-wrapper white" style={{ margin: 15 }}>
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
                <div className="container center-align">
                    <br />
                    <div class="row">
                        <div class="col float-left">
                            <Link to="/dashboard" className="btn-flat waves-effect">
                                <i className="material-icons left">keyboard_backspace</i> Back to
                                home
                    </Link>
                        </div>
                    </div>
                    <div class="col">
                        <h6 style={{ fontFamily: "monospace", marginTop: 75 }}>Here's a picture of a cutie on each refresh!</h6>
                        <img src={this.state.url} alt=""
                            style={{
                                width: 300,
                                height: 300
                            }}
                            className="img-responsive fix-image" />
                        <div class="card-body">
                            <h6 class="card-title" style={{ fontFamily: "monospace", fontWeight: "bold", fontSize: 24}}>{this.state.breedName}</h6>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}


export default Details;


