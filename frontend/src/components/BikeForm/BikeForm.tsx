import {FC, PropsWithChildren} from "react";
import {useForm} from "react-hook-form";
import {IBike} from "../../interfaces/bike.interface";
import css from './BikeForm.module.css'

interface IProps extends PropsWithChildren {
}

const BikeForm: FC<IProps> = () => {
    const {register} = useForm<IBike>();

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
                    <input type="text" placeholder={'ID (slug): XXXXX'} {...register('price')}/>
                </div>
            </div>
            <input id={css.desc} type="text" placeholder={'Description'} {...register('description')}/>
            <div id={css.main}>
                <button>SAVE</button>
                <button>CLEAR</button>
            </div>
        </form>
    );
};

export {BikeForm};
