import React from "react";
import cars from "../cars.json";
// import material ui components here //
// Container, Paper, Chip //
import { Container, Paper, Chip } from "@material-ui/core";

const Car = (props) => {
  const id = props.match.params.id;
  const vehicle = cars[id - 1];
  return (
    <Container maxWidth="sm">
      <Paper>
        <h1>{vehicle.Name}</h1>

        {Object.keys(vehicle).map((key) => {
          return <Chip size="small" label={`${key}: ${vehicle[key]}`}></Chip>;
        })}
      </Paper>
    </Container>
  );
};

export default Car;
