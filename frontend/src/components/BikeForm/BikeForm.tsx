import {FC, PropsWithChildren, useEffect} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {IBike} from "../../interfaces/bike.interface";
import css from './BikeForm.module.css'
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {bikesActions} from "../../redux/slices/bikesSlice";

interface IProps extends PropsWithChildren {
}

const BikeForm: FC<IProps> = () => {
    const {reset, register, handleSubmit, setValue} = useForm<IBike>();
    const {bikeForClear} = useAppSelector(state => state.bikeForClear);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (bikeForClear) {
            setValue('name', bikeForClear.name)
            setValue('color', bikeForClear.color)
            setValue('price', bikeForClear.price)
            setValue('type', bikeForClear.type)
            setValue('wheel_size', bikeForClear.wheel_size)
            setValue('ID_slug', bikeForClear.ID_slug)
            setValue('description', bikeForClear.description)
        }
    }, [bikeForClear, setValue])

    const save: SubmitHandler<IBike> = async (bike) => {
        await dispatch(bikesActions.createBike({bike}))
        reset()
    };

    const clear: SubmitHandler<IBike> = async (bike) => {
        const ID_slug = bike.ID_slug
        await dispatch(bikesActions.deleteBike({ID_slug}))
        reset()
    };

    return (
        <form id={css.form}>
            <div id={css.main}>
                <div id={css.form_left}>
                    <input type="text" placeholder={'Name'} {...register('name')}/>
                    <input type="text" placeholder={'Color'} {...register('color')}/>
                    <input type="text" placeholder={'Price'} {...register('price')}/>
                </div>
                <div id={css.form_right}>
                    <input type="text" placeholder={'Type'} {...register('type')}/>
                    <input type="text" placeholder={'Wheel_size'} {...register('wheel_size')}/>
                    <input type="text" placeholder={'ID (slug): XXXXX'} {...register('ID_slug')}/>
                </div>
            </div>
            <input id={css.desc} type="text" placeholder={'Description'} {...register('description')}/>
            <div id={css.main}>
                <button onClick={handleSubmit(save)}>SAVE</button>
                <button onClick={handleSubmit(clear)}>CLEAR</button>
            </div>
        </form>
    );
};

export {BikeForm};