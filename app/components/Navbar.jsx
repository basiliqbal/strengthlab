
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="border-b border-white/10 bg-[#101113] px-6 py-5">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <Link
          href="/"
          className="text-xl font-black uppercase tracking-tight text-white"
        >
          STRENGTH<span className="text-[#D62828]">LAB</span>
        </Link>

        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
          >
            Calculator
          </Link>

          <Link
            href="/training-guide"
            className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
          >
            Training Guide
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
