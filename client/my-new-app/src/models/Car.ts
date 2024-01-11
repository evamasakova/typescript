export const getCars = () => {

}
export const getCar = () => {
    
}
export const createCar = () => {
    
}
export const updateCar = () => {
    
}
export const deleteCar = () => {
    
}

const createCarPayload = (res: Response, data: any) : CarPayload => {
    return {
        msg: data.msg,
        data: data.payload,
        status: res.status,
    }
}
const createCarsPayload = (res: Response, data: any) : CarsPayload => {
    return {
        msg: data.msg,
        data: data.payload,
        status: res.status,
    }   
}

export type CarPayload ={
    msg?: string;
    status: number;
    data: CarType;
}

export type CarsPayload ={
    msg?: string;
    status: number;
    data: CarType[];
}


export type CarType ={
    _id: string;
    name: string;
    color: string;
    horsepower: number;
}