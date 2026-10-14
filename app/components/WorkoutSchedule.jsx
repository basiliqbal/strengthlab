
import { workouts, weeks } from "../data/smolovProgram";

const WorkoutSchedule = ({ generatedMax, generatedIncrement }) => {
  const calculateWeight = (workout, week) => {
    const baseWeight =
      Math.round((generatedMax * workout.percentage) / 5) * 5;

    return baseWeight + (week - 1) * generatedIncrement;
  };

  return (
    <section className="mt-12">
      <div className="mb-8">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-[#D62828]">
          Your Training Block
        </p>

        <h2 className="text-3xl font-black uppercase tracking-tight text-white md:text-4xl">
          3-Week Program
        </h2>

        <p className="mt-3 text-sm text-gray-400">
          Bench Max: {generatedMax} lbs / Weekly Increase: +{generatedIncrement} lbs
        </p>
      </div>

      <div className="overflow-x-auto border border-white/10 bg-[#1C1E21]">
        <table className="w-full min-w-[520px] border-collapse text-left">
          <thead>
            <tr className="border-b border-white/10 bg-[#25272B]">
              <th className="px-5 py-5 text-xs font-bold uppercase tracking-wider text-gray-400">
                Session
              </th>

              {weeks.map((week) => (
                <th
                  key={week}
                  scope="col"
                  className="px-5 py-5 text-center text-xs font-bold uppercase tracking-wider text-white"
                >
                  Week {week}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {workouts.map((workout) => (
              <tr
                key={workout.day}
                className="border-b border-white/10 transition-colors last:border-b-0 hover:bg-white/5"
              >
                <th scope="row" className="px-5 py-6">
                  <p className="font-bold text-white">
                    Day {workout.day}
                  </p>
                  <p className="mt-1 text-sm text-gray-400">
                    {workout.sets} × {workout.reps}
                  </p>
                </th>

                {weeks.map((week) => (
                  <td
                    key={week}
                    className={`px-5 py-6 text-center font-bold tabular-nums ${
                      week === 3 ? "text-red-400" : "text-white"
                    }`}
                  >
                    {calculateWeight(workout, week)}
                    <span className="ml-1 text-xs font-normal text-gray-500">
                      lbs
                    </span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-xs leading-relaxed text-gray-500">
        All weights are rounded to the nearest 5 lbs. Follow the prescribed
        sets and reps, and adjust training if recovery or technique deteriorates.
      </p>
    </section>
  );
};

export default WorkoutSchedule;
