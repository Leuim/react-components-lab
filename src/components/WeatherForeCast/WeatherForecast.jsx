import './WeatherForecast.css'
const WeatherForeCast = ({forecast}) => {
    return (
        <div className="weather">
            <h2>{forecast.day}</h2>
            <img src={forecast.img} alt={forecast.imgAlt} />
            <p><span>conditions: </span>{forecast.conditions}</p>
            <p><span>time: </span>{forecast.time}</p>
        </div>
    )
}

export default WeatherForeCast