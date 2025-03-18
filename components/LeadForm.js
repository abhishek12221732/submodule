import { useState } from "react";
import { useRouter } from "next/router";

export default function LeadForm() {
  const [lead, setLead] = useState({ name: "", email: "", phone: "" });
  const router = useRouter();

  const handleChange = (e) => {
    setLead({ ...lead, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Send lead to API
    await fetch("/api/leads", {
      method: "POST",
      body: JSON.stringify(lead),
    });
    router.push("/dashboard");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={lead.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={lead.email}
        onChange={handleChange}
        required
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone"
        value={lead.phone}
        onChange={handleChange}
      />
      <button type="submit">Submit Lead</button>
    </form>
  );
}
