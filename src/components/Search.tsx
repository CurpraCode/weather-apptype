import {FC, useState, FormEvent} from 'react';
import {useDispatch} from "react-redux";
import {setAlert} from "../store/actions/alertActions";
import { getWeather, setLoading } from '../store/actions/weatherActions';
import {Input, Text, Button} from "@chakra-ui/react";
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
                <Text>{title}</Text>
                <form onSubmit={submitHandler}>
<Input type="text" placeholder="Enter City" mb="2rem"   _focus={{
                      outline: "none",
                    }} onChange={changeHandler} value={city} />
<Button  size="md"
                    mt="0.5rem"
                    height="48px"
                    width="100%"
                    border="0px"
                    color="white"
                    bg="#fde8f4"
                    _hover={{ bg: "rgba(253, 232, 244)" }}
                    _focus={{
                      outline: "none",
                    }} type="submit">Search</Button>
                </form>
            </div>
        </div>
    )
}

export default Search
