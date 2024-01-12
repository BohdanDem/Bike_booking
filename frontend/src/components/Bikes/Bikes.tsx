import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import Bike from "./Bike/Bike";
import {bikesActions} from "../../redux/slices/bikesSlice";
import css from './Bikes.module.css'

const Bikes = () => {

    const dispatch = useAppDispatch();
    const {data, page} = useAppSelector(state => state.bikes);

    useEffect(() => {
        dispatch(bikesActions.getAllBikes({page}))
    }, [page])

    return (
        <div className={css.bikes}>
            {data && data.map(bike => <Bike key={bike.ID_slug} bike={bike}/>)}
        </div>
    );
};

export default Bikes;
