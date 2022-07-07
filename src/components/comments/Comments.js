import React from 'react';
import {useForm} from "react-hook-form";

import {createComment} from "../../services";

const Comments = () => {

    const {register,handleSubmit,formState:{errors}} = useForm({
        defaultValues: {
            name: 'name',
            body: 'body',
            email: 'example@gmail.com'
        }
    });

    const submit = (obj)=> {
        createComment(obj).then(({data}) => console.log(data))
    }

    return (
        <div>

            <form onSubmit={handleSubmit(submit)}>
                <input type="text" {...register('name',{required:true})}/>

                <input type="text" {...register('body',{required:true})}/>
                <input type="text" {...register('email',{required:true})}/>
                <input type="submit"/>
                {errors.name && <p>Field is required</p>}
                {errors.username && <p>Field is required</p>}
                {errors.email && <p>Field is required</p>}
            </form>

        </div>
    );
};

export {Comments};