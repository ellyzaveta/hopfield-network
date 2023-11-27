import React from 'react';
import LetterGridResult from './fields/LetterGridResult';
import "./Panel.css"

const ResultPanel = ({data}) => {
    
    return (
        <div className='panel'>
            <p className='text'>Result</p>
            <LetterGridResult letterList={data} width={400}></LetterGridResult>
        </div>
    )

}

export default ResultPanel;