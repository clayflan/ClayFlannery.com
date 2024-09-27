import React, { useEffect } from 'react';
import { ThreeScene } from './Components/3DSceneSetUp';

function App23() {
    return React.createElement(
        'div',
        null,
        React.createElement('h1', null, 'React + Three.js Example'),
        React.createElement('canvas', { id: 'canvas', width: 640, height: 480 })
    );
}