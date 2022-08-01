import {useDispatch} from "react-redux";
import {countOneAction, countTwoAction} from "../redux";

const CountTwoTools = () => {

    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={()=>dispatch(countTwoAction.inc(2))}>increment 2</button>
            <button onClick={()=>dispatch(countTwoAction.dec(2))}>decrement 2</button>
            <button onClick={()=>dispatch(countTwoAction.reset(10))}>reset 2</button>
        </div>
    );
};

export {CountTwoTools};