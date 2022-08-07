import { useDispatch } from "react-redux";
import { carActions } from "../redux/slices/carSlice";

const Car = ({ car }) => {

  const dispatch = useDispatch();
    
  return (
    <div>
      <p>id: {car.id}</p>
      <p>model: {car.model}</p>
      <p>year: {car.year}</p>
      <p>price: {car.price}</p>
      <button onClick={()=>dispatch(carActions.setCarForUpdate(car))}>update car</button>
    </div>
  );
};

export { Car };
