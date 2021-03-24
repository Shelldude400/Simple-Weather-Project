import React, {useState, useEffect} from 'react';
import weather from 'weather-js';
import CurrentDisplay from './CurrentDisplay.jsx'

const App = () => {
    
    const [location, setLocation] = useState("Sydney, Australia");
    const [degreeType, setDegreeType ] = useState('C');
    const [weatherResults, setWeatherResults] = useState([[]]);
    const [failedSearch, setFailedSearch] = useState('');

    useEffect(() => {
        weather.find({search: location, degreeType: degreeType}, (err, result) => {
            if(err) console.log(err);
            // console.log(JSON.stringify(result, null, 2));
            if(result.length !== 0) {
                setFailedSearch('');
                setWeatherResults([result]);
            } else {
                setFailedSearch(`Failed to find location ${location}, please try a different location.`);
            }
        });
    }, [location, degreeType])

    
    const closestResult = weatherResults[0]; //Weather.js returns multiple results, the closest result is stored in the first element of the array, which is stored in its own array
    return <CurrentDisplay failedSearch={failedSearch} closestResult={closestResult} setDegreeType={setDegreeType} setLocation={setLocation}/>;
}

export default App