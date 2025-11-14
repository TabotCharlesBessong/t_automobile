export default function AboutPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">About T Automobile</h1>
      <p>
        T Automobile was founded with a mission to provide convenient, reliable, and expert mobile mechanic services. Our team of certified mechanics brings years of experience and a passion for helping customers get back on the road quickly and safely.
      </p>
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Meet the Team</h2>
        <ul className="list-disc pl-6">
          <li>Charles Bessong - Lead Mechanic</li>
          <li>Jane Doe - Senior Technician</li>
          <li>John Smith - Customer Service</li>
        </ul>
      </div>
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Certifications & Awards</h2>
        <ul className="list-disc pl-6">
          <li>ASE Certified</li>
          <li>Licensed & Insured</li>
          <li>Best Mobile Mechanic Service 2024</li>
        </ul>
      </div>
    </main>
  );
}