import { configureStore } from "@reduxjs/toolkit";
import campersReducer from "./campers/campersSlice.js";
// import filtersReducer from "./filter/filtersSlice.js";
// import authReducer from "./auth/authSlice.js";
// import storage from "redux-persist/lib/storage";
// import {
//     persistStore,
//     persistReducer,
//     FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER,
//   } from "redux-persist";

//   const authPersistReducer = persistReducer(
//     {
//     key: "authSlice",
//     storage,
//     whitelist: ["token"],
//     }, 
//     // authReducer
// );

export const store = configureStore({
    reducer: {
        campers: campersReducer,
        // filters: filtersReducer,
        // auth: authPersistReducer,
    },
    // middleware: (getDefaultMiddleware) =>
    //     getDefaultMiddleware({
    //         serializableCheck: {
    //             ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    //         },
    //     }),
});

// export const persistor = persistStore(store);
// export default store;
