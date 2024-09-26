function findLargestFlatFace(geometry) {
    const faces = geometry.faces;
    let largestFace = null;
    let largestArea = 0;
  
    faces.forEach(face => {
      const a = geometry.vertices[face.a];
      const b = geometry.vertices[face.b];
      const c = geometry.vertices[face.c];
  
      const area = calculateTriangleArea(a, b, c);
  
      if (area > largestArea) {
        largestArea = area;
        largestFace = face;
      }
    });
  
    return largestFace;
  }
  
  function calculateTriangleArea(a, b, c) {
    const ab = b.clone().sub(a);
    const ac = c.clone().sub(a);
    const cross = new THREE.Vector3().crossVectors(ab, ac);
    return cross.length() / 2;
  }