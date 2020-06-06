import React from 'react';
import './styles/InputRange.css';

const InputRange = ({ label, min, max, value, isDegree, setValue }) => {
    return (
        <form className="InputRange">
            <label>{label}</label>
            <input type="range" min={min} max={max} value={value} onChange={(e) => setValue(e.target.value)} />
            <span className="badge teal white-text">{value}{isDegree ? "deg" : "px"}</span>
        </form>
    );
}

export default InputRange;