import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { authActions } from "../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {

    const {register,handleSubmit} = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submit = async (data) => {
        // const result = await dispatch(authActions.register({user: data}))
        const {error} = await dispatch(authActions.register({user: data}))
        if (!error) {
            navigate('/login')
        }
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder="username" {...register('username')}/>
            <input type="text" placeholder="password" {...register('password')}/>
            <button>register</button>
        </form>
    );
};

export {RegisterForm};