import React, { useState } from 'react';
import "./LetterGrid.css"

const LetterGridInput = ({ data, updateData }) => {

    const toggleCellColor = (index) => {
        const newGridData = [...data];
        newGridData[index] = newGridData[index] === 1 ? -1 : 1;
        updateData(newGridData);
    };

    const renderCell = (value, index) => {
        const cellClass = value === 1 ? 'LetterGrid-cell black' : 'LetterGrid-cell white';

        return (
        <div
            key={index}
            className={cellClass}
            onClick={() => toggleCellColor(index)} 
        ></div>
        );
    };

    return (
        <div className="LetterGrid">
            {data.map((value, index) => renderCell(value, index))}
        </div>
    );
};

export default LetterGridInput;