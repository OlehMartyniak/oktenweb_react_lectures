import {useDispatch} from "react-redux";
import {countOneAction} from "../redux";

const CountOneTools = () => {

    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={()=>dispatch(countOneAction.inc())}>increment 1</button>
            <button onClick={()=>dispatch(countOneAction.dec())}>decrement 1</button>
            <button onClick={()=>dispatch(countOneAction.reset())}>reset 1</button>
        </div>
    );
};

export {CountOneTools};