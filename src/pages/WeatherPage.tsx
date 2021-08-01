import { FC } from 'react';
import { useSelector} from "react-redux";
import {RootState} from "../store";
import Search from "../components/Search";
import Alert from "../components/Alert";
import Weather from "../components/Weather";
import {Spinner} from "@chakra-ui/react";
import Header from "../components/Header";
import {Box} from "@chakra-ui/react";
// import {setAlert} from "../store/actions/alertActions";
// import { setError } from '../store/actions/weatherActions';

const WeatherPage: FC = () => {
        // const dispatch = useDispatch()
    const weatherData= useSelector((state: RootState)=> state.weather.data)
    const loading = useSelector((state:RootState)=> state.weather.loading)
    const error = useSelector((state: RootState)=> state.weather.error)
    const alertMsg = useSelector((state: RootState)=>state.alert.message)
    return (
        <Box>
                 <Header/>
            <Box mt="3rem">
      <Search title="Enter Region name and press search button" />
      {loading ? <Spinner color="red.500" /> : weatherData && <Weather data={weatherData} />}

      {alertMsg && <Alert message={alertMsg} />}
      {error && <Alert message={error}  />}
    </Box>
        </Box>
    )
}
export default WeatherPage;