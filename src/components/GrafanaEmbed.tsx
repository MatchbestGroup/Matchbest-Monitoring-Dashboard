import React from 'react';

interface GrafanaEmbedProps {
  src: string;
  username?: string; // Added username prop
  password?: string; // Added password prop
}

const GrafanaEmbed: React.FC<GrafanaEmbedProps> = ({ src, username, password }) => {
  // Construct the embed URL with credentials if provided
  // NOTE: Embedding credentials directly in the URL is generally not secure.
  // Consider using Grafana API keys or anonymous access for better security.
  const embedUrl = username && password
    ? `${src}?user=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`
    : src;

  return (
    <div className="w-full h-screen p-4">
      <iframe
        src={embedUrl} // Use the constructed embedUrl
        width="100%"
        height="100%"
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default GrafanaEmbed;
