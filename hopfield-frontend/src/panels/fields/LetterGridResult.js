import React, { useState } from 'react';
import "./LetterGrid.css"

const LetterGridResult = ({ letterList, width }) => {
  
    const [cellSize, setCellSize] = useState(width / 10);

    const renderCell = (value) => {
        const cellClass = value === 1 ? 'LetterGrid-cell black' : 'LetterGrid-cell white';
        return (
            <div className={cellClass} style={{ width: `${cellSize}px`, height: `${cellSize}px`}}>
            </div>
        );
    };

    const gridStyle = {
        gridTemplateColumns: `repeat(${width / cellSize}, 1fr)`,
        gridTemplateRows: `repeat(${width / cellSize}, 1fr)`,
        width: `${width}px`,
        height: `${width}px`,
    };

    return (
        <div className="LetterGrid" style={gridStyle}>
        {letterList.map((value, index) => (
            <div key={index}>
                {renderCell(value)}
            </div>
        ))}
        </div>
    );
};

export default LetterGridResult;