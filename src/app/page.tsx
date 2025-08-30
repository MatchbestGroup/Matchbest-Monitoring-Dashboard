import Sidebar from '@/components/Sidebar';
import GrafanaEmbed from '@/components/GrafanaEmbed';

export default function Home() {
  // In a real application, you would dynamically set the Grafana dashboard URL
  // based on the selected service or route.
  const grafanaUrl = "http://localhost:3000"; // Corrected URL for Grafana instance

  return (
    <main className="flex min-h-screen bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-white"> {/* Updated classes for dark mode */}
      <Sidebar />
      <div className="flex-1 p-8">
        {/* This is where the GrafanaEmbed or other content will be displayed */}
        <h1 className="text-3xl font-bold mb-6">Monitoring Dashboard</h1>
        <p>Select a service from the sidebar to view its dashboard.</p>
        {/* Example of how GrafanaEmbed might be used, perhaps conditionally */}
        <GrafanaEmbed src={grafanaUrl} />
      </div>
    </main>
  );
}
