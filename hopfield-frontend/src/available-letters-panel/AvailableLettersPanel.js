import React, { useEffect, useState } from 'react';
import Grid from './Grid';
import axios from 'axios';

const AvailableLettersPanel = () => {

    const [data, setData] = useState([]);
    
    useEffect(() => {
        axios.get(`http://localhost:8080/hopfield-network/data`)
            .then((res) => {
                setData(res.data);
    });      
    }, [data]);

    return (
        <div className='panel' style={{ width: `305px`}}>
            <p className='text'>Available letters to recognize</p>
            <Grid data={data}></Grid>
        </div>
    ) 
}

export default AvailableLettersPanel;