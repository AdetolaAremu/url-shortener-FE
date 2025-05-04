export const endpoints = [
  {
    method: "POST",
    path: "/api/v1/encode",
    description: "Shortens a given URL and returns the shortened version.",
    body: {
      url: "https://very-long-url.com",
    },
    response: {
      success: "success",
      message: "Link generated successfully",
      data: {
        shortenedlink: "https://indi.ca/abc123",
      },
    },
  },
  {
    method: "POST",
    path: "/api/v1/decode",
    description: "Retrieves the shortened URL's original URL",
    body: {
      url: "https://indi.caa/Bp9B13",
    },
    response: {
      success: "success",
      message: "Link retrieved successfully",
      data: {
        id: "213b4087-0f71-424f-b3b5-b8179c6db5b7",
        shorCode: "Bp9B13",
        originalURL:
          "https://example-of-a-very-long-url.com/with/multiple/paths",
        generatedURL: "https://indi.na/Bp9B13",
      },
    },
  },
  {
    method: "GET",
    path: "/api/:shortCode",
    description: "Redirects the shortened URL to the original URL",
  },
  {
    method: "GET",
    path: "/api/v1/statistics/:shortCode",
    description: "Fetches details of a specific shortened URL by ID.",
    response: {
      success: "success",
      message: "Statistics retrieved successfully",
      data: {
        shorCode: "Bp9B13",
        originalURL: "https://long-url.io",
        generatedURL: "https://indi.na/hgK1UN",
        mostVisitedCountry: "US",
        mostVisitedRegion: "Texas",
        totalHits: 6000,
        las15Hits: [
          {
            ip: "::1",
            agent: "PostmanRuntime/7.43.4",
            country: "",
            region: "",
            timestamp: 1746028477057,
          },
        ],
      },
    },
  },

  {
    method: "GET",
    path: "/api/v1/list",
    description: "A paginated lists of all hits.",
    response: {
      success: "success",
      message: "All urls retrieved successfully",
      data: {
        paginated: [
          {
            shortCode: "hgK1UN",
            originalURL: "https://creadow.io",
            generatedURL: "https://indi.na/hgK1UN",
            mostVisitedCountry: "US",
            mostVisitedRegion: "unknown",
            totalHits: 6,
          },
        ],
        page: 1,
        limit: 15,
        total: 26,
        totalPages: 2,
      },
    },
  },
];
