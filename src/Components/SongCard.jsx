import React from "react";
import { Card, Button } from "react-bootstrap";

function SongCard(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.artist + " - " + props.song}</Card.Title>
        <Card.Text>Album: {props.album}</Card.Text>
        <Button variant="primary" src={props.src}>
          See Details
        </Button>
      </Card.Body>
    </Card>
  );
}

export default SongCard;
