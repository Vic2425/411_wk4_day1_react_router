import React from "react";
import cars from "../cars.json";
// Import {useParams} from "react-router-dom" here //
import { useParams } from "react-router-dom";
// import MUI components here //
// Container, Paper, Chip //
import { Container, Paper, Chip } from "@mui/material";

const Car = (props) => {
  const carId = useParams().carId;
  let car = cars.find((car) => car.id === Number(carId));

  return (
    <Container maxWidth="sm" className="car-container">
      <Paper className="car-paper">
        <h2>{car.Name}</h2>
        {Object.keys(car).map((key, index) => {
          return <Chip key={index} label={`${key}: ${car[key]}`}></Chip>;
        })}
        {/* {<Chip label={`${car.id}`} />
          <Chip label={Name: `${car.Name}`} />
          <Chip label={Miles_per_Gallon: {car["Miles_per_Gallon"]}} />
          <Chip label={Cylinders: {car["Cylinders"]}} />
          <Chip label={Displacement: {car["Displacement"]}} />
          <Chip label={Horsepower: {car["Horsepower"]}} />
          <Chip label={Weight_in_lbs: {car["Weight_in_lbs"]}} />
          <Chip label={Acceleration: {car["Acceleration"]}} />
          <Chip label={Year: {car["Year"]}} />
          <Chip label={Origin: {car["Origin"]}} /> */}
      </Paper>
    </Container>
  );
};

export default Car;
