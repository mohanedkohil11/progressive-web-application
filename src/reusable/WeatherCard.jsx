import React from 'react'
import Moment from 'react-moment';

function WeatherCard({ temp, title, date, wind }) {
    return (
        <div className="weather-card">
            <div className="weather-card__title">{title}</div>
            <div className="weather-card__temp">

                {temp}
            </div>
            <div className="weather-card__footer">
                <div className="weather-card__location"> Cairo - Egypt</div>
                <div className="weather-card__date"><Moment format="YYYY/MM/DD">{date}</Moment></div>
            </div>
        </div>
    )
}

export default WeatherCard
