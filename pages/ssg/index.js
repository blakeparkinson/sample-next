import React, { useEffect, useState } from 'react';
import styles from '../../styles/Home.module.css'

function Page() {
  const [villains, setVillains] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    (async function() {
      try {
        const res = await fetch(`https://sample-next-nine.vercel.app/api/villains`)
        const data = await res.json()
        setVillains(data)
      } catch (e){
        setError(e)
      }
    })()
  }, [])  
  if (error){
    return (
      <div>Something went wrong with data fetching</div>
    )
  } else{
    if (villains){
    return (
      <div className={styles.container}>
        <h1>Worst Supervillains</h1>
        {villains.map((villain)=>{
          return(
          <ul className={styles.villainList} key={villain.name}>
            <div className={styles.villainContainer}>
              <span className={styles.title}>{villain.name}</span>
              <img className={styles.supervillainImage}src={`../images/${villain.image}`}></img>
            </div>
            <div className={styles.description}><strong>Superpower: </strong>{villain.superpower}</div>
          </ul>
          )
        })}
      </div>
    )
      } else return null
  }
}


export default Page