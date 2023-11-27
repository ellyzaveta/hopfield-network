import React from 'react';
import LetterGridResult from '../panels/fields/LetterGridResult';
import "./Grid.css"

const Grid = ({ data }) => {
    return (
        <div className="Grid">
        {data.map((letter, index) => (
            <div key={index}>
                <LetterGridResult letterList={letter} width={60}></LetterGridResult>
            </div>
        ))}
        </div>
    );
};

export default Grid;