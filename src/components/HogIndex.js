import React, { Component, Fragment } from "react";
import hogs from "../porkers_data.js";
import Hog from "./Hog.js";
import { Dropdown } from "semantic-ui-react";

class HogIndex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hogs: []
    };
  }

  componentDidMount() {
    let giffedHogs = [];

    hogs.map(hog => {
      let getGif = giphy.random(`${hog.name} pig`).then(function(res) {
        return res.data.fixed_height_downsampled_url;
      });

      Promise.all([getGif])
        .then(gifUrl => {
          // console.log({ ...hog, gifUrl: gifUrl[0] });
          let updatedHog = { ...hog, gifUrl: gifUrl[0] };
          giffedHogs.push(updatedHog);
          return giffedHogs;
        })
        .then(giffedHogs => {
          // console.log(giffedHogs);
          this.setState({ hogs: giffedHogs });
        });
    });
  }

  renderHogs = () => {
    return this.state.hogs.map(hog => {
      return (
        <div className="ui eight wide column">
          <Hog
            key={hog.name}
            image={hog.gifUrl}
            name={hog.name}
            specialty={hog.specialty}
            age={this.getAge()}
            friends={this.getFriends()}
            medal={hog["highest medal achieved"]}
            weight={
              hog[
                "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
              ]
            }
            greased={this.props.greased}
          />
        </div>
      );
    });
  };

  getAge = () => {
    return Math.floor(Math.random() * (+c - +b));
  };

  getFriends = () => {
    return Math.floor(Math.random() * (+a - +b));
  };

  render() {
    console.log(this.state.hogs);
    return (
      <Fragment>
        <Dropdown
          placeholder="Sort by ..."
          multiple
          selection
          options={options}
        />
        <br />
        <br />
        <div className="ui grid container">{this.renderHogs()}</div>
      </Fragment>
    );
  }
}

const options = [
  { key: "name", text: "Name", value: "name" },
  { key: "weight", text: "Weight", value: "weight" }
];

const a = 2000;
const b = 1;
const c = 30;

const giphy = require("giphy-api")();

export default HogIndex;
