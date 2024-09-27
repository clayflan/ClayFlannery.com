import React, { useEffect } from 'react';
import { ThreeScene } from './Components/3DSceneSetUp';

//function App23() {
  //  return React.createElement(
   //     'div',
   //     null,
   //     React.createElement('h1', null, 'React + Three.js Example'),
   //     React.createElement('canvas', { id: 'canvas', width: 640, height: 480 })
  //  );
//}


function App23() {
    useEffect(() => {
      const canvas = document.getElementById('canvas');
  
      if (canvas) {
        ThreeScene(canvas); // Call the function to set up the scene
      }
  
      return () => {
        // Any necessary cleanup can go here if needed
      };
    }, []);
  
    return (
      <div>
        <h1>React + Three.js Example</h1>
        <canvas id="canvas" width="640" height="480" />
      </div>
    );
  }
  
  export default App23;