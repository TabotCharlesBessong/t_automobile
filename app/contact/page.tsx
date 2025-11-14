
'use client';
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setSuccess("Message sent successfully!");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        setError(data.message || "Failed to send message.");
      }
    } catch {
      setError("Failed to send message.");
    }
    setLoading(false);
  };

  return (
    <main className="p-8 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="w-full p-2 border rounded"
          required
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-2 border rounded"
          required
          value={form.email}
          onChange={handleChange}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          className="w-full p-2 border rounded"
          required
          value={form.phone}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Message"
          className="w-full p-2 border rounded"
          rows={4}
          required
          value={form.message}
          onChange={handleChange}
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded" disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </button>
        {success && <p className="text-green-600 mt-2">{success}</p>}
        {error && <p className="text-red-600 mt-2">{error}</p>}
      </form>
      <div className="mt-6">
        <p>Phone: <a href="tel:+1234567890" className="text-blue-600">+1 234 567 890</a></p>
        <p>Email: <a href="mailto:info@tautomobile.com" className="text-blue-600">info@tautomobile.com</a></p>
        <p>Service Area: [Your City/Region]</p>
        <p>Business Hours: Mon-Sat 8am-6pm | Emergency Service Available</p>
      </div>
    </main>
  );
}