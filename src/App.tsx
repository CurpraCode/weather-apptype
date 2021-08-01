import { FC } from 'react';
import WeatherPage from "./pages/WeatherPage";
import {ChakraProvider} from "@chakra-ui/react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import LandingPage from "./pages/LandingPage";
const App: FC = () => {
      
    return (
        <ChakraProvider>
        <Router>
        <Switch>
        <Route exact path ="/">
        <LandingPage/>
        </Route>
        <Route exact path ="/weather">
        <WeatherPage/> 
        </Route>
        </Switch>
        </Router> 
        </ChakraProvider>
    )
}
export default App;