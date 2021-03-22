import React from 'react';
import weather from 'weather-js';

const App = () => {
    weather.find({search: 'Summer Hill, Australia', degreeType: 'C'}, function(err, result) {
        if(err) console.log(err);

        console.log(JSON.stringify(result, null, 2));
    });
   return <h1>Hello World.</h1>;
}

export default App