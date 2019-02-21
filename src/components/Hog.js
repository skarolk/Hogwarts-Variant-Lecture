import React, { Component, Fragment } from "react";
import { Card, Icon, Image, Button } from "semantic-ui-react";
import MoreInfo from "./MoreInfo.js";

class Hog extends Component {
  //   console.log(this.props);
  constructor(props) {
    super(props);

    this.state = {
      toggled: false
    };
  }

  handleClick = () => {
    console.log(this.state);
    if (this.state.toggled === false) {
      this.setState({
        toggled: true
      });
    } else {
      this.setState({
        toggled: false
      });
    }
  };

  render() {
    return (
      <Card>
        <Image src={this.props.image} height="200px" />
        <Card.Content>
          <Card.Header>{this.props.name}</Card.Header>
          <Card.Meta>
            <span className="date">Age: {this.props.age}</span>
          </Card.Meta>
          <Card.Description>
            {this.props.name} likes {this.props.specialty}.
            <br />
            <br />
            <MoreInfo
              key={this.props.name}
              toggled={this.state.toggled}
              handleClick={this.handleClick}
              medal={this.props.medal}
              weight={this.props.weight}
              greased={this.props.greased}
            />
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="user" />
            {this.props.friends} Friends
          </a>
        </Card.Content>
      </Card>
    );
  }
}

export default Hog;
