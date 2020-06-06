import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = ({ title, bgColor, path }) => {
    return (
        <Link to={path}>
            <div className="Card" style={{ backgroundColor: bgColor }}>
                <p>{title}</p>
            </div>
        </Link>
    );
}

export default Card;