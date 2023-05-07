import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {carService} from "../services";
import {carActions} from "../redux";
import {useEffect} from "react";

const CarForm = () => {
    const dispatch = useDispatch();
    const {carForUpdate} = useSelector(state => state.cars);
    const {reset, register, handleSubmit, setValue} = useForm();
    const save = async (car) => {
        await carService.create(car);
        dispatch(carActions.changeTrigger());
        reset();
    }
    const update = async (car) => {
        await carService.updateById(carForUpdate.id, car);
        dispatch(carActions.changeTrigger());
        reset();
    }

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand);
            setValue('price', carForUpdate.price);
            setValue('year', carForUpdate.year);
        }
    }, [carForUpdate, setValue]);

    return (
        <form onSubmit={handleSubmit(carForUpdate?update:save)}>
            <input type='text' placeholder={'brand'} {...register('brand')}/>
            <input type='text' placeholder={'price'} {...register('price')}/>
            <input type='text' placeholder={'year'} {...register('year')}/>
            <button>{carForUpdate?'Update':'Save'}</button>
        </form>
    );
};

export {
    CarForm
};