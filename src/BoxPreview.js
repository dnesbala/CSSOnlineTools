import React from 'react';
import './styles/BoxPreview.css';

const BoxPreview = ({ style, styleText }) => {
    return (
        <div className="BoxPreview" style={style}>
            <p>{styleText}</p>
        </div>
    );
}

export default BoxPreview;