import { FC } from 'react';
import { useSelector, useDispatch} from "react-redux";
import {RootState} from "../store";
import Search from "../components/Search";
import Alerted from "../components/Alert";
import Weather from "../components/Weather";
import Spinner from "../components/Spinner";
import Header from "../components/Header";
import {Box} from "@chakra-ui/react";
import {setAlert} from "../store/actions/alertActions";
import { setError } from '../store/actions/weatherActions';

const WeatherPage: FC = () => {
        const dispatch = useDispatch()
    const weatherData= useSelector((state: RootState)=> state.weather.data)
    const loading = useSelector((state:RootState)=> state.weather.loading)
    const error = useSelector((state: RootState)=> state.weather.error)
    const alertMsg = useSelector((state: RootState)=>state.alert.message)
    return (
        <Box bg="transparent" height="100vh">
                 <Header/>
            <Box mt="6rem">
      <Search title="Enter Region name and press search button" />
      {loading ? <Spinner /> : weatherData && <Weather data={weatherData} />}

      {alertMsg && <Alerted message={alertMsg} onClose={() => dispatch(setAlert(''))} />}
      {error && <Alerted message={error} onClose={() => dispatch(setError())}/>}
    </Box>
        </Box>
    )
}
export default WeatherPage;