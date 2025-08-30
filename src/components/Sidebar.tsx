import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 bg-gray-800 text-white h-screen p-4">
      <h2 className="text-2xl font-bold mb-6">Monitoring Dashboard</h2>
      <ul>
        <li className="mb-3">
          <a href="/" className="hover:text-blue-400">Dashboard</a>
        </li>
        <li className="mb-3">
          <a href="/prometheus" className="hover:text-blue-400">Prometheus</a>
        </li>
        <li className="mb-3">
          <a href="/alertmanager" className="hover:text-blue-400">Alertmanager</a>
        </li>
        <li className="mb-3">
          <a href="/loki" className="hover:text-blue-400">Loki</a>
        </li>
        <li className="mb-3">
          <a href="/tempo" className="hover:text-blue-400">Tempo</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
