

'use client';
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
  <div className="min-h-screen bg-linear-to-br from-yellow-400 via-blue-500 to-gray-900 font-sans flex items-center justify-center">
      <main className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-8 flex flex-col items-center">
        <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="flex flex-col items-center">
          <Image src="/logo.png" alt="T Automobile Logo" width={80} height={80} className="mb-4" />
          <h1 className="text-4xl font-bold text-blue-700 mb-2 text-center font-montserrat">T Automobile</h1>
          <p className="text-lg text-gray-700 mb-4 text-center font-poppins">Your On-the-Go Mechanic Repair Service</p>
          <motion.a whileHover={{ scale: 1.05 }} href="/contact" className="bg-yellow-400 text-gray-900 font-bold px-6 py-3 rounded-full shadow hover:bg-yellow-500 transition mb-6">Book Now</motion.a>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} className="w-full mt-4">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4 text-center">Why Choose Us?</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <li className="bg-gray-100 p-4 rounded shadow text-center font-oswald">Convenient Mobile Service</li>
            <li className="bg-gray-100 p-4 rounded shadow text-center font-oswald">Reliable & Expert Mechanics</li>
            <li className="bg-gray-100 p-4 rounded shadow text-center font-oswald">Fast Response & Quality Repairs</li>
            <li className="bg-gray-100 p-4 rounded shadow text-center font-oswald">Transparent Pricing</li>
          </ul>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.6 }} className="w-full mt-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Our Services</h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Engine repair and maintenance</li>
            <li>Tire changes and balancing</li>
            <li>Brake repairs and replacements</li>
            <li>Battery replacements</li>
            <li>Oil changes</li>
            <li>Diagnostics and inspections</li>
          </ul>
        </motion.div>
      </main>
    </div>
  );
}
