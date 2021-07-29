import {FC, useState, FormEvent} from 'react';
import {useDispatch} from "react-redux";
import {setAlert} from "../store/actions/alertActions";
import { getWeather, setLoading } from '../store/actions/weatherActions';
interface SearchProps{
    title: string;
}
const Search: FC<SearchProps> = ({title}) => {
    const dispatch = useDispatch();
    const [city, setCity]= useState("");
    const changeHandler = (e: FormEvent<HTMLInputElement>) =>{
        setCity(e.currentTarget.value);
    }
     const submitHandler= (e:FormEvent<HTMLFormElement>)=>{
         e.preventDefault();
         
         if(city.trim()=== ""){
             return dispatch (setAlert("City is Required"));
         }
         dispatch(setLoading());
         dispatch(getWeather(city));
         setCity("");
     }
    return (
        <div>
            <div>
                <h1>{title}</h1>
                <form onSubmit={submitHandler}>
<input type="text" placeholder="Enter City" onChange={changeHandler} value={city} />
<button type="submit">Search</button>
                </form>
            </div>
        </div>
    )
}

export default Search
