import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <h1 className="text-lg font-bold">Lead Management</h1>
      <div className="space-x-4">
        <Link href="/" className="hover:underline">Dashboard</Link>
        <Link href="/leads" className="hover:underline">Leads</Link>
        <Link href="/add-lead" className="hover:underline">Add Lead</Link>
      </div>
    </nav>
  );
};

export default Navbar;
