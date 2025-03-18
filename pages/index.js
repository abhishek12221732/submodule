import Header from "../components/Header";
import '../src/app/globals.css';


export default function Home() {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <Header />
      <section className="mt-16 text-center">
        <h2 className="text-4xl font-bold text-gray-900">Welcome to the Lead Management System</h2>
        <p className="mt-4 text-lg text-gray-600">Efficiently manage your leads, track sales progress, and automate workflows all in one place.</p>
      </section>
      
      <section className="mt-12 text-center">
        <h3 className="text-2xl font-semibold text-gray-800">Lead Dashboard</h3>
        <p className="mt-2 text-gray-600">Monitor your lead pipeline with real-time updates and key metrics.</p>
      </section>

      <section className="mt-10 text-center">
        <button
          onClick={() => window.location.href = "/lead-capture"}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700"
        >
          Start Capturing Leads
        </button>
      </section>
    </div>
  );
}
