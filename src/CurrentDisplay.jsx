import React, {useState} from 'react';
import styled from 'styled-components';

const CurrentDisplay = ({failedSearch, closestResult,setDegreeType, setLocation}) => {
    const [enteringLocation, setEnteringLocation] = useState(false);

    if(failedSearch) { //If the search failed, we want to bail before any attempts to use info from the search
        return <FailedSearch msg={failedSearch} setEnteringLocation={setEnteringLocation} setLocation={setLocation}/>
    }

    const current = closestResult[0]?.current;
    const location = closestResult[0]?.location;
    if(!current || !location) {
        return <div>Retrieving weather info...</div>
    }

    return <CurrentDisplayContainer>
        {enteringLocation? <EnterLocationField setEnteringLocation={setEnteringLocation} setLocation={setLocation}/> : <><LocationHeading>Current weather in {location.name}</LocationHeading>
        <LocationButton onClick={() => setEnteringLocation(true)}>Change Location</LocationButton></>}
        <ImageCurrentTempContainer>
            <img src={current.imageUrl} style={{display: 'inline-block'}} alt="Weather Image"/>
            <CurrentTempFont>
                {current.temperature}&deg;<DegreeSelect name="degreeType" onChange={e => setDegreeType(e.target.value)}>
                        <option value='C'>C</option>
                        <option value='F'>F</option>
                    </DegreeSelect>
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
    justify-content: center;
`;

const LocationHeading = styled.h1`
    text-align: center;
    font-family: Arial;
`;

const LocationButton = styled.a`
    font-size: 12px;
    color: blue;
    text-align: center;
    font-family: Arial;
    cursor: pointer;
`;

const FailedSearch = ({msg, setEnteringLocation, setLocation}) => {
    return <FailedSearchContainer>
        <LocationHeading>{msg}</LocationHeading>
        <EnterLocationField setEnteringLocation={setEnteringLocation} setLocation={setLocation}/>
    </FailedSearchContainer>
}

const EnterLocationField = ({setEnteringLocation, setLocation}) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        setLocation(formData.get("EnteringLocationField"));
        setEnteringLocation(false);
    }
    return <form onSubmit={handleSubmit} style={{alignSelf: 'center'}}>
        <EnterLocationInput type="text" name="EnteringLocationField" placeholder="Type location"></EnterLocationInput>
    </form>
}

const FailedSearchContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

const EnterLocationInput = styled.input`
    font-size: 24px;
    font-family: Arial;
    margin-top: 24px;
    text-align: center;
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