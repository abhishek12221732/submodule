export default function LeadCard({ lead }) {
    return (
      <div>
        <h3>{lead.name}</h3>
        <p>{lead.email}</p>
        <p>{lead.phone}</p>
      </div>
    );
  }
  