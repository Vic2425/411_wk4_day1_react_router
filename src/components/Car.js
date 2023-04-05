import React from "react";
import cars from "../cars.json";
// Import {useParams} from "react-router-dom" here //
import { useParams } from "react-router-dom";
// import MUI components here //
// Container, Paper, Chip //
import { Container, Paper, Chip } from "@mui/material";

const Car = (props) => {
  const carId = useParams();
  console.log("id", carId);
  let car = cars.find((car) => car.id == carId.id);
  console.log("car", car);

  return (
    <Container maxWidth="sm" className="car-container">
      <Paper className="car-paper">
        <h2>{car.Name.toUpperCase()}</h2>
        {Object.keys(car).map((key, idx) => {
          return (
            <Chip
              label={`${key}: ${car[key]}`}
              sx={{ textTransform: "capitalize" }}
            />
          );
        })}
      </Paper>
    </Container>
  );
};

export default Car;
