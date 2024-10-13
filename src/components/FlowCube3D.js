import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';
import * as THREE from 'three';

function Cube() {
  const innerColor = "#e1f5fe";
  const outerColor = "#4fc3f7";
  const edgeColor = "#0277bd";
  const innerOffset = 0.01;

  return (
    <group>
      {/* Inner faces */}
      {[
        [0, 0, -0.5 + innerOffset, 0, 0, 0], // Back
        [0, 0, 0.5 - innerOffset, 0, Math.PI, 0], // Front
        [0.5 - innerOffset, 0, 0, 0, -Math.PI / 2, 0], // Right
        [-0.5 + innerOffset, 0, 0, 0, Math.PI / 2, 0], // Left
        [0, -0.5 + innerOffset, 0, Math.PI / 2, 0, 0], // Bottom
      ].map(([x, y, z, rotX, rotY, rotZ], index) => (
        <mesh key={index} position={[x, y, z]} rotation={[rotX, rotY, rotZ]}>
          <planeGeometry args={[1, 1]} />
          <meshStandardMaterial color={innerColor} side={THREE.FrontSide} />
        </mesh>
      ))}

      {/* Bottom face */}
      <mesh position={[0, -0.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[1, 1]} />
        <meshStandardMaterial color={outerColor} side={THREE.DoubleSide} />
      </mesh>
      
      {/* Four walls */}
      {[
        [0, 0, 0.5, 0, 0, 0, '1'],
        [0.5, 0, 0, 0, Math.PI / 2, 0, '2'],
        [0, 0, -0.5, 0, Math.PI, 0, '3'],
        [-0.5, 0, 0, 0, -Math.PI / 2, 0, '4'],
      ].map(([x, y, z, rotX, rotY, rotZ, number], index) => (
        <group key={index} position={[x, y, z]} rotation={[rotX, rotY, rotZ]}>
          <mesh>
            <planeGeometry args={[1, 1]} />
            <meshStandardMaterial color={outerColor} side={THREE.DoubleSide} />
          </mesh>
          <Text
            position={[0, 0, 0.01]}
            fontSize={0.2}
            color="black"
            anchorX="center"
            anchorY="middle"
          >
            {number}
          </Text>
        </group>
      ))}

      {/* Edge lines to emphasize the cube's shape */}
      <lineSegments>
        <edgesGeometry args={[new THREE.BoxGeometry(1, 1, 1)]} />
        <lineBasicMaterial color={edgeColor} />
      </lineSegments>
    </group>
  );
}

function FlowCube3D() {
  return (
    <div style={{ width: '100%', height: '300px' }}>
      <Canvas camera={{ position: [2, 2, 2], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Cube />
        <OrbitControls 
          minDistance={3} 
          maxDistance={3} 
          enableZoom={false}
          target={[0, 0, 0]}
        />
      </Canvas>
    </div>
  );
}

export default FlowCube3D;
