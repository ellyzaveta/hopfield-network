import React from 'react';
import LetterGridInput from './fields/LetterGridInput';
import "./Panel.css"

const InputPanel = ({data, updateData}) => {

    return (
        <div className='panel'>
            <p className='text'>Input letter</p>
            <LetterGridInput data={data} updateData={updateData}></LetterGridInput>
        </div>
    )    
}

export default InputPanel;