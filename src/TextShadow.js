import React, { useState } from 'react';
import InputRange from './InputRange';
import TextPreview from './TextPreview';
import './styles/TextShadow.css';

const TextShadow = () => {
    const [horizontalOffset, setHorizontalOffset] = useState(0);
    const [verticalOffset, setVerticalOffset] = useState(0);
    const [blur, setBlur] = useState(0);
    const [shadowColor, setShadowColor] = useState("grey");
    const [textColor, setTextColor] = useState("black");

    const style = {
        textShadow: `${horizontalOffset}px ${verticalOffset}px ${blur}px ${shadowColor}`,
        color: `${textColor} `
    };

    return (
        <div className="TextShadow">
            <div className="TextShadow-controls">
                <h3>Text Shadow Generator</h3>
                <InputRange label="Shift Right" min={-50} max={50} value={horizontalOffset} setValue={setHorizontalOffset} />
                <InputRange label="Shift Down" min={-50} max={50} value={verticalOffset} setValue={setVerticalOffset}
                />
                <InputRange label="Blur" min={0} max={20} value={blur} setValue={setBlur} />
                <div className="row">
                    <label htmlFor="color">Shadow Color </label>
                    <input type="color" id="color" value={shadowColor} onChange={(e) => setShadowColor(e.target.value)} />
                </div>
                <div className="row">
                    <label htmlFor="text-color">Text Color </label>
                    <input type="color" id="text-color" value={textColor} onChange={(e) => setTextColor(e.target.value)} />
                </div>
                <div className="center teal white-text">
                    {style.textShadow}
                </div>
            </div>
            <TextPreview style={style} />
        </div>
    );
}

export default TextShadow;