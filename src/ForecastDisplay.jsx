import React from 'react';
import styled from 'styled-components';

const ForecastDisplay = ({closestResult}) => {
    const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth; //Cross broswer compatible code
    console.log(screenWidth, 'width')
    const fiveDayForecast = closestResult[0]?.forecast;
    console.log(closestResult, 'closest')
    console.log(fiveDayForecast, '5day')
    return <ForecastContainer>
        {fiveDayForecast?.map((forecast, index) => <SingleDayForecast key={index} forecast={forecast} singleWidth={screenWidth}/>)}
    </ForecastContainer>;
}

const ForecastContainer = styled.div`
    display: flex;
    padding: 20px 0px;
`;

const SingleDayForecast = ({forecast, singleWidth}) => {
    return <SingleDayForecastContainer width={singleWidth}>

    </SingleDayForecastContainer>
}


const SingleDayForecastContainer = styled.div`
    display: flex;
    flex-align: column;
    border: 1px solid;
    border-radius: 5px;
    width: ${props => props.width}px;
    height: 200px;
    
`;

export default ForecastDisplay;