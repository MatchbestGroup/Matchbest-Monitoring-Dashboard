import React from 'react';

interface GrafanaEmbedProps {
  src: string;
}

const GrafanaEmbed: React.FC<GrafanaEmbedProps> = ({ src }) => {
  return (
    <div className="w-full h-screen p-4">
      <iframe
        src={src}
        width="100%"
        height="100%"
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default GrafanaEmbed;
