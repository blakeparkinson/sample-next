import React, { useState } from 'react'
import styles from '../../styles/Home.module.css'
import dynamic from "next/dynamic";

const Animation = dynamic(() => import("../../components/animation.js"), {
  loading: () => <p>Loading...</p>
});

const Giraffe = dynamic(() => import("../../components/giraffe.js"), {
  loading: () => <p>Loading...</p>
});



function Dynamic() {
  const [showGiraffe, setGiraffe] = useState(false)
  const [showAnimation, setAnimation] = useState(false)


  function toggleGiraffe(){
    setAnimation(false)
    setGiraffe(true)
  }

  function toggleAnimation(){
    setGiraffe(false)
    setAnimation(true)
  }

  return (
    <div className={styles.container}>
      {!showGiraffe ? (
          <button onClick={() => toggleGiraffe()}>CLICK FOR GIRAFFE</button>
        ) : (
          <Giraffe />
        )}
        {!showAnimation ? (
          <button onClick={() => toggleAnimation()}>CLICK FOR SOLDIER</button>
        ) : (
          <Animation />
        )}
    </div>
  )
}


export default Dynamic