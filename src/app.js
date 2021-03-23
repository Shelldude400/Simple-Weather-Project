import React, {useState, useEffect} from 'react';
import weather from 'weather-js';
import CurrentDisplay from './CurrentDisplay.jsx'

const App = () => {
    
    const [location, setLocation] = useState("Sydney, Australia");
    const [degreeType, setDegreeType ] = useState('C');
    const [weatherResults, setWeatherResults] = useState([[]]);

    useEffect(() => {
        weather.find({search: location, degreeType: degreeType}, function(err, result) {
            if(err) console.log(err);
            // console.log(JSON.stringify(result, null, 2));
            console.log(result[0].location)
            setWeatherResults([result]);
        });
    }, [location, degreeType])

    const finalResult = weatherResults[0];
    console.log(finalResult);
    return <CurrentDisplay location={finalResult[0]?.location} current={finalResult[0]?.current} setDegreeType={setDegreeType} setLocation={setLocation}/>;
}

export default App