import { Component } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBars, faCalendar } from "@fortawesome/free-solid-svg-icons";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="nav-two container flex">
        <h1 className="logo">villa</h1>

        <ul
          id="nav-items"
          className={
            this.state.clicked ? "#nav-items nav-active" : "#nav-items"
          }
        >
          <li>
            <a className="active" href="#home">
              Home
            </a>
          </li>
          <li>
            <a href="#properties">Properties</a>
          </li>
          <li>
            <a href="#">Property Details</a>
          </li>
          <li>
            <a href="#footer">contact us</a>
          </li>
          <li className="schedule">
            <FontAwesomeIcon icon={faCalendar} className="calender" />
            <a href="#">schedule a visit</a>
          </li>
          <FontAwesomeIcon
            className="nav-icon x-icon"
            icon={faXmark}
            onClick={this.handleClick}
          />
        </ul>

        <div className="for-responsive">
          <FontAwesomeIcon
            className="nav-icon"
            icon={faBars}
            onClick={this.handleClick}
          />
        </div>
      </nav>
    );
  }
}
export default Navbar;
