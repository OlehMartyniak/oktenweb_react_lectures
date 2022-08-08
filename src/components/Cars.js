import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import { Car } from "./Car";
import { carActions } from "../redux/slices/carSlice";

const Cars = () => {
    const {cars} = useSelector(state => state.cars);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(carActions.getAll())
    }, [])

    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};