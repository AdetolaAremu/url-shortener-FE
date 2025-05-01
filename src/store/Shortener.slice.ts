import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export interface IEncodeDecode {
  url: string;
}

export interface IEncodeResponse {
  shortenedlink: string;
}

export interface IDecodeResponse {
  id: string;
  shortCode: string;
  originalURL: string;
  generatedURL: string;
}

interface IStatResponse {
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

interface IShortenerState {
  encodeData: IEncodeResponse | null;
  decodeData: IDecodeResponse | null;
  shortCodeStat: IStatResponse | null;
  redirectResult: any;
  loading: boolean;
  error: string | null;
}

export const encodeURL = createAsyncThunk<
  IEncodeResponse,
  IEncodeDecode,
  { rejectValue: string }
>("shortener/encodeURL", async (data, thunkAPI) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/api/v1/encode",
      data
    );
    return response.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const decodeURL = createAsyncThunk<
  IDecodeResponse,
  IEncodeDecode,
  { rejectValue: string }
>("shortener/decodeUrL", async (data, thunkAPI) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/api/v1/decode",
      data
    );
    return response.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const redirectURL = createAsyncThunk<
  any,
  string,
  { rejectValue: string }
>("shortener/redirect", async (shortCode, thunkAPI) => {
  try {
    const response = await axios.get(
      `http://localhost:3000/api/v1/${shortCode}`
    );
    return response;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const getShortCodeStat = createAsyncThunk<
  any,
  string,
  { rejectValue: string }
>("shortener/stats", async (shortCode, thunkAPI) => {
  try {
    const response = await axios.get(
      `http://localhost:3000/api/v1/statistics/${shortCode}`
    );
    return response.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const initialState: IShortenerState = {
  encodeData: null,
  decodeData: null,
  redirectResult: null,
  shortCodeStat: null,
  loading: false,
  error: null,
};

const shortenerSlice = createSlice({
  name: "shortener",
  initialState,
  reducers: {
    clearEncodedData: (state) => {
      state.encodeData = null;
      state.error = null;
      state.loading = false;
    },
    clearDecodeData: (state) => {
      state.decodeData = null;
      state.error = null;
      state.loading = false;
    },
    clearRedirectResult: (state) => {
      state.redirectResult = null;
      state.error = null;
      state.loading = false;
    },
    clearStatData: (state) => {
      state.shortCodeStat = null;
      state.error = null;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(encodeURL.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        encodeURL.fulfilled,
        (state, action: PayloadAction<IEncodeResponse>) => {
          state.loading = false;
          state.encodeData = action.payload;
        }
      )
      .addCase(encodeURL.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Something went wrong";
      })

      // decode
      .addCase(decodeURL.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        decodeURL.fulfilled,
        (state, action: PayloadAction<IDecodeResponse>) => {
          state.loading = false;
          state.decodeData = action.payload;
        }
      )
      .addCase(decodeURL.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Failed to decode URL";
      })

      // redirect
      .addCase(redirectURL.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(redirectURL.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.redirectResult = action.payload;
      })
      .addCase(redirectURL.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Failed to redirect";
      })

      // stat
      .addCase(getShortCodeStat.pending, (state) => {
        (state.loading = true), (state.error = null);
      })
      .addCase(
        getShortCodeStat.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.shortCodeStat = action.payload;
        }
      )
      .addCase(getShortCodeStat.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Failed to load data";
      });
  },
});

export const {
  clearEncodedData,
  clearDecodeData,
  clearRedirectResult,
  clearStatData,
} = shortenerSlice.actions;
export default shortenerSlice.reducer;
