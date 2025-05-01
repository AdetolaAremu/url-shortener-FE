import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  IDecodeResponse,
  IEncodeResponse,
  IStatResponse,
} from "../interfaces/response/Shortener.response";
import { IEncodeDecode } from "../interfaces/types/Shortener.type";
import axios from "axios";

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
  IStatResponse,
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
