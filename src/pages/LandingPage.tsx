import {FC} from 'react';
import Header from "../components/Header";
import {Box, Flex, Text, Button, Image} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import  weather from "../assets/weather.svg";

const LandingPage: FC = () => {
    return (
        <Box>
            <Header/>
            <Flex mt="2rem" flexDir={{ base: 'column', md: 'row' }} maxWidth="990px" m="0 auto" justifyContent={{ base: 'space-around', md: 'space-between' }} alignItems={{ base: 'flex-start', md: 'center' }}>
            <Box>
                <Text as="p" opacity="0.8" mb="2rem">OPEN SEASON</Text>
                <Text as="h1" fontSize="4rem" fontWeight="bold" mb="2rem">Weather <br/>
                Forecast</Text>
                <Link to="/weather">
                <Button bg="#f3f" color="#fff" borderRadius="2.5rem" mt="3rem">Discover</Button>
        </Link>
           
            </Box>
   
   <Image width={{ base: '80%', md: '50%' }} mt={{ base: '6rem', md: '' }} src={weather} alt="weatherpicture"/>
            </Flex>
        </Box>
    )
}

export default LandingPage
