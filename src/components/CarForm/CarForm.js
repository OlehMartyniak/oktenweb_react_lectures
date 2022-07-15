import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {carService} from "../../services";

const CarForm = ({addCar,carEdit,updateCar}) => {

    const {register, handleSubmit, reset, setValue, formState:{errors}} = useForm({mode:'all'});

    const submit = async (newCar)=> {
        if (!carEdit) {
            const {data} = await carService.create(newCar)
            addCar(data)
        } else {
            const {data} = await carService.updateById(carEdit.id,newCar);
            updateCar(data )
        }
        reset()
    };

    useEffect(()=>{
        if(carEdit) {
            setValue('model',carEdit.model)
            setValue('price',carEdit.price)
            setValue('year',carEdit.year)
        }
    },[carEdit])

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <h3>Add car</h3>

                <input type="text" placeholder={'model'} {...register('model',{
                    required:true,
                    pattern: new RegExp(/^[a-zA-ZА-яіІїЇ]{1,20}$/)
                })}/>
                <input type="number" placeholder={'price'} {...register('price',{
                    valueAsNumber:true,
                    required:true,
                    min:0,
                    max:1000000
                })}/>
                <input type="number" placeholder={'year'} {...register('year',{
                    required:true,
                    valueAsNumber:true,
                    min:1990,
                    max:new Date().getFullYear()
                })}/>

                <button>{carEdit ? 'Edit' : 'Save'}</button>
                
            </form>

            <div>
                {errors.model && <span>Only Alpha min 1 max 20 characters </span>}
                {errors.price && <span>Min 0 Max 1 000 000 </span>}
                {errors.year && <span>Min 1990 Max current year </span>}
            </div>
        </div>
    );
};

export {CarForm};