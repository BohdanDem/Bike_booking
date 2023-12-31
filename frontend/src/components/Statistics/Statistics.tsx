import React from 'react';
import {useAppSelector} from "../../hooks/reduxHooks";
import css from './Statistic.module.css'

const Statistics = () => {

    const {itemsCount, availableBikes, bookedBikes, averageBikeCost} = useAppSelector(state => state.bikes);

    return (
        <>
            <div className={css.header}>STATISTICS</div>
            <main>
                <div>Total Bikes: <b>{itemsCount}</b></div>
                <div>Available Bikes: <b>{availableBikes}</b></div>
                <div>Booked Bikes: <b>{bookedBikes}</b></div>
                <div>Average bike cost: <b>{averageBikeCost}</b> UAH/hr</div>
            </main>
        </>
    );
};

export default Statistics;
