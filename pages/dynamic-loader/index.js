import React, { useState } from 'react'
import styles from '../../styles/Home.module.css'
import dynamic from "next/dynamic";

const Giraffe = dynamic(() => import("../../components/giraffe.js"), {
  loading: () => <p>Loading...</p>
});


function Dynamic() {
  const [showGiraffe, setGiraffe] = useState(false)

  function toggleGiraffe(){
    setGiraffe(true)
  }

  return (
    <div className={styles.container}>
      {!showGiraffe ? (
          <button onClick={() => toggleGiraffe()}>CLICK ME</button>
        ) : (
          <Giraffe />
        )}
    </div>
  )
}


export default Dynamic