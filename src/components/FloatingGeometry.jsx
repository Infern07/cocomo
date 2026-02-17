import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function Torus({ position, color, scale = 1 }) {
  const mesh = useRef()
  useFrame((state) => {
    mesh.current.rotation.x = state.clock.elapsedTime * 0.3
    mesh.current.rotation.y = state.clock.elapsedTime * 0.5
    mesh.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.2
  })
  return (
    <mesh ref={mesh} position={position} scale={scale}>
      <torusGeometry args={[1, 0.3, 16, 48]} />
      <meshStandardMaterial color={color} wireframe emissive={color} emissiveIntensity={0.3} />
    </mesh>
  )
}

function Dodecahedron({ position, color }) {
  const mesh = useRef()
  useFrame((state) => {
    mesh.current.rotation.x = state.clock.elapsedTime * 0.2
    mesh.current.rotation.y = state.clock.elapsedTime * 0.4
    mesh.current.position.y = position[1] + Math.cos(state.clock.elapsedTime * 0.7) * 0.15
  })
  return (
    <mesh ref={mesh} position={position}>
      <dodecahedronGeometry args={[0.8, 0]} />
      <meshStandardMaterial color={color} wireframe emissive={color} emissiveIntensity={0.2} />
    </mesh>
  )
}

function Icosahedron({ position, color }) {
  const mesh = useRef()
  useFrame((state) => {
    mesh.current.rotation.x = state.clock.elapsedTime * 0.25
    mesh.current.rotation.y = state.clock.elapsedTime * 0.35
    mesh.current.position.z = position[2] + Math.sin(state.clock.elapsedTime * 0.5) * 0.1
  })
  return (
    <mesh ref={mesh} position={position}>
      <icosahedronGeometry args={[0.6, 1]} />
      <meshStandardMaterial color={color} wireframe emissive={color} emissiveIntensity={0.25} />
    </mesh>
  )
}

export default function FloatingGeometry() {
  return (
    <group>
      <Torus position={[-3, 1, -2]} color="#8b5cf6" scale={0.8} />
      <Torus position={[3.5, -0.5, -3]} color="#ec4899" scale={0.6} />
      <Dodecahedron position={[-2, -1.5, -1]} color="#6366f1" />
      <Dodecahedron position={[2, 1, -4]} color="#22d3ee" />
      <Icosahedron position={[0, 2, -5]} color="#a855f7" />
      <Icosahedron position={[-4, -0.5, -2]} color="#ec4899" />
    </group>
  )
}
