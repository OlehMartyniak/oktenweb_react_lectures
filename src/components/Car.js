import {useDispatch} from "react-redux";

import { carActions } from "../redux/slices/carSlice";

const Car = ({car}) => {
    const {id, model, price, year} = car;

    const dispatch = useDispatch();
    return (
        <div>
            <div>id: {id}</div>
            <div>model: {model}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={() => dispatch(carActions.setCarForUpdate(car))}>updateCar</button>
        </div>
    );
};

export {Car};