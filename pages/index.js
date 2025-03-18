import Header from "../components/Header";
import '../src/app/globals.css';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 bg-gray-50 min-h-screen">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="text-center mt-12 bg-white shadow-md p-10 rounded-lg">
        <h2 className="text-5xl font-extrabold text-gray-900 leading-tight">
          Manage Your <span className="text-blue-600">Leads</span> Efficiently
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Streamline your workflow with automated lead tracking and powerful analytics.
        </p>
        <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700">
          Start Capturing Leads
        </button>
      </section>

      {/* Features Section */}
      <section className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 shadow-md rounded-lg text-center">
          <h3 className="text-xl font-semibold text-gray-800">Lead Dashboard</h3>
          <p className="mt-2 text-gray-600">Monitor and analyze leads in real-time.</p>
        </div>
        <div className="bg-white p-6 shadow-md rounded-lg text-center">
          <h3 className="text-xl font-semibold text-gray-800">Automated Follow-ups</h3>
          <p className="mt-2 text-gray-600">Engage leads with smart automation.</p>
        </div>
        <div className="bg-white p-6 shadow-md rounded-lg text-center">
          <h3 className="text-xl font-semibold text-gray-800">Sales Insights</h3>
          <p className="mt-2 text-gray-600">Track progress and optimize conversions.</p>
        </div>
      </section>
    </div>
  );
}
