import React, { useState } from 'react';
import InputRange from './InputRange';
import BoxPreview from './BoxPreview';
import './CSSTransform.css';

const CSSTransform = () => {
    const [translateX, setTranslateX] = useState(0);
    const [translateY, setTranslateY] = useState(0);
    const [rotate, setRotate] = useState(0);
    const [scaleX, setScaleX] = useState(1);
    const [scaleY, setScaleY] = useState(1);
    const [skewX, setSkewX] = useState(0);
    const [skewY, setSkewY] = useState(0);
    const [boxColor, setBoxColor] = useState('crimson');

    const style = {
        transform: `translate(${translateX}px,${translateY}px) rotate(${rotate}deg) scale(${scaleX},${scaleY}) skew(${skewX}deg,${skewY}deg)`,
        backgroundColor: boxColor
    }

    return (
        <div className="CSSTransform">
            <div className="CSSTransform-controls">
                <h3>CSS Transforms Generator</h3>
                <InputRange label="Translate X" min={-100} max={100} value={translateX} setValue={setTranslateX} />
                <InputRange label="Translate Y" min={-100} max={100} value={translateY} setValue={setTranslateY}
                />
                <InputRange label="Rotate" min={-360} max={360} value={rotate} isDegree setValue={setRotate} />
                <InputRange label="Scale X" min={1} max={5} value={scaleX} setValue={setScaleX} />
                <InputRange label="Scale Y" min={1} max={5} value={scaleY} setValue={setScaleY} />
                <InputRange label="Skew X" min={-100} max={200} value={skewX} isDegree setValue={setSkewX} />
                <InputRange label="Skew Y" min={-100} max={200} value={skewY} isDegree setValue={setSkewY} />
                <div className="row">
                    <label htmlFor="box-color">Box Color </label>
                    <input type="color" id="box-color" value={boxColor} onChange={(e) => setBoxColor(e.target.value)} />
                </div>
            </div>
            <BoxPreview style={style} styleText={style.transform} />
        </div>
    );
}

export default CSSTransform;