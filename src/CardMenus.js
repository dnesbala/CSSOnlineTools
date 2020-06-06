import React from 'react';
import Card from './Card';

const tools = [
    {
        name: 'Text Shadow Generator',
        bgcolor: '#FA4C4C',
        path: '/text-shadow-gen'
    },
    {
        name: 'Box Shadow Generator',
        bgcolor: '#2A3940',
        path: '/box-shadow-gen'
    },
    {
        name: 'CSS Transforms Generator',
        bgcolor: '#2C50EF',
        path: '/css-transform-gen'
    },
    {
        name: 'New Features Coming Soon...',
        bgcolor: '#00B074',
        path: '/'
    }
];

const CardMenus = () => {
    return (
        <div className="App-cards">
            {tools.map(tool => <Card key={tool.name} title={tool.name} bgColor={tool.bgcolor} path={tool.path} />)}
        </div>
    );
}

export default CardMenus;