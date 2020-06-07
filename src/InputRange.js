import React from 'react';
import './styles/InputRange.css';

const InputRange = ({ label, min, max, value, isDegree, scaleUnit, setValue }) => {
    let unit;
    if (isDegree) {
        unit = "deg";
    } else if (scaleUnit) {
        unit = "X";
    } else {
        unit = "px";
    }
    return (
        <form className="InputRange">
            <label>{label}</label>
            <input type="range" min={min} max={max} value={value} onChange={(e) => setValue(e.target.value)} />
            <span className="badge teal white-text">{value}{unit}</span>
        </form>
    );
}

export default InputRange;