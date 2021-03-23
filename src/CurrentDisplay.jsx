import React from 'react';
import styled from 'styled-components';

const CurrentDisplay = ({current, location, setDegreeType, setLocation}) => {
    if(!current || !location) {
        return <div>Retrieving weather info...</div>
    }
    return <CurrentDisplayContainer>
        <LocationHeading>Current weather in {location.name}</LocationHeading>
        <ImageCurrentTempContainer>
            <img src={current.imageUrl} style={{display: 'inline-block'}} alt="Weather Image"/>
            <CurrentTempFont>
                {current.temperature}&deg;<DegreeSelect name="degreeType" onChange={e => setDegreeType(e.target.value)}><option value='C'>C</option><option value='F'>F</option></DegreeSelect>
            </CurrentTempFont>
        </ImageCurrentTempContainer>
        <CurrentTempFont>{current.skytext}</CurrentTempFont>
    </CurrentDisplayContainer>
}

const CurrentDisplayContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid;
    border-radius: 5px;
    max-width: 500px;
`;

const LocationHeading = styled.h1`
    text-align: center;
    font-family: Arial;
`;

const ImageCurrentTempContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-self: center;
`;

const CurrentTempFont = styled.h2`
    font-size: 24px;
    padding-left: 12px;
    align-self: center;
    font-family: Arial;
`;

const DegreeSelect = styled.select`
    font-size: 24px;
    border: none;
`;
export default CurrentDisplay;