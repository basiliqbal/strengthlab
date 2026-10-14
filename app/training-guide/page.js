
const instructions = [
  {
    title: "Before You Start",
    description:
      "Smolov Jr. is an advanced, high-volume strength program involving four bench press sessions per week. It is best suited to experienced lifters who can tolerate frequent pressing.",
    tips: [
      "Avoid starting the program if you have an active shoulder, pec, or elbow injury.",
      "Use proper bench press technique and safety equipment or a spotter.",
      "Do not treat the prescribed weights as mandatory if you experience pain or excessive fatigue.",
      "Consider a less demanding program if you are new to strength training."
    ]
  },
  {
    title: "Warm-Up",
    description:
      "Warm up before every bench press session to prepare your muscles, joints, and movement pattern.",
    tips: [
      "Begin with 5–10 minutes of light general movement.",
      "Perform several progressively heavier bench press warm-up sets.",
      "Keep warm-up sets comfortably below failure.",
      "Reduce warm-up reps as the weight increases to avoid unnecessary fatigue."
    ]
  },
  {
    title: "Accessory Training",
    description:
      "Smolov Jr. already includes substantial pressing volume. Keep accessory work limited so it does not interfere with recovery.",
    tips: [
      "Chest: Avoid additional heavy bench variations, heavy flyes, and excessive pressing.",
      "Triceps: Limit isolation exercises to a few light-to-moderate sets if recovery allows.",
      "Back: Consider moderate rows, pulldowns, and other pulling movements.",
      "Shoulders: Prioritize comfortable rear-delt and upper-back work. Limit heavy overhead pressing.",
      "Avoid taking accessory exercises to muscular failure.",
      "Reduce or remove accessories if performance or recovery declines."
    ]
  },
  {
    title: "Rest Between Sets",
    description:
      "Allow enough recovery between working sets to maintain technique and complete the prescribed repetitions.",
    tips: [
      "Rest approximately 3–5 minutes between demanding working sets.",
      "Take longer when necessary, especially during heavier sessions.",
      "Avoid rushing sets simply to finish the workout faster."
    ]
  },
  {
    title: "Recovery",
    description:
      "Recovery is especially important because Smolov Jr. requires frequent, high-volume bench pressing.",
    tips: [
      "Aim for approximately 7–9 hours of sleep per night.",
      "Eat enough calories and protein to support recovery.",
      "Stay hydrated throughout the day.",
      "Monitor shoulder, elbow, and pec discomfort.",
      "Reduce additional upper-body training when fatigue becomes excessive."
    ]
  },
  {
    title: "Missed Reps",
    description:
      "Missing repetitions can indicate accumulated fatigue, insufficient recovery, or training weights that are too demanding.",
    tips: [
      "Do not automatically increase the weight after a failed workout.",
      "Review sleep, nutrition, technique, and training fatigue.",
      "Consider reducing the load, repeating a session, or stopping the cycle when appropriate.",
      "Stop training if you experience sharp pain or signs of injury."
    ]
  },
  {
    title: "After Completing the Program",
    description:
      "After the three-week cycle, allow fatigue to decrease before evaluating your strength improvement.",
    tips: [
      "Include several days of reduced training stress before testing your bench press max.",
      "Test your new one-rep max under safe conditions.",
      "Record your new max in StrengthLab.",
      "Compare your results against your previous training cycles.",
      "Avoid immediately repeating another high-volume cycle without adequate recovery."
    ]
  }
];


const TrainingGuide = () => {
  return (
    <main className="mx-auto max-w-6xl px-5 py-14 md:py-20">

      {/* Page Header */}
      <div className="mb-12">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#D62828]">
          Training Resources 
        </p>

        <h1 className="mb-4 text-4xl font-black uppercase tracking-tight text-white md:text-6xl">
          Train <span className="text-[#D62828]">Smarter.</span>
        </h1>

        <p className="max-w-2xl text-base leading-relaxed text-gray-400">
          Learn how to manage training intensity, accessory exercises,
          and recovery throughout your Smolov Jr. bench press program.
        </p>
      </div>

      {/* Training Instructions */}
      <div className="grid gap-5 md:grid-cols-2">
        {instructions.map((instruction, index) => (
          <section
            key={instruction.title}
            className="border border-white/10 bg-[#1C1E21] p-6 transition-colors hover:border-[#D62828]/50 md:p-8"
          >
            <div className="mb-5 flex items-center gap-4">
              <span className="text-sm font-black text-[#D62828]">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h2 className="text-xl font-bold uppercase tracking-tight text-white">
                {instruction.title}
              </h2>
            </div>

            <p className="mb-6 text-sm leading-7 text-gray-400">
              {instruction.description}
            </p>

            <ul className="space-y-4">
              {instruction.tips.map((tip) => (
                <li
                  key={tip}
                  className="flex items-start gap-3 text-sm leading-6 text-gray-300"
                >
                  <span
                    className="mt-1 font-bold text-[#D62828]"
                    aria-hidden="true"
                  >
                    /
                  </span>

                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      {/* Disclaimer */}
      <div className="mt-10 border-l-4 border-[#D62828] bg-[#1C1E21] p-6">
        <h3 className="mb-2 text-sm font-bold uppercase tracking-wider text-white">
          Important Training Notice
        </h3>

        <p className="text-sm leading-7 text-gray-400">
          Smolov Jr. is a demanding training program and may not be
          appropriate for beginners or lifters with active injuries.
          This guide provides general educational information,
          not individualized medical or coaching advice.
        </p>
      </div>
    </main>
  );
};

export default TrainingGuide;
