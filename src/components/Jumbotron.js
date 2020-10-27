import React from "react";
import SearchBar from "./SearchBar";
import Background from "../images/BW3.jpg";

var jumbotronStyle = {
  backgroundImage: `url(${Background})`,
  backgroundSize: "cover",
  backgroundPositionY: "475px",
};

var textStyle = {
  color: "white",
};

class Jumbotron extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar justify-content-end">
          <i className="fas fa-moon" onClick={this.props.themeToggler}></i>
        </nav>
        <section className="jumbotron text-center mb-3" style={jumbotronStyle}>
          <div className="container">
            <h1 className="font-weight-bold" style={textStyle}>
              What do you want to search?
            </h1>
            <SearchBar onSubmit={this.props.onSubmit} />
          </div>
        </section>
      </div>
    );
  }
}

export default Jumbotron;
