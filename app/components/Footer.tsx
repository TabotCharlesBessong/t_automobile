import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-200 py-8 mt-12">
      <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2 mb-2 sm:mb-0">
          <Image src="/logo.png" alt="T Automobile Logo" width={32} height={32} className="rounded-full" />
          <span className="font-bold text-lg">T Automobile</span>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 items-center text-sm">
          <span>Business Hours: Mon-Sat 8am-6pm</span>
          <span>Emergency Service Available</span>
          <span>Address: 123 Main St, Your City</span>
        </div>
        <div className="flex gap-4 items-center">
          <a href="tel:+1234567890" className="hover:text-yellow-400" title="Call Us">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 inline-block mr-1"><path strokeLinecap="round" strokeLinejoin="round" d="M2 6.5A16.5 16.5 0 0117.5 22M2 6.5V2a1 1 0 011-1h3.5a1 1 0 011 1v4.5a1 1 0 01-1 1H3a1 1 0 01-1-1z" /></svg>
            +1 234 567 890
          </a>
          <a href="mailto:info@tautomobile.com" className="hover:text-yellow-400" title="Email Us">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 inline-block mr-1"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 8V8a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" /></svg>
            info@tautomobile.com
          </a>
        </div>
      </div>
      <div className="text-center text-xs text-gray-400 mt-4">&copy; {new Date().getFullYear()} T Automobile. All rights reserved.</div>
    </footer>
  );
}
