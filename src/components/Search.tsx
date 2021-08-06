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
            <Box textAlign="center" mr={{base:"1rem", md:"1rem"}} ml={{base:"1rem", md:"1rem"}}>
                {/* <Text>{title}</Text> */}
                <Box  bg="#fff" maxWidth="700px" m="0 auto" boxShadow="0 1rem 3rem -1rem #484848"  pt="0.7rem" height="80px" border="0rem solid #000" borderRadius="5rem">
                <form onSubmit={submitHandler} >
<Input type="text" placeholder="Enter Region" mb="2rem" width="80%" height="50px" border="none"   _focus={{
                      outline: "none",
                    }} onChange={changeHandler} value={city} />
<IconButton  size="lg"
aria-label="Search database"
                    border="0px" 
                    borderRadius="2rem"                   
                    color="white"
                    icon={<SearchIcon/>}
                    bg="#f3f"
                    ml="2rem"
                    _
                    _hover={{ bg: "#f3f" }}
                    _focus={{
                      outline: "none",
                    }} type="submit"/>
                </form>
                </Box>
            </Box>
        </Box>
    )
}
export default Search
