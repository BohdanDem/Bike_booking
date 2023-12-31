import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IBike} from "../../interfaces/bike.interface";

interface IState {
    bikeForClear: IBike | null
}

const initialState: IState = {
    bikeForClear: null,
}

const bikeForClear = createSlice({
    name: 'bikeForClear',
    initialState,
    reducers: {
        setBikeForClear: (state, action: PayloadAction<{ bike: IBike }>) => {
            state.bikeForClear = action.payload.bike
        }
    },
})

const {reducer: bikeForClearReducer, actions} = bikeForClear;

const bikeForClearActions = {
    ...actions,
}

export {
    bikeForClearReducer,
    bikeForClearActions
}
