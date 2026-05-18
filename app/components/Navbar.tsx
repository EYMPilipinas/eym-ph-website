import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-5 bg-white border-b border-gray-200 sticky top-0 z-50">
      {/* LOGO */}
      <div className="flex items-center gap-3">
        <Image
          src="/IMAGES/eym-logo1.png"
          alt="EYM Philippines"
          width={55}
          height={55}
        />

        <div>
          <h1 className="text-2xl font-bold text-[#123C73]">
            eym
          </h1>

          <p className="text-xs text-gray-500 uppercase tracking-wide">
            Eucharistic Youth Movement Philippines
          </p>
        </div>
      </div>

      {/* NAV LINKS */}
      <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/formation">Formation</Link>
        <Link href="/login">Login</Link>
      </div>

      {/* BUTTONS */}
      <div className="flex items-center gap-4">
        <Link href="/login">
          <button className="px-5 py-2 rounded-xl border border-[#123C73] text-[#123C73] font-semibold hover:bg-[#123C73] hover:text-white transition">
            Login
          </button>
        </Link>

        <Link href="/register">
          <button className="px-5 py-2 rounded-xl bg-[#D4A017] text-white font-semibold shadow hover:opacity-90 transition">
            Join EYM
          </button>
        </Link>
      </div>
    </nav>
  );
}