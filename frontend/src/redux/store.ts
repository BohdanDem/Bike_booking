import {configureStore} from "@reduxjs/toolkit";
import {bikesReducer} from "./slices/bikesSlice";
import {bikeForClearReducer} from "./slices/bikeForClearSlice";

const store = configureStore({
    reducer: {
        bikes: bikesReducer,
        bikeForClear: bikeForClearReducer
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
