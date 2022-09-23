import React from "react";
import { useState } from "react";
import { Box } from "@mui/system";
import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";

const Home = () => {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);
  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        // Passing the props of BodyPart State and Exercises State to be later used in the Horizontal Scrollbar through here
        bodyPart={bodyPart}
        exercises={exercises}
        setExercises={setExercises}
      />
      <Exercises
        // Passing the props of BodyPart State and Exercises State to be later used in the Horizontal Scrollbar through here

        bodyPart={bodyPart}
        exercises={exercises}
        setExercises={setExercises}
      />
    </Box>
  );
};

export default Home;
