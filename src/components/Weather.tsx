import {FC} from 'react';
import {WeatherData} from "../store/types";
import {Box , Flex, Image, Text} from "@chakra-ui/react";
import {MotionBox} from "../components/animation/FramerElement";

interface WeatherProps{
    data: WeatherData;
}

const Weather: FC<WeatherProps> = ({data}) => {
    const fahrenheit = (data.main.temp * 1.8 - 459.67).toFixed(2);
    const celsius = (data.main.temp - 273.15).toFixed(2);
    return (
      <Box maxWidth="600px" m="0 auto" mt="4rem">
        <Box  mr={{base:"1rem", md:"1rem"}} ml={{base:"1rem", md:"1rem"}} background="rgba( 255, 255, 255, 0.25 );"
boxShadow="0 8px 32px 0 rgba( 31, 38, 135, 0.37 );"
backdropFilter=" blur( 10.0px )"
borderRadius="20px;"
border=" 1px solid rgba( 255, 255, 255, 0.18 )"  mb="2rem" p="1rem 0rem" color="#fff">
        <Text textAlign="center" as="h1" fontWeight="bold" mb="1rem" >{data.name} - {data.sys.country}</Text>
        <div>
          <Box>
          <MotionBox  initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2, duration: 1.2 }}>
<Text textAlign="center">{data.weather[0].description}</Text>
              <Box maxWidth="50px" m="0 auto">
              <Image src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`} alt=""/>
              </Box>
           </MotionBox>
                                    
          </Box>
          <Flex flexDir={{base:"column", md:"row"}} justifyContent="center" alignItems="center" > 
          <MotionBox  initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2, duration: 1.4 }}>
<Box textAlign={{base:"center", md:"justify"}}>
              <Text  as="h2" fontWeight="bold" mb="0.5rem">Temp</Text>
              <Flex  justifyContent="space-between" align-items="center" >
                <Text mr="1rem">{data.main.temp}K</Text>
                <Text mr="1rem">{fahrenheit}<sup>&#8457;</sup></Text>
                <Text>{celsius}<sup>&#8451;</sup></Text>
              </Flex>
          </Box>
           </MotionBox>
          
          <Box ml={{base:"0rem",md:"3rem"}} mt={{base:"1.3rem",md:"0rem"}} textAlign={{base:"center", md:"justify"}}>
          <MotionBox  initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2, duration: 1.6 }}>
<Text  as="h2" fontWeight="bold" mb="0.5rem" >Humidity</Text>
              <Text >{data.main.humidity}</Text>
           </MotionBox>
                        
          </Box>
          <Box ml={{base:"0rem",md:"3rem"}} mt={{base:"1.3rem",md:"0rem"}} textAlign={{base:"center", md:"justify"}}>
            <MotionBox  initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2, duration: 1.8 }}>
            <Text as="h2" fontWeight="bold" mb="0.5rem">Pressure</Text>
              <Text>{data.main.pressure}</Text>
            </MotionBox>
          </Box>
          <Box ml={{base:"0rem",md:"3rem"}} mt={{base:"1.3rem",md:"0rem"}} textAlign={{base:"center", md:"justify"}}>
           <MotionBox  initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2, duration: 2 }}>
<Text  as="h2" fontWeight="bold" mb="0.5rem">Wind</Text>
              <Text>{data.wind.speed} m/s</Text>
           </MotionBox>
              
           
          </Box>
          </Flex>
        </div>
        </Box>
        </Box>
    )
}

export default Weather
