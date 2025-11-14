"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    // Check password client-side, then set cookie
    if (password === process.env.NEXT_PUBLIC_ADMIN_SECRET) {
      document.cookie = `admin_auth=${password}; path=/`;
      router.push("/admin");
    } else {
      setError("Invalid password");
    }
  };

  return (
    <main className="p-8 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Admin Login</h1>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="Admin Password"
          className="w-full p-2 border rounded"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Login</button>
        {error && <p className="text-red-600 mt-2">{error}</p>}
      </form>
    </main>
  );
}
