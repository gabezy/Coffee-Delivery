import React from "react";
import { Container } from "../../styles/global";
import { Coffees } from "./Coffees";
import { Intro } from "./Intro";

export const Home = () => {
  return (
    <Container>
      <Intro />
      <Coffees />
    </Container>
  );
};
