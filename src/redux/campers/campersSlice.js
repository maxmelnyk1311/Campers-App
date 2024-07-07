import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers } from "./operations";
// import { selectNameFilter } from "../filter/selectors";
// import { selectContacts } from "../contacts/selectors";
// import { logOut } from "../auth/operations";

const slice = createSlice({
    name: "campers",
    initialState: {
        items: [],
        loading: false,
        error: false,
    },
    extraReducers: (builder) => 
        builder
            .addCase(fetchCampers.pending, (state) => {
                state.error = false;
                state.loading = true;
            })
            .addCase(fetchCampers.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(fetchCampers.rejected, (state) => {
                state.loading = false;
                state.error = true;
            })
})

export default slice.reducer;
