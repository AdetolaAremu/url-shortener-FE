export interface IEncodeResponse {
  shortenedlink: string;
}

export interface IDecodeResponse {
  id: string;
  shortCode: string;
  originalURL: string;
  generatedURL: string;
}

export interface IStatResponse {
  shortCode: string;
  originalURL: string;
  generatedURL: string;
  mostVisitedCountry: string;
  mostVisitedRegion: string;
  totalHits: number;
  las15Hits: {
    ip: string;
    agent: string;
    country: string;
    region: string;
    timestamp: string;
  }[];
}

export interface IAllURL {
  status: string;
  message: string;
  data: {
    paginated: {
      shortCode: string;
      originalURL: string;
      generatedURL: string;
      mostVisitedCountry: string | null | undefined | unknown;
      mostVisitedRegion: string | null | undefined | unknown;
      totalHits: number;
    }[];
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}
