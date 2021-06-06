import React, { Fragment, useEffect, useState } from 'react'
import requester from "../../api/requester";
import Spinner from '../../layouts/Spinner';
import WeatherCard from '../../reusable/WeatherCard';

function Analysis() {
    //This component is to handle the Analysis tab at the dashboard page

    //My authKey to make request at Accuweather.com
    const authKey = "oaliwBEFXQ2i76paMx8D7w1cvmOPgjVG"

    //City desire to get its weather
    const city = "cairo"

    //save the response with city key to use it later to get the forcast of the day
    const [cityKey, setCityKey] = useState();
    //save the response from daily forcast api
    const [dailyForecasts, setDailyForecasts] = useState();

    //handle showing spinner while data is loading 
    const [dataIsLoading, setDataIsLoading] = useState(true);

    //On first mount call the API that get city key
    useEffect(() => {
        getCityKey()
    }, [])

    //Here check if the city key is returned from the API call then call the next api with the city key we got
    useEffect(() => {
        if (cityKey) {
            getDailyForcast(cityKey)
        }
    }, [cityKey])

    //This function is for calling the API that getting the key for a specific city 
    const getCityKey = () => {
        requester.get(`/locations/v1/cities/search?apikey=${authKey}&q=${city}`).then((response) => {
            if (response.data) {
                //if the API call success and respond with data then set the city key state with the key
                setCityKey(response.data[0].Key)
            }
        })
    }

    //This function is to call API with the city key and get the daily forcast for the city
    const getDailyForcast = (key) => {
        requester.get(`/forecasts/v1//daily/1day/locationKey?apikey=${authKey}&locationKey=${key}&details=true`).then((response) => {
            if (response.data) {
                //if the API call success and respond with the data then set the dailyForcasts state with the forcast info
                setDailyForecasts(response.data.DailyForecasts[0])
                //Stop the timer by getting the response from the API and give it plus 1s to make user feel the data fetching
                setTimeout(() => {
                    setDataIsLoading(false)
                }, 1000)
            }
        })
    }


    return (
        <Fragment>
            {!dataIsLoading ? (
                <div className="analysis">
                    <WeatherCard
                        temp={dailyForecasts && dailyForecasts.Temperature.Minimum.Value + "°"}
                        title="Min temperature"
                        date={dailyForecasts && dailyForecasts.Date}
                    />
                    <WeatherCard
                        temp={dailyForecasts && dailyForecasts.Temperature.Maximum.Value + "°"}
                        title="Max temperature"
                        date={dailyForecasts && dailyForecasts.Date}
                    />
                    <WeatherCard
                        temp={dailyForecasts && dailyForecasts.Day.Wind.Direction.Degrees + "°"}
                        title="Wind direction"
                        date={dailyForecasts && dailyForecasts.Date}
                        wind={true}
                    />
                    <WeatherCard
                        temp={dailyForecasts && dailyForecasts.Day.Wind.Speed.Value + " mi/h"}
                        title="Wind speed"
                        date={dailyForecasts && dailyForecasts.Date}
                        wind={true}
                    />
                </div>
            ) : <Spinner />}
        </Fragment>
    )
}

export default Analysis
