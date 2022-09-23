import React from "react";
import { useState } from "react";
import { Box } from "@mui/system";
import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";

const Home = () => {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);

  console.log(bodyPart);
  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        // Passing the props of BodyPart State and Exercises State to be later used in the Horizontal Scrollbar through here
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        // Passing the props of BodyPart State and Exercises State to be later used in the Horizontal Scrollbar through here

        setExercises={setExercises}
        exercises={exercises}
        bodyPart={bodyPart}
      />
    </Box>
  );
};

export default Home;
