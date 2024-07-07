import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://66858f8fb3f57b06dd4d27f0.mockapi.io/api/advert";

export const fetchCampers = createAsyncThunk(
    "campers/fetchCampers",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get("/");
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }

    }
);
