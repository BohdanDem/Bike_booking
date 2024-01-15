import {FC, FormEvent, PropsWithChildren} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {IBike} from "../../interfaces/bike.interface";
import css from './BikeForm.module.css'
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {bikesActions} from "../../redux/slices/bikesSlice";
import {joiResolver} from "@hookform/resolvers/joi";
import {bikeValidator} from "../../validators/bike.validator";

interface IProps extends PropsWithChildren {
}

const BikeForm: FC<IProps> = () => {
    const {reset,
        register,
        handleSubmit,
        setValue,
        formState: {errors} } = useForm<IBike>({
        mode: "onSubmit",
        resolver: joiResolver(bikeValidator)
        });
    const {page} = useAppSelector(state => state.bikes);
    const dispatch = useAppDispatch();

    const save: SubmitHandler<IBike> = async (bike) => {
        await dispatch(bikesActions.createBike({bike}))
        await dispatch(bikesActions.getAllBikes({page}))
        reset()
    };

    const formFields = ['name', 'color', 'price', 'type', 'wheel_size', 'ID_slug', 'description'] as const;

    const clearForm = (e: FormEvent) => {
        e.preventDefault()
        formFields.forEach(field => {
            setValue(field, '');
        });
    };

    return (
        <form id={css.form}>
            <div id={css.main}>
                <div id={css.form_left}>
                    <input className={`${css.input} ${css.formInput}`} type="text" placeholder={'Name'} {...register('name')}/>
                    {errors.name && <span>{errors.name.message}</span>}
                    <input type="text" placeholder={'Color'} {...register('color')}/>
                    {errors.color && <span>{errors.color.message}</span>}
                    <input type="text" placeholder={'Price'} {...register('price')}/>
                    {errors.price && <span>{errors.price.message}</span>}
                </div>
                <div id={css.form_right}>
                    <input type="text" placeholder={'Type'} {...register('type')}/>
                    {errors.type && <span>{errors.type.message}</span>}
                    <input type="text" placeholder={'Wheel_size'} {...register('wheel_size')}/>
                    {errors.wheel_size && <span>{errors.wheel_size.message}</span>}
                    <input type="text" placeholder={'ID (slug): XXXXX'} {...register('ID_slug')}/>
                    {errors.ID_slug && <span>{errors.ID_slug.message}</span>}
                </div>
            </div>
            <input id={css.desc} type="text" placeholder={'Description'} {...register('description')}/>
            {errors.description && <span>{errors.description.message}</span>}
            <div id={css.main}>
                <button id={css.button} onClick={handleSubmit(save)}>SAVE</button>
                <button id={css.button} onClick={clearForm}>CLEAR</button>
            </div>
        </form>
    );
};

export {BikeForm};
