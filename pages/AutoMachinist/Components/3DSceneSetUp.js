import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';

const ThreeScene = ({ file }) => {
  const mountRef = useRef(null);
  let geometry;
  let material;

  useEffect(() => {
    if (!file) return;

    if (!file) {
      // Create a default cube geometry and material
      geometry = new THREE.BoxGeometry(1, 1, 1);
      material = new THREE.MeshNormalMaterial();
    } else {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    const loader = new STLLoader();
    loader.load(URL.createObjectURL(file), (geometry) => {
      const material = new THREE.MeshNormalMaterial();
      geometry = null; // Reset the default geometry
      loader.load(URL.createObjectURL(file), (loadedGeometry) => {
        geometry = loadedGeometry;
        material = new THREE.MeshNormalMaterial();
      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);

      camera.position.z = 5;

      const animate = () => {
        requestAnimationFrame(animate);
          if (geometry) { // Only update the rotation if the geometry is available
        mesh.rotation.x += 0.01;
        mesh.rotation.y += 0.01;
        renderer.render(scene, camera);
          }
      };

      animate();
    });

    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
    }

    // Use the default material if no file is uploaded
    if (!geometry) {
      const mesh = new THREE.Mesh(geometry || geometry === undefined ? null : geometry, material);
      scene.add(mesh);
    }
  }, [file]);

  return <div ref={mountRef} />;
};

export default ThreeScene;