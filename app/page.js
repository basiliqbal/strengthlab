"use client";
import { useState } from "react";

const Home = () => {

const [max, setMax] = useState("");
const [increment, setIncrement] = useState(5);
const [showProgram, setShowProgram] = useState(false);
const [generatedMax, setGeneratedMax] = useState(null);
const [generatedIncrement, setGeneratedIncrement] = useState(null);
const [error, setError] = useState("");

const workouts = [
  { day: 1, sets: 6, reps: 6, percentage: 0.70 },
  { day: 2, sets: 7, reps: 5, percentage: 0.75 },
  { day: 3, sets: 8, reps: 4, percentage: 0.80 },
  { day: 4, sets: 10, reps: 3, percentage: 0.85 }
];

const weeks = [1,2,3]

const handleGenerate = () => {
  if (Number(max) >= 45 && Number(max) <= 1500 && Number.isInteger(Number(max))) {
    setShowProgram(true);
    setGeneratedMax(Number(max));
    setGeneratedIncrement(increment);
    setError("")
  } else {
  setError("Please enter a bench press max between 45 and 1500 lbs.");
}
};

  return (
<main >


<h1> StrenghtLab</h1>

<h2>Smolv Jr. Bench Press Calculator</h2>


<p>
Enter your bench press one-rep max to generate
your personalized training program.
</p>

<input
type ="number"
placeholder = "Enter your Bench press Max"
value={max}
onChange={(e) => setMax(e.target.value)}
/>


<select
value={increment}
onChange={(e) => setIncrement(Number(e.target.value))}
>
  <option value="5">+5 lbs</option>
  <option value="10">+10 lbs</option>
</select>


<button onClick={handleGenerate}> Generate program </button>

{error && (
  <p>
    {error}
  </p>
)}

{Number(generatedMax) > 0 && showProgram && (
<>
<p> Your current max is: {generatedMax}</p>

  
{weeks.map((week) => (
  <div key={week}>
      <h3>
      Week {week}
      </h3>

{workouts.map((workout) => (
      <p key={workout.day}>
      
      Day{workout.day}: {workout.sets} sets x {workout.reps} reps at {Math.round((generatedMax * workout.percentage) / 5) * 5 + (week - 1) * generatedIncrement} lbs
        
      </p>
      
    ))}

  </div>
    ))}

</>


)}
</main>


  );
}

export default Home;