
const WorkoutCard = ({ workout, weight }) => {
  return (
    <article>
      <h4>Day {workout.day}</h4>

      <p>
        {workout.sets} sets × {workout.reps} reps
      </p>

      <p>
        Target Weight: {weight} lbs
      </p>

      <p>
        Intensity: {workout.percentage * 100}%
      </p>
    </article>
  );
};

export default WorkoutCard;
