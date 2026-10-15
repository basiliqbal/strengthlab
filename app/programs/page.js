import SavedPrograms from "../components/SavedPrograms";

export default function ProgramsPage() {
  return (
    <main className="mx-auto min-h-screen max-w-6xl px-6 py-12">
      <div className="mb-10">
        <p className="mb-3 text-sm font-bold uppercase tracking-widest text-[#D62828]">
          YOUR TRAINING
        </p>

        <h1 className="text-4xl font-black uppercase tracking-tight text-white md:text-6xl">
          My <span className="text-[#D62828]">Programs.</span>
        </h1>

        <p className="mt-4 text-gray-400">
          Access your saved Smolov Jr. bench press programs.
        </p>
      </div>

      <SavedPrograms />
    </main>
  );
}