import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  IDecodeResponse,
  IEncodeResponse,
  IStatResponse,
} from "../interfaces/response/Shortener.response";
import { IEncodeDecode } from "../interfaces/types/Shortener.type";
import axios from "axios";

const service_url = import.meta.env.VITE_BASE_URL;

export const encodeURL = createAsyncThunk<
  IEncodeResponse,
  IEncodeDecode,
  { rejectValue: string }
>("shortener/encodeURL", async (data, thunkAPI) => {
  try {
    const response = await axios.post(`${service_url}/encode`, data);
    console.log(response.data, "respnose");

    return response.data.data;
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
    const response = await axios.post(`${service_url}/decode`, data);
    console.log(response.data.data);
    return response.data.data;
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
    const response = await axios.get(`${service_url}/${shortCode}`);
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
    const response = await axios.get(`h${service_url}/statistics/${shortCode}`);
    return response.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
