import React, { useState } from 'react';
import BoxPreview from './BoxPreview';
import InputRange from './InputRange';
import './styles/BoxShadow.css';

const BoxShadow = () => {
    const [horizontalOffset, setHorizontalOffset] = useState(0);
    const [verticalOffset, setVerticalOffset] = useState(0);
    const [blur, setBlur] = useState(0);
    const [spread, setSpread] = useState(0);
    const [shadowColor, setShadowColor] = useState("grey");
    const [boxColor, setBoxColor] = useState("tomato");
    const [isInset, setIsInset] = useState(false);

    const style = {
        boxShadow: `${isInset ? "inset" : ""} ${horizontalOffset}px ${verticalOffset}px ${blur}px ${spread}px ${shadowColor}`,
        backgroundColor: `${boxColor}`
    };

    return (
        <div className="BoxShadow">
            <div className="BoxShadow-controls">
                <h3>Box Shadow Generator</h3>
                <InputRange label="Shift Right" min={-100} max={100} value={horizontalOffset} setValue={setHorizontalOffset} />
                <InputRange label="Shift Down" min={-100} max={100} value={verticalOffset} setValue={setVerticalOffset}
                />
                <InputRange label="Blur" min={0} max={50} value={blur} setValue={setBlur} />
                <InputRange label="Spread" min={-50} max={50} value={spread} setValue={setSpread} />
                <div className="row">
                    <label htmlFor="color">Shadow Color </label>
                    <input type="color" id="color" value={shadowColor} onChange={(e) => setShadowColor(e.target.value)} />
                </div>
                <div className="row">
                    <label htmlFor="box-color">Box Color </label>
                    <input type="color" id="box-color" value={boxColor} onChange={(e) => setBoxColor(e.target.value)} />
                </div>
                <div className="switch">
                    <label>
                        Inset
                    <input type="checkbox" onChange={(e) => setIsInset(!isInset)} />
                        <span className="lever"></span>
                    </label>
                </div>
            </div>
            <BoxPreview style={style} styleText={style.boxShadow} />
        </div>
    );
}

export default BoxShadow;