import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';

const ThreeScene = ({ file }) => {
  const mountRef = useRef(null);  // Create a ref to attach the Three.js canvas

  useEffect(() => {
    // Initialize Three.js scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    // Append the renderer's DOM element (canvas) to the React ref
    mountRef.current.appendChild(renderer.domElement);

    let geometry, material, mesh;

    if (!file) {
      // Default cube geometry and material if no file is uploaded
      geometry = new THREE.BoxGeometry(50, 50, 50);
      material = new THREE.MeshBasicMaterial({ color: 0xFF6347 });
      mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);
    } else {
      // Load the STL file if available
      const loader = new STLLoader();
      loader.load(URL.createObjectURL(file), (loadedGeometry) => {
        geometry = loadedGeometry;
        material = new THREE.MeshNormalMaterial();  // Normal material for the STL file
        mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);
      });
    }

    // Set the camera position
    camera.position.z = 5;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      if (mesh) {
        mesh.rotation.x += 0.01;  // Rotate the mesh
        mesh.rotation.y += 0.01;
      }

      renderer.render(scene, camera);  // Render the scene
    };

    animate();  // Start animation

    // Cleanup the renderer on unmount
    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, [file]);  // Dependency on file, re-run if file changes

  return <div ref={mountRef} />;  // Attach the Three.js canvas to this div
};

export default ThreeScene;
