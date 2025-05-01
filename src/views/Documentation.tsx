const endpoints = [
  {
    method: "POST",
    path: "/api/v1/encode",
    description: "Shortens a given URL and returns the shortened version.",
  },
  {
    method: "POST",
    path: "/api/v1/decode",
    description: "Retrieves the shortened URL's original URL",
  },
  {
    method: "GET",
    path: "/api/:shortCode",
    description: "Redirects the shortened URL to the original URL",
  },
  {
    method: "GET",
    path: "/api/v1/:shortCode",
    description: "Fetches details of a specific shortened URL by ID.",
  },
  {
    method: "GET",
    path: "/api/v1/statistic/:shortCode",
    description: "Retrieves all the statistics of a shortcode",
  },
  {
    method: "GET",
    path: "/api/v1/list",
    description: "Redirects to the original URL based on the short code.",
  },
];

const Documentation = () => {
  return (
    <div className="px-6 md:px-20 py-10 space-y-10">
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
              <div className="flex items-center gap-3 mb-2">
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
              <p className="text-gray-600 text-sm">{endpoint.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Documentation;
