import {FC, useState, FormEvent} from 'react';
import {useDispatch} from "react-redux";
import {setAlert} from "../store/actions/alertActions";
import { getWeather, setLoading } from '../store/actions/weatherActions';
import {Input, Text, IconButton, Box} from "@chakra-ui/react";
import {SearchIcon} from "@chakra-ui/icons";
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
        <Box>
            <Box textAlign="center">
                <Text>{title}</Text>
                <form onSubmit={submitHandler}>
<Input type="text" placeholder="Enter Region" mb="2rem" width="40%"  _focus={{
                      outline: "none",
                    }} onChange={changeHandler} value={city} />
<IconButton  size="md"
aria-label="Search database"
                    border="0px"                    
                    color="white"
                    icon={<SearchIcon/>}
                    bg="#f3f"
                    _hover={{ bg: "#f3f" }}
                    _focus={{
                      outline: "none",
                    }} type="submit"/>
                </form>
            </Box>
        </Box>
    )
}
export default Search
