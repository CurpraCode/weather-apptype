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
            <Box>
                <Text as="p" opacity="0.8" mb="2rem" mt="2rem">OPEN SEASON</Text>
                <Text as="h1" fontSize="4rem" fontWeight="bold" mb="2rem">Weather <br/>
                Forecast</Text>
                <Link to="/weather">
                <Button bg="#f3f" color="#fff"  padding="1.2rem;" boxShadow="0px 5px 5px rgb(75 93 104 / 10%);" borderRadius="2.5rem" mt="3rem" _hover={{ bg: "#f3f" }}>Discover</Button>
        </Link>
           
            </Box>
   
   <Image width={{ base: '80%', md: '50%' }} mt={{ base: '6rem', md: '' }} src={weather} alt="weatherpicture"/>
            </Flex>
        </Box>
    )
}

export default LandingPage
