import { useEffect, useState } from "react";
import LeadCard from "./LeadCard";

export default function Dashboard() {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    const fetchLeads = async () => {
      const response = await fetch("/api/leads");
      const data = await response.json();
      setLeads(data);
    };
    fetchLeads();
  }, []);

  return (
    <div>
      <h2>Leads Dashboard</h2>
      {leads.map((lead) => (
        <LeadCard key={lead.id} lead={lead} />
      ))}
    </div>
  );
}
