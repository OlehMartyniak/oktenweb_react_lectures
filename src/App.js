import React from 'react';
import {useForm} from "react-hook-form";

let usersList = [
    {id: 1,name:'Mary'},
    {id: 2,name:'Lisbeth'},
    {id: 3,name:'Vinona'}
];

const App = () => {
    

let {register,handleSubmit,formState:{errors}} = useForm();

let submit = (obj)=> {
    console.log(obj)
    

}

    return (
        <div>

            <form onSubmit={handleSubmit(submit)}>
                <input type="text" {...register('title',{required:true})}/>
                <input type="text" {...register('body')}/>

                <select {...register('UserId')}>
                    {usersList.map(value => <option value={value.id} key={value.id}>{value.name}</option>)}
                </select>


                <button>save</button>
                {
                    errors.title && <p>field is required</p>
                }
            </form>

        </div>
    );
};

export default App;