import React, { Component, Fragment } from "react";
import { Card, Icon, Image, Button } from "semantic-ui-react";

const MoreInfo = props => {
  //   console.log(props.medal);
  if (props.toggled === false) {
    return (
      <Button primary size="tiny" content="primary" onClick={props.handleClick}>
        See More Info
      </Button>
    );
  } else {
    return (
      <Fragment>
        <div align="center">
          <b>Additional Info:</b>
        </div>
        <div>Medal: {props.medal}</div>
        <div>Weight: {props.weight}</div>
        {props.greased === true ? (
          <div>Slimey and Muddy</div>
        ) : (
          <div>Clean and Dry</div>
        )}
        <br />
        <Button
          primary
          size="tiny"
          content="primary"
          onClick={props.handleClick}
        >
          Hide Info
        </Button>
      </Fragment>
    );
  }
};

export default MoreInfo;
