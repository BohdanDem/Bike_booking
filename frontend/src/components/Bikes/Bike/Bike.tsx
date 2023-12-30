import React, {FC, PropsWithChildren} from 'react';
import {IBike} from '../../../interfaces/bike.interface';
import css from './Bike.module.css'
import image from '../../../assets/image/cross.jpg'

interface IProps extends PropsWithChildren {
    bike: IBike,
}

const Bike: FC<IProps> = ({bike}) => {
    const {name, type, color, ID_slug, price, status} = bike
    return (
        <div className={css.main}>
            <div className={css.info}>
                <div><b>{name.toUpperCase()}</b> - {type.toUpperCase()} ({color.toUpperCase()})</div>
                <div className={css.slug}>{ID_slug}</div>
                <div>STATUS: {status}</div>
            </div>
            <div className={css.info_price}>
                <img className={css.cross} src={image} alt={"cross"}/>
                <div className={css.price}>{price.toFixed(2)} UAH/hr</div>
            </div>
        </div>
    );
};

export default Bike;
