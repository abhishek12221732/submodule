import Link from "next/link";

export default function Header() {
  return (
    <header>
      <h1>Lead Management System</h1>
      <nav>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/lead-capture">Capture Lead</Link></li>
          <li><Link href="/dashboard">Dashboard</Link></li>
          <li><Link href="/settings">Settings</Link></li>
        </ul>
      </nav>
    </header>
  );
}
