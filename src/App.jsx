import { 
  ContactShadows, 
  Float, 
  PresentationControls, 
  Html,
  useGLTF } from "@react-three/drei";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Text } from "@react-three/drei";

function App() {
  const macbook = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf");
    const dj = useGLTF(
      "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/turntable/model.gltf");
      const apple = useGLTF(
        "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/apple-half/model.gltf");
      
  return (
  <div>
    <Canvas camera={{fov: 45, near: 0.1, far: 2000, position: [0, 1.5, 6]}}>
      <color args={["#012431"]} attach="background" />
      {/* <OrbitControls /> */}
    <ambientLight />
    <directionalLight intensity={1.4}/>
    {/* <mesh>
      <boxGeometry />
      <meshStandardMaterial />
    </mesh> */}
    <PresentationControls global
    config={{mass: 5, tension: 400}}
    snap={{mass: 4, tension: 300}}
    >
    <Float rotationIntensity={1.5}>
    <rectAreaLight 
      color={"#0021a7"} 
      intensity={50} 
      rotation={[0.1, Math.PI, 0] }
      width={2.0}
      height={1.65}
      position={[0, 0, -1]}
      />
    <primitive 
    object={macbook.scene} 
    position={[0, -1.5, 0]}>
      <Html 
      position={[0, 1.56, -1.4]} 
      distanceFactor={1.17} 
      rotation-x={-0.256}
      transform
      wrapperClass="htmlScreen"
      >
      <iframe src="https://scintillating-mandazi-30ccb2.netlify.app/">
      </iframe>
      </Html>
    </primitive>
    </Float>

    <Float rotationIntensity={1.5}>
    <rectAreaLight 
      color={"#0021a7"} 
      intensity={50} 
      rotation={[0.1, Math.PI, 0] }
      width={2.0}
      height={1.65}
      position={[0, 0, -1]}
      />
    <primitive 
    object={dj.scene} 
    position={[-2.4, -1.3, 0.2]}>
    </primitive>
    </Float>

    <Float rotationIntensity={1.5}>
    <rectAreaLight 
      color={"#0021a7"} 
      intensity={50} 
      rotation={[0.1, Math.PI, 0] }
      width={2.0}
      height={1.65}
      position={[0, 0, -1]}
      />
    <primitive 
    object={apple.scene} 
    position={[2.4, -1.3, 0.2]}
    scale={[3, 3, 3]}
    rotation-x={0.4}
    >
    </primitive>
    </Float>
    <Text font="/RobotoSlab-Bold.ttf" fontsize={0.6} position={[0, 1.7, 0.75]}>
  TREVA
</Text>
    </PresentationControls>
    <ContactShadows scale={7} blur={2.4} opacity={-2.0}/>
    </Canvas>
  </div>
  );
}

export default App;
