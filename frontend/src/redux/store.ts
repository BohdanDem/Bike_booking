import {configureStore} from "@reduxjs/toolkit";
import {bikesReducer} from "./slices/bikesSlice";

const store = configureStore({
    reducer: {
        bikes: bikesReducer,
    }
})

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export type {
    RootState,
    AppDispatch
}

export {
    store
}
