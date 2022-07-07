import React from 'react';
import {useForm} from "react-hook-form";

import {createUser} from "../../services";

const Users = () => {

    const {register,handleSubmit,formState:{errors}} = useForm({
        defaultValues: {
            name: 'name',
            username: 'usename',
            email: 'example@gmail.com'
        }
    });


    const submit = (obj)=> {
        createUser(obj).then(result => console.log(result))
    }

    return (
        <div>

            <form onSubmit={handleSubmit(submit)}>
                <input type="text" {...register('name',{required:true})}/>

                <input type="text" {...register('username',{required:true})}/>
                <input type="text" {...register('email ',{required:true})}/>
                <input type="submit"/>
                {errors.name && <p>Field is required</p>}
                {errors.username && <p>Field is required</p>}
                {errors.email && <p>Field is required</p>}
            </form>
            
        </div>
    );
};

export {Users};