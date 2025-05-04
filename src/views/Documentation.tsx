import { useState } from "react";
import { endpoints } from "../components/StaticData";

const Documentation = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <div className="px-6 md:px-20 py-10 space-y-10 -mt-20">
      <div className="mt-20">
        <h1 className="font-bold text-3xl text-blue-400 text-center">
          URL Shortener API
        </h1>

        <p className="text-gray-600 text-sm text-center mt-3">
          This service allows you to shorten long URLs into simpler, shareable
          links. You can also retrieve,
          <br />
          track, and manage your shortened URLs via our API.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Available Endpoints
        </h2>

        <div className="space-y-6">
          {endpoints.map((endpoint, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg shadow-sm p-5 bg-white"
            >
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleExpand(index)}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`text-sm font-bold px-2 py-1 rounded ${
                      endpoint.method === "GET"
                        ? "bg-green-100 text-green-700"
                        : endpoint.method === "POST"
                        ? "bg-blue-100 text-blue-700"
                        : endpoint.method === "DELETE"
                        ? "bg-red-100 text-red-700"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {endpoint.method}
                  </span>
                  <code className="text-sm text-gray-800">{endpoint.path}</code>
                </div>
                {(endpoint.body || endpoint.response) && (
                  <svg
                    className={`w-5 h-5 text-gray-500 transform transition-transform ${
                      expandedIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </div>

              <p className="text-gray-600 text-sm mt-2">
                {endpoint.description}
              </p>

              {expandedIndex === index &&
                (endpoint.body || endpoint.response) && (
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    {endpoint.body && (
                      <div className="mb-4">
                        <h3 className="text-sm font-semibold text-gray-700 mb-2">
                          Request Body
                        </h3>
                        <div className="bg-gray-50 p-3 rounded-md">
                          <pre className="text-xs text-gray-800 overflow-x-auto">
                            {JSON.stringify(endpoint.body, null, 2)}
                          </pre>
                        </div>
                      </div>
                    )}

                    {endpoint.response && (
                      <div>
                        <h3 className="text-sm font-semibold text-gray-700 mb-2">
                          Response
                        </h3>
                        <div className="bg-gray-50 p-3 rounded-md">
                          <pre className="text-xs text-gray-800 overflow-x-auto">
                            {JSON.stringify(endpoint.response, null, 2)}
                          </pre>
                        </div>
                      </div>
                    )}
                  </div>
                )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Documentation;
