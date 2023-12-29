import {FC, PropsWithChildren} from "react";
import {useForm} from "react-hook-form";
import {IBike} from "../../interfaces/bike.interface";
import css from './BikeForm.module.css'

interface IProps extends PropsWithChildren {
}

const BikeForm: FC<IProps> = () => {
    const {reset, register, handleSubmit, setValue} = useForm<IBike>();

    return (
        <form>
            <div>
                <div id={css.form_left}>
                    <input type="text" placeholder={'price'} {...register('price')}/>
                    <input type="text" placeholder={'type'} {...register('type')}/>
                    <input type="text" placeholder={'color'} {...register('color')}/>
                </div>
                <div>
                    <input type="text" placeholder={'price'} {...register('price')}/>
                    <input type="text" placeholder={'price'} {...register('price')}/>
                    <input type="text" placeholder={'price'} {...register('price')}/>
                </div>
            </div>
            <input type="text" placeholder={'description'} {...register('description')}/>
            <div>
                <button>SAVE</button>
                <button>CLEAR</button>
            </div>
        </form>
    );
};

export {BikeForm};
