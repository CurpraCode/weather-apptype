import {FC} from 'react';
import {WeatherData} from "../store/types";
import {Box , Flex, Image, Text} from "@chakra-ui/react";

interface WeatherProps{
    data: WeatherData;
}

const Weather: FC<WeatherProps> = ({data}) => {
    const fahrenheit = (data.main.temp * 1.8 - 459.67).toFixed(2);
    const celsius = (data.main.temp - 273.15).toFixed(2);
    return (
        <Box>
            <div className="container">
        <Text textAlign="center" >{data.name} - {data.sys.country}</Text>
        <div className="level" style={{alignItems: 'flex-start'}}>
          <div className="level-item has-text-centered">
            <Box textAlign="center">
              <p className="heading">{data.weather[0].description}</p>
              <Image  src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`} alt=""/>
            </Box>
          </div>
          <Flex justifyContent="center" alignItems="center" > 
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">temp</p>
              <div className="title">
                <p className="mb-2">{data.main.temp}K</p>
                <p className="mb-2">{fahrenheit}<sup>&#8457;</sup></p>
                <p>{celsius}<sup>&#8451;</sup></p>
              </div>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">humidity</p>
              <p className="title">{data.main.humidity}</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">pressure</p>
              <p className="title">{data.main.pressure}</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">wind</p>
              <p className="title">{data.wind.speed} m/s</p>
            </div>
          </div>
          </Flex>
        </div>
      </div>
        </Box>
    )
}

export default Weather
