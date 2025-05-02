import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  IAllURL,
  IDecodeResponse,
  IEncodeResponse,
  IStatResponse,
} from "../interfaces/response/Shortener.response";
import {
  IAllUrlQuery,
  IEncodeDecode,
} from "../interfaces/types/Shortener.type";
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
    // console.log(response.data.data);
    return response.data.data;
  } catch (error: any) {
    if (error.response?.status === 404) {
      return thunkAPI.rejectWithValue("Item not found");
    }

    return thunkAPI.rejectWithValue("Something went wrong");
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
    const response = await axios.get(`${service_url}/statistics/${shortCode}`);
    return response.data.data;
  } catch (error: any) {
    if (error.response?.status === 404) {
      return thunkAPI.rejectWithValue("Item not found");
    }

    return thunkAPI.rejectWithValue("Something went wrong");
  }
});

export const getAllUrls = createAsyncThunk<
  IAllURL,
  IAllUrlQuery,
  { rejectValue: string }
>("shortener/allUrl", async (data, thunkAPI) => {
  try {
    const params = new URLSearchParams({
      page: data.page.toString(),
      limit: data.limit?.toString() || "10",
      searchQuery: data.searchQuery || "",
    });

    const response = await axios.get(
      `${service_url}/list?${params.toString()}`
    );
    return response.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
