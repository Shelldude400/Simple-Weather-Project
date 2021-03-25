import React from 'react';
import styled from 'styled-components';
import Breakpoints from './Breakpoints.js';

const ForecastDisplay = ({closestResult}) => {
    const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth; //Cross broswer compatible code
    const fiveDayForecast = closestResult[0]?.forecast;
    const degreeType = closestResult[0]?.location.degreetype;
    
    return <ForecastContainer>
        {fiveDayForecast?.map(forecast => <SingleDayForecast key={forecast.shortday} forecast={forecast} width={screenWidth} degreeType={degreeType}/>)}
    </ForecastContainer>;
}

const ForecastContainer = styled.div`
    display: flex;
    padding: 20px 0px;
`;

const SingleDayForecast = ({forecast, width, degreeType}) => {
    return <SingleDayForecastContainer width={width}>
        <SingleDayHeading>{forecast.shortday}</SingleDayHeading>
        <SingleDayText>{forecast.high}&deg;/{forecast.low}&deg;{degreeType}</SingleDayText>
        <SingleDayText>{forecast.skytextday}</SingleDayText>
    </SingleDayForecastContainer>
}


const SingleDayForecastContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid;
    border-radius: 5px;
    width: ${props => props.width}px;
    align-items: center;
    
`;

const SingleDayHeading = styled.div`
    font-size: 16px;
    font-family: Arial;
    margin: 12px 0px;
    text-align: center;
    font-weight: 700;
    @media(min-width: ${Breakpoints.medium}) {
        font-size: 24px;
    }
`;

const SingleDayText = styled.div`
    font-size: 16px;
    font-family: Arial;
    text-align: center;
    margin: 12px 0px;
    @media(min-width: ${Breakpoints.medium}) {
        font-size: 24px;
    }
`;

export default ForecastDisplay;