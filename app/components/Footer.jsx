
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-white/10 bg-[#101113]">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-6 px-5 py-10 md:flex-row md:items-center">

        <div>
          <h2 className="text-lg font-black uppercase tracking-tight text-white">
            STRENGTH<span className="text-[#D62828]">LAB</span>
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Increase your Max. Track your progress.
          </p>
        </div>

        <div className="flex gap-6 text-sm text-gray-400">
          <Link href="/" className="transition hover:text-white">
            Calculator
          </Link>

          <Link href="/training-guide" className="transition hover:text-white">
            Training Guide
          </Link>
        </div>

        <p className="text-xs text-gray-500">
           © 2026 StrengthLab
        </p>
      </div>
    </footer>
  );
};

export default Footer;
