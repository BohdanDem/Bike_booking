import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IBike, IPaginationBikes} from "../../interfaces/bike.interface";
import {AxiosError} from "axios";
import {bikeService} from "../../services/bike.service";
import {useAppSelector} from "../../hooks/reduxHooks";

const initialState: IPaginationBikes<IBike> = {
    page: 1,
    limit: null,
    itemsCount: null,
    itemsFound: null,
    availableBikes: null,
    bookedBikes: null,
    averageBikeCost: null,
    data: [],
}

const getAllBikes = createAsyncThunk<IPaginationBikes<IBike>, {page: number}>(
    'bikesSlice/getAllBikes',
    async ({page}, {rejectWithValue}) => {
        try {
            const {data} = await bikeService.getAll(page);
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const createBike = createAsyncThunk<void, {bike: IBike}>(
    'bikesSlice/createBike',
    async ({bike}, {rejectWithValue, dispatch}) => {
        try {
            await bikeService.create(bike);
            const {page} = useAppSelector(state => state.bikes);
            dispatch(getAllBikes({page}))
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const deleteBike = createAsyncThunk<void, {ID_slug: string}>(
    'bikesSlice/deleteBike',
    async ({ID_slug}, {rejectWithValue, dispatch}) => {
        try {
            await bikeService.deleteById(ID_slug)
            const {page} = useAppSelector(state => state.bikes);
            dispatch(getAllBikes({page}))
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const bikesSlice = createSlice({
    name: 'bikesSlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(getAllBikes.fulfilled, (state, action) => {
            state.page = action.payload.page
            state.limit = action.payload.limit
            state.itemsCount = action.payload.itemsCount
            state.itemsFound = action.payload.itemsFound
            state.availableBikes = action.payload.availableBikes
            state.bookedBikes = action.payload.bookedBikes
            state.averageBikeCost = action.payload.averageBikeCost
            state.data = action.payload.data
        })
})

const {reducer: bikesReducer, actions} = bikesSlice;

const bikesActions = {
    ...actions,
    getAllBikes,
    createBike,
    deleteBike
}

export {
    bikesActions,
    bikesReducer
}
