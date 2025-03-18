import { useState } from "react";
import { useRouter } from "next/router";
import '../src/app/globals.css';

export default function LeadForm() {
  const [lead, setLead] = useState({ name: "", email: "", phone: "" });
  const router = useRouter();

  const handleChange = (e) => {
    setLead({ ...lead, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lead),
    });
    router.push("/dashboard");
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold text-center text-gray-700">Capture a Lead</h2>
      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
      <input
  type="text"
  name="name"
  placeholder="Full Name"
  value={lead.name}
  onChange={handleChange}
  required
  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 placeholder-gray-700"
/>
<input
  type="email"
  name="email"
  placeholder="Email Address"
  value={lead.email}
  onChange={handleChange}
  required
  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 placeholder-gray-700"
/>
<input
  type="tel"
  name="phone"
  placeholder="Phone Number"
  value={lead.phone}
  onChange={handleChange}
  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 placeholder-gray-700"
/>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
        >
          Submit Lead
        </button>
      </form>
    </div>
  );
}
