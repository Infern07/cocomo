import { useRef, useEffect } from 'react'
import { useThree, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function MouseFollower() {
  const mesh = useRef()
  const { mouse } = useThree()
  const target = useRef(new THREE.Vector3())

  useFrame((state) => {
    if (!mesh.current) return
    target.current.set(mouse.x * 2, mouse.y * 2, 0)
    mesh.current.position.lerp(target.current, 0.05)
  })

  return (
    <mesh ref={mesh} position={[0, 0, 2]}>
      <sphereGeometry args={[0.15, 16, 16]} />
      <meshBasicMaterial
        color="#8b5cf6"
        transparent
        opacity={0.6}
      />
    </mesh>
  )
}
