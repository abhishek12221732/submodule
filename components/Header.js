import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-md py-4 px-6 fixed top-0 left-0 w-full z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">Lead Management</h1>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/lead-capture" className="text-gray-700 hover:text-blue-600 transition">
                Capture Lead
              </Link>
            </li>
            <li>
              <Link href="/dashboard" className="text-gray-700 hover:text-blue-600 transition">
                Dashboard
              </Link>
            </li>
            <li>
              <Link href="/settings" className="text-gray-700 hover:text-blue-600 transition">
                Settings
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
