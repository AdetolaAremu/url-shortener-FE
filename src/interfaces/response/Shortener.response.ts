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
  lastFifteenHits: {
    ip: string;
    agent: string;
    country: string;
    region: string;
    timestamp: string;
  }[];
}
