import {
  IDecodeResponse,
  IEncodeResponse,
  IStatResponse,
} from "../response/Shortener.response";

export interface IEncodeDecode {
  url: string;
}

export interface IShortenerState {
  encodeData: IEncodeResponse | null;
  decodeData: IDecodeResponse | null;
  shortCodeStat: IStatResponse | null;
  redirectResult: any;
  loading: boolean;
  error: string | null;
}
