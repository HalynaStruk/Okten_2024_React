import {useEffect} from "react";
import {carService} from "../services/api.service";

const CarsPage = () => {
    useEffect(() => {
        carService.getCars()
    },[])
    return (
        <div>
            CarsPage
        </div>
    );
};

export default CarsPage;