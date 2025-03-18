import { useEffect, useState } from "react";
import LeadCard from "./LeadCard";

const LeadList = () => {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    fetch("/api/leads")
      .then((res) => res.json())
      .then((data) => setLeads(data))
      .catch((err) => console.error("Error fetching leads:", err));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl mb-4">Leads</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {leads.map((lead) => <LeadCard key={lead._id} lead={lead} />)}
      </div>
    </div>
  );
};

export default LeadList;
