import Link from "next/link";

import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full bg-blue-700 text-white py-4 shadow sticky top-0 z-50">
      <nav className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center px-4">
        <div className="flex items-center gap-3 mb-2 sm:mb-0">
          <Link href="/">
            <Image src="/logo.png" alt="T Automobile Logo" width={40} height={40} className="rounded-full" />
          </Link>
          <div>
            <Link href="/" className="text-2xl font-bold font-montserrat tracking-tight">T Automobile</Link>
            <div className="text-xs text-yellow-300 font-semibold">Your On-the-Go Mechanic</div>
          </div>
        </div>
        <ul className="flex gap-4 text-base font-poppins items-center">
          <li><Link href="/services" className="hover:text-yellow-300">Services</Link></li>
          <li><Link href="/about" className="hover:text-yellow-300">About</Link></li>
          <li><Link href="/testimonials" className="hover:text-yellow-300">Testimonials</Link></li>
          <li><Link href="/faq" className="hover:text-yellow-300">FAQ</Link></li>
          <li><Link href="/blog" className="hover:text-yellow-300">Blog</Link></li>
          <li><Link href="/contact" className="hover:text-yellow-300">Contact</Link></li>
          <li>
            <Link href="/contact" className="bg-yellow-400 text-blue-900 px-3 py-1 rounded-full font-bold shadow hover:bg-yellow-300 transition">Book Now</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
