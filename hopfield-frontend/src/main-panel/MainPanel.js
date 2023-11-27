import React, { useEffect, useState } from 'react';
import InputPanel from '../panels/InputPanel';
import ResultPanel from '../panels/ResultPanel';
import AvailableLettersPanel from '../available-letters-panel/AvailableLettersPanel';
import Button from '../button/Button';
import axios from 'axios';

import './MainPanel.css'


const defaultList = [
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1
];

const MainPanel = () => {

    const [data, setData] = useState(defaultList);
    const [result, setResult] = useState(defaultList);
    const [isError, setIsError] = useState(false);

    const handleAddButtonClick = (e) => {
        e.preventDefault();

        console.log(data);

        try {
            axios.put(`http://localhost:8080/hopfield-network/add?letterToTrain=${data}`);
        } catch (error) {
            console.error('Error sending data:', error);
        }

        setData(defaultList);

    };

    const handleRecognizeButtonClick = async (e) => {

        e.preventDefault();

		try {
            const response = await axios.get(`http://localhost:8080/hopfield-network/recognize?letterToRecognize=${data}`);
            if (response.status === 200) {
                setResult(response.data);
                setIsError(false);
            }
        } catch (error) {
            setIsError(true);
            console.error("Error fetching data:", error);
        }
	}

    const handleClearButtonClick = (e) => {
        e.preventDefault();

        setData(defaultList);
        setResult(defaultList);
        setIsError(false);
    };


    const updateData = (newData) => {
        setData(newData);
    };

    return (
        <div className='content'>
            <div className='panel'>
                <InputPanel data={data} updateData={updateData}></InputPanel>
                <div className='buttons'>
                    <Button text={"Add"} onClick={handleAddButtonClick}></Button>
                    <Button text={"Recognize"} onClick={handleRecognizeButtonClick}></Button>
                    {isError ? (<p className='error-text'>Letter is not recognized</p>) : (null)}
                </div>
            </div>
            <div className='panel'>
                <ResultPanel data={result}></ResultPanel>
                <div className='buttons'>
                    <Button text={"Clear"} onClick={handleClearButtonClick}></Button>
                </div>
            </div>
            <AvailableLettersPanel></AvailableLettersPanel>
      </div>
    )
}

export default MainPanel;