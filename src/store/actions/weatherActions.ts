import {ThunkAction} from "redux-thunk";
import {RootState} from "..";
import {WeatherAction, WeatherData, WeatherError, GET_WEATHER, SET_LOADING, SET_ERROR} from "../types";
import axios from "axios";

export const getWeather = (city:string): ThunkAction <void, RootState, null, WeatherAction> =>{
return async dispatch =>{
    try{
        const res = await axios(`api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${process.env.REACT_APP_API_KEY}`);
        if(!res.data){
            const resData: WeatherError = await res.data;
            // console.log(resData);
            throw new Error(resData.message);
        }
        const resData:WeatherData =await res.data;
        dispatch({
            type: GET_WEATHER,
            payload: resData
        });
    } catch(err){
        dispatch(
            {
                type: SET_ERROR,
                payload: err.message
            }
        )
    }
}
}

export const setLoading = (): WeatherAction => {
    return{
        type: SET_LOADING,
        payload: ""
    }
}

export const setError = (): WeatherAction => {
    return{
        type: SET_ERROR,
        payload: ""
    }
}

