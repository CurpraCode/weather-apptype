import {FC} from 'react';
import Header from "../components/Header";
import {Box, Flex, Text, Button, Image} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import  weather from "../assets/weather.svg";

const LandingPage: FC = () => {
    return (
        <Box>
            <Header/>
            <Flex mt="5rem" flexDir={{ base: 'column', md: 'row' }} maxWidth="990px" m="0 auto" justifyContent={{ base: 'space-around', md: 'space-between' }} alignItems={{ base: 'flex-start', md: 'center' }}>
            <Box  mr={{base:"1rem", md:"1rem"}} ml={{base:"1rem", md:"1rem"}} mb="2rem">
                <Text as="p" opacity="0.8" mb={{base:"0.7rem",md:"2rem"}} mt="2.7rem">OPEN SEASON</Text>
                <Text as="h1" fontSize={{base:"3.4rem",md:"4rem"}} fontWeight="bold" mb={{base:"0.7rem",md:"2rem"}}>Weather <br/>
                Forecast</Text>
                <Link to="/weather">
                <Button bg="#f3f" color="#fff"  padding="1.2rem;" boxShadow="0 1rem 3rem -1rem #484848" borderRadius="2.5rem" mt={{base:"1.5rem",md:"3rem"}} _hover={{ bg: "#f3f" }}>Discover</Button>
        </Link>
           
            </Box>
   
   <Image width={{ base: '80%', md: '50%' }} mt={{ base: '3rem', md: '' }} src={weather} alt="weatherpicture"/>
            </Flex>
        </Box>
    )
}

export default LandingPage
