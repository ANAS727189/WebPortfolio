import React, {useRef, useEffect} from 'react'
import { useGLTF } from '@react-three/drei'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'


const Target = (props) => {
    const {scene} = useGLTF("https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/low-poly-spaceship/model.gltf")
    const targetRef = useRef()
  
    useEffect(() => {
        if (targetRef.current) {
          targetRef.current.position.set(-10, -9, -2) 
        }
      }, [])


    useGSAP(() => {
        gsap.to(targetRef.current.position, {
        //   y: targetRef.current.position.y + 15,
        //   z: targetRef.current.position.z + 20,
        //   y: "+=8",
        //   z: "+=8",
          // x: "+=6",
          y: "+=5",
          duration: 2.5,
          repeat: -1,
          yoyo: true,
        });
      });
    
      return (
        <mesh {...props} ref={targetRef} rotation={[-20, Math.PI / 3, -15]} scale={1}>
          <primitive object={scene} />
        </mesh>
      );
    };
    
    export default Target;