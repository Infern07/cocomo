import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

// Phone mockup - thin device frame
function PhoneMockup({ position, color }) {
  const mesh = useRef()
  useFrame((state) => {
    mesh.current.rotation.y = state.clock.elapsedTime * 0.15
    mesh.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.1
  })
  return (
    <group ref={mesh} position={position}>
      <mesh>
        <boxGeometry args={[0.4, 0.7, 0.05]} />
        <meshStandardMaterial color={color} wireframe emissive={color} emissiveIntensity={0.2} />
      </mesh>
      <mesh position={[0, 0, 0.026]}>
        <planeGeometry args={[0.35, 0.6]} />
        <meshBasicMaterial color="#1a0a2e" transparent opacity={0.6} />
      </mesh>
    </group>
  )
}

// Laptop/screen mockup
function LaptopMockup({ position, color }) {
  const mesh = useRef()
  useFrame((state) => {
    mesh.current.rotation.y = state.clock.elapsedTime * 0.12
    mesh.current.position.y = position[1] + Math.cos(state.clock.elapsedTime * 0.4) * 0.08
  })
  return (
    <group ref={mesh} position={position}>
      <mesh position={[0, 0.25, 0]}>
        <boxGeometry args={[0.8, 0.5, 0.03]} />
        <meshStandardMaterial color={color} wireframe emissive={color} emissiveIntensity={0.25} />
      </mesh>
      <mesh position={[0, -0.15, 0.2]} rotation={[0.3, 0, 0]}>
        <boxGeometry args={[0.85, 0.08, 0.4]} />
        <meshStandardMaterial color={color} wireframe emissive={color} emissiveIntensity={0.15} />
      </mesh>
    </group>
  )
}

// Megaphone - marketing/outreach symbol
function Megaphone({ position, color }) {
  const mesh = useRef()
  useFrame((state) => {
    mesh.current.rotation.z = state.clock.elapsedTime * 0.2
    mesh.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.6) * 0.12
  })
  return (
    <mesh ref={mesh} position={position} rotation={[0, 0, Math.PI / 4]}>
      <coneGeometry args={[0.3, 0.6, 8]} />
      <meshStandardMaterial color={color} wireframe emissive={color} emissiveIntensity={0.3} />
    </mesh>
  )
}

// Bar chart - growth/analytics
function BarChart({ position, color }) {
  const group = useRef()
  const heights = [0.3, 0.5, 0.7, 0.4, 0.9, 0.6]
  useFrame((state) => {
    group.current.rotation.y = state.clock.elapsedTime * 0.1
    group.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.3) * 0.05
  })
  return (
    <group ref={group} position={position}>
      {heights.map((h, i) => (
        <mesh key={i} position={[(i - 2.5) * 0.15, h / 2, 0]}>
          <boxGeometry args={[0.1, h, 0.1]} />
          <meshStandardMaterial color={color} wireframe emissive={color} emissiveIntensity={0.25} />
        </mesh>
      ))}
    </group>
  )
}

// Billboard/ad panel
function Billboard({ position, color }) {
  const mesh = useRef()
  useFrame((state) => {
    mesh.current.rotation.y = state.clock.elapsedTime * 0.08
    mesh.current.position.y = position[1] + Math.cos(state.clock.elapsedTime * 0.4) * 0.1
  })
  return (
    <group ref={mesh} position={position}>
      <mesh>
        <boxGeometry args={[0.6, 0.9, 0.05]} />
        <meshStandardMaterial color={color} wireframe emissive={color} emissiveIntensity={0.2} />
      </mesh>
    </group>
  )
}

// Color palette - design tool
function ColorPalette({ position }) {
  const group = useRef()
  const colors = ['#8b5cf6', '#ec4899', '#22d3ee', '#6366f1', '#a855f7']
  useFrame((state) => {
    group.current.rotation.x = state.clock.elapsedTime * 0.15
    group.current.rotation.y = state.clock.elapsedTime * 0.2
    group.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.08
  })
  return (
    <group ref={group} position={position}>
      {colors.map((c, i) => (
        <mesh key={i} position={[Math.cos(i * 1.2) * 0.2, Math.sin(i * 1.2) * 0.2, 0]}>
          <boxGeometry args={[0.15, 0.15, 0.15]} />
          <meshStandardMaterial color={c} wireframe emissive={c} emissiveIntensity={0.3} />
        </mesh>
      ))}
    </group>
  )
}

// Social media / share icon - abstract (rings for visibility from any angle)
function ShareIcon({ position, color }) {
  const mesh = useRef()
  useFrame((state) => {
    mesh.current.rotation.y = state.clock.elapsedTime * 0.25
    mesh.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.7) * 0.1
  })
  return (
    <group ref={mesh} position={position}>
      <mesh position={[0, 0.1, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.1, 0.15, 16]} />
        <meshStandardMaterial color={color} wireframe emissive={color} emissiveIntensity={0.3} side={THREE.DoubleSide} />
      </mesh>
      <mesh position={[-0.15, -0.1, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.06, 0.1, 16]} />
        <meshStandardMaterial color={color} wireframe emissive={color} emissiveIntensity={0.25} side={THREE.DoubleSide} />
      </mesh>
      <mesh position={[0.15, -0.1, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.06, 0.1, 16]} />
        <meshStandardMaterial color={color} wireframe emissive={color} emissiveIntensity={0.25} side={THREE.DoubleSide} />
      </mesh>
    </group>
  )
}

// Pencil/pen - design tool
function Pencil({ position, color }) {
  const mesh = useRef()
  useFrame((state) => {
    mesh.current.rotation.z = state.clock.elapsedTime * 0.18
    mesh.current.position.y = position[1] + Math.cos(state.clock.elapsedTime * 0.5) * 0.1
  })
  return (
    <mesh ref={mesh} position={position} rotation={[0, 0, Math.PI / 6]}>
      <coneGeometry args={[0.08, 0.5, 6]} />
      <meshStandardMaterial color={color} wireframe emissive={color} emissiveIntensity={0.25} />
    </mesh>
  )
}

export default function MarketingDesign3D() {
  return (
    <group>
      <PhoneMockup position={[-2.5, 0.5, -2]} color="#8b5cf6" />
      <LaptopMockup position={[2.8, -0.3, -3]} color="#6366f1" />
      <Megaphone position={[-3, -1.2, -1.5]} color="#ec4899" />
      <BarChart position={[2, 1.2, -2]} color="#22d3ee" />
      <Billboard position={[0, 1.5, -4]} color="#a855f7" />
      <ColorPalette position={[-1.5, -1.8, -2]} />
      <ShareIcon position={[3.2, 0.8, -1]} color="#ec4899" />
      <Pencil position={[1.5, -1.5, -3]} color="#8b5cf6" />
    </group>
  )
}
