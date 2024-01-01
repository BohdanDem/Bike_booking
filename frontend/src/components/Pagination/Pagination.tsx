import React, {useEffect, useState} from 'react';
import css from './Pagination.module.css'
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {bikesActions} from "../../redux/slices/bikesSlice";

const Pagination = () => {
    const dispatch = useAppDispatch();
    const {page, limit, itemsCount} = useAppSelector(state => state.bikes);

    const [isPreviousButtonDisabled, setIsPreviousButtonDisabled] = useState(true);
    const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(false);
    const [totalPages, setTotalPages] = useState(Math.ceil(itemsCount/limit));

    useEffect(() => {
        setTotalPages(Math.ceil(itemsCount/limit))
    }, [limit, itemsCount, page])

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

    const next: React.MouseEventHandler<HTMLButtonElement> = async function (ev) {
        ev.preventDefault();
        const newPage = page + 1;
        await dispatch(bikesActions.setPage(newPage))
        valid(newPage, totalPages)
        console.log(newPage);
    };

    const previous: React.MouseEventHandler<HTMLButtonElement> = async function (ev) {
        ev.preventDefault();
        const newPage = page - 1;
        await dispatch(bikesActions.setPage(newPage))
        valid(newPage, totalPages)
        console.log(newPage);
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
