import React, {useEffect, useState} from 'react';
import css from './Pagination.module.css'
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {bikesActions} from "../../redux/slices/bikesSlice";

const Pagination = () => {
    const dispatch = useAppDispatch();
    const {limit, itemsCount} = useAppSelector(state => state.bikes);
    const [totalPages, setTotalPages] = useState(Math.ceil(itemsCount/limit));

    const [isPreviousButtonDisabled, setIsPreviousButtonDisabled] = useState(true);
    const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(false);
    const [page, setPage] = useState(1);

    function valid(page: number, totalPages: number) {
        setTotalPages(Math.ceil(itemsCount / limit));
        page <= 1 ? setIsPreviousButtonDisabled(true) : setIsPreviousButtonDisabled(false)
        page === totalPages ? setIsNextButtonDisabled(true) : setIsNextButtonDisabled(false)
    }

    useEffect(() => {
        valid(page, totalPages);
    }, []);

    const next: React.MouseEventHandler<HTMLButtonElement> = function (ev) {
        ev.preventDefault();
        const newPage: number = page + 1;
        setPage(newPage)
        console.log(newPage);
        dispatch(bikesActions.getAllBikes({page: newPage}))
        valid(newPage, totalPages)
    };

    const previous: React.MouseEventHandler<HTMLButtonElement> = function (ev) {
        ev.preventDefault();
        const newPage = page - 1;
        setPage(newPage)
        console.log(newPage);
        dispatch(bikesActions.getAllBikes({page: newPage}))
        valid(newPage, totalPages)
    };

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
