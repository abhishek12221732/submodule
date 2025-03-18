import { useRouter } from "next/router";

export default function LeadDetail() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h2>Lead Details for {id}</h2>
      {/* Fetch and display lead details here */}
    </div>
  );
}
