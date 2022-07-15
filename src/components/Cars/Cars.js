import React, {useEffect, useState} from 'react';
import {carService} from "../../services";
import {Car} from "../Car/Car";
import {CarForm} from "../CarForm/CarForm";

const Cars = () => {

    let [cars,setCars] = useState([]);
    let [carEdit,setCarEdit] = useState(null);

    useEffect(()=>{
        carService.getAll().then(({data}) => setCars(data))
    },[]);

    const addCar = (car) => {
        setCars([...cars,car])
    };

    const deleteCar = async (id) => {
      await carService.deleteById(id);
      const res = [...cars];
      const index = res.findIndex(value => value.id === id);
      if (index !== -1) {
          res.splice(index,1);
          setCars(res)
      }
    };

    const updateCar = (car) => {
        const res = [...cars];
        const find = res.find(value => value.id === carEdit.id);
        Object.assign(find,car);
        setCars(res);
        setCarEdit(null);
    }

    return (
        <div>
            <CarForm addCar={addCar} carEdit={carEdit} updateCar={updateCar}/>
            <h3>Car list</h3>
            {cars.map(car => <Car key={car.id} car={car} deleteCar={deleteCar} setCarEdit={setCarEdit}/>)}
        </div>
    );
};

export {Cars};