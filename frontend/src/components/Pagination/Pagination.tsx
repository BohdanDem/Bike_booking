import React, {useEffect, useState} from 'react';
import css from './Pagination.module.css'
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {bikesActions} from "../../redux/slices/bikesSlice";

const Pagination = () => {
    const dispatch = useAppDispatch();
    const {page, limit, itemsCount} = useAppSelector(state => state.bikes);
    const [totalPages, setTotalPages] = useState(Math.ceil(itemsCount/limit));

    const [isPreviousButtonDisabled, setIsPreviousButtonDisabled] = useState(true);
    const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(false);

    useEffect(() => {
        setTotalPages(Math.ceil(itemsCount / limit));
    }, [itemsCount, limit]);

    function valid(page: number, totalPages: number) {

        if (page <= 1) {
            setIsPreviousButtonDisabled(true)
        }
        else if (page > 1) {
            setIsPreviousButtonDisabled(false)
        }
        if (page === totalPages){
            setIsNextButtonDisabled(true)
        }
        else setIsNextButtonDisabled(false)
    }

    const next: React.MouseEventHandler<HTMLButtonElement> = function (ev) {
        ev.preventDefault();
        const newPage: number = page + 1;
        dispatch(bikesActions.setPage(newPage))
        const updatedTotalPages = Math.ceil(itemsCount / limit);
        valid(newPage, updatedTotalPages)
        console.log(newPage);
    };

    const previous: React.MouseEventHandler<HTMLButtonElement> = function (ev) {
        ev.preventDefault();
        const newPage = page - 1;
        dispatch(bikesActions.setPage(newPage))
        const updatedTotalPages = Math.ceil(itemsCount / limit);
        valid(newPage, updatedTotalPages)
        console.log(newPage);
    };

    useEffect(() => {
        valid(page, totalPages);
    }, [totalPages]);

    return (
        <div className={css.pagination}>
            <button onClick={previous} className={isPreviousButtonDisabled ? `${css.button} ${css.button_dis}` : css.button}
                    disabled={isPreviousButtonDisabled}>PREVIOUS</button>
            <button onClick={next} className={isNextButtonDisabled ? `${css.button} ${css.button_dis}` : css.button}
                    disabled={isNextButtonDisabled}>NEXT</button>
        </div>
    );
};

export default Pagination;
