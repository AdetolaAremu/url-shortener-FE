import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  IDecodeResponse,
  IEncodeResponse,
  IStatResponse,
} from "../interfaces/response/Shortener.response";
import { IShortenerState } from "../interfaces/types/Shortener.type";
import { decodeURL, encodeURL, getShortCodeStat, redirectURL } from "./Action";

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
        (state, action: PayloadAction<IStatResponse>) => {
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
