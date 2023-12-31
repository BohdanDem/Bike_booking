import React, {FC, PropsWithChildren, useEffect, useState} from 'react';
import {IBike} from '../../../interfaces/bike.interface';
import css from './Bike.module.css'
import image from '../../../assets/image/cross.jpg'
import {useAppDispatch, useAppSelector} from "../../../hooks/reduxHooks";
import {bikeForClearActions} from "../../../redux/slices/bikeForClearSlice";
import {bikeService} from "../../../services/bike.service";
import {bikesActions} from "../../../redux/slices/bikesSlice";

interface IProps extends PropsWithChildren {
    bike: IBike,
}

const Bike: FC<IProps> = ({bike}) => {
    const {name, type, color, ID_slug, price, status} = bike
    const dispatch = useAppDispatch();
    const {page} = useAppSelector(state => state.bikes);
    const [bikeStatus, setBikeStatus] = useState(status);

    const updateBikeStatus = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedOption = event.target.value;
        setBikeStatus(selectedOption);
    };

    useEffect( () => {
        const update = async () => {
            await bikeService.updateById(bike.ID_slug, {status: bikeStatus})
            await dispatch(bikesActions.getAllBikes({page}))
        }
        update().then()
    }, [bikeStatus]);

    return (
        <div className={status === "Available" ?
            css.main : status === "Busy" ?
                `${css.main} ${css.main_busy}`
                : `${css.main} ${css.main_unavailable}`}>
            <div className={css.info}>
                <div className={status === "Unavailable" ? css.opacity : null}>
                    <b>{name.toUpperCase()}</b> - {type.toUpperCase()} ({color.toUpperCase()})
                </div>
                <div className={status === "Unavailable" ? `${css.slug} ${css.opacity}` : css.slug}>{ID_slug}</div>
                <div className={css.dropdown}>
                    <div>STATUS:</div>
                    <select className={status === "Unavailable" ? css.select_opacity : css.select}
                            value={status} onChange={updateBikeStatus}>
                        <option value="Available">Available</option>
                        <option value="Busy">Busy</option>
                        <option value="Unavailable">Unavailable</option>
                    </select>
                </div>
            </div>
            <div className={status === "Unavailable" ? `${css.info_price} ${css.opacity}` : css.info_price}>
                <img className={css.cross}
                     onClick={()=>dispatch(bikeForClearActions.setBikeForClear({bike}))}
                     src={image} alt={"cross"}/>
                <div className={css.price}>{price.toFixed(2)} UAH/hr</div>
            </div>
        </div>
    );
};

export default Bike;
