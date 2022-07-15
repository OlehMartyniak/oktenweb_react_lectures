import React from 'react';

const Car = ({car,deleteCar,setCarEdit}) => {
    const {id,model,price,year} = car;

    return (
        <div className={'carContainer'}>
            <div className={'carInfo'}>
                <div>id: {id}</div>
                <div>model: {model}</div>
                <div>price: {price}</div>
                <div>year: {year}</div>
            </div>
            <div className={'carTools'}>
                <button onClick={()=>setCarEdit(car)}>Edit</button>
                <button onClick={()=>deleteCar(id)}>Delete</button>
            </div>
        </div>
    );
};

export {Car};