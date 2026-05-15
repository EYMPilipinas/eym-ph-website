"use client";

import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../lib/firebase";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    setError("");

    try {
      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      router.push("/dashboard");
    } catch (err: any) {
      setError("Invalid email or password.");
    }
  };

  return (
    <main className="min-h-screen bg-[#F5F7FB] flex items-center justify-center px-6 py-20">
      <div className="w-full max-w-md bg-white rounded-[2rem] shadow-2xl p-10">
        <p className="uppercase tracking-[0.3em] text-sm text-[#D4A017] font-semibold">
          Welcome Back
        </p>

        <h1 className="mt-4 text-5xl font-black text-[#123C73]">
          Login
        </h1>

        <p className="mt-4 text-gray-600">
          Continue your EYM formation journey.
        </p>

        <form onSubmit={handleLogin} className="mt-10 space-y-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address
            </label>

            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-5 py-4 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#123C73]"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-5 py-4 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#123C73]"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 rounded-2xl bg-[#123C73] text-white font-bold text-lg hover:opacity-90 transition"
          >
            Login
          </button>
        </form>

        {error && (
          <div className="mt-6 p-4 rounded-2xl bg-red-100 text-red-700">
            {error}
          </div>
        )}
      </div>
    </main>
  );
}