import React from "react";
import { useParams } from "react-router-dom";

const Redirection = () => {
  const { shortCode } = useParams<{ shortCode: string }>();

  const service_url = import.meta.env.VITE_BASE_URL;

  React.useState(() => {
    if (shortCode) {
      window.location.href = `${service_url}/${shortCode}`;
    }
  });

  return (
    <>
      <div className="text-center py-10 text-gray-600">Redirecting...</div>
    </>
  );
};

export default Redirection;
