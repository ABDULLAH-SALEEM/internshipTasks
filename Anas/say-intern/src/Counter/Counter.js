import { useState } from "react";
import React from "react";
import { Button, Heading } from "@chakra-ui/react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <Heading mb="50px">Basic Counter</Heading>
      <Heading>{counter}</Heading>
      <br />
      <Button
        colorScheme="blue"
        m="5px"
        onClick={() => setCounter(counter + 1)}
      >
        Add
      </Button>
      <Button
        colorScheme="blue"
        m="5px"
        onClick={() => setCounter(counter - 1)}
      >
        Less
      </Button>
    </div>
  );
};
