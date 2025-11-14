
'use client';
import { useEffect, useState } from "react";

type Testimonial = {
  _id: string;
  name: string;
  message: string;
  rating: number;
  date: string;
};

export default function TestimonialsPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/testimonials")
      .then((res) => res.json())
      .then((data) => {
        setTestimonials(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load testimonials.");
        setLoading(false);
      });
  }, []);

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">Customer Testimonials</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-600">{error}</p>
      ) : (
        <div className="space-y-6">
          {testimonials.length === 0 ? (
            <p>No testimonials yet.</p>
          ) : (
            testimonials.map((t) => (
              <blockquote key={t._id} className="border-l-4 pl-4 italic">
                &quot;{t.message}&quot;
                <footer className="mt-2 text-sm text-gray-600">- {t.name} ({t.rating}/5)</footer>
              </blockquote>
            ))
          )}
        </div>
      )}
      <div className="mt-6">
        <p>Certified by: ASE, Google Reviews, Yelp</p>
      </div>
    </main>
  );
}