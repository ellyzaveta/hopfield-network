import React from 'react';
import "./LetterGrid.css"

const LetterGrid = ({ letterList }) => {
  const renderCell = (value) => {
    const cellClass = value === 1 ? 'LetterGrid-cell black' : 'LetterGrid-cell white';
    return (
      <div className={cellClass}>
      </div>
    );
  };

  return (
    <div className="LetterGrid">
      {letterList.map((value, index) => (
        <div key={index}>
          {renderCell(value)}
        </div>
      ))}
    </div>
  );
};

export default LetterGrid;