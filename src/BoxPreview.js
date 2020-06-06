import React from 'react';
import './BoxPreview.css';

const BoxPreview = ({ style, styleText }) => {
    return (
        <div className="BoxPreview" style={style}>
            <p>{styleText}</p>
        </div>
    );
}

export default BoxPreview;