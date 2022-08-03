import {useDispatch, useSelector} from "react-redux";
import {Car} from "./Car";
import {useEffect} from "react";
import {carActions,getAll} from "../redux";

const Cars = () => {

    const {cars} = useSelector(state => state.cars);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(carActions.getAll())
    },[]);

    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};