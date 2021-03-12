import styles from '../../styles/Home.module.css'

function Page({ data }) {
  return (
    <div className={styles.container}>
      <h1>Worst Supervillains</h1>
      {data.map((villain)=>{
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
}

// This gets called on every request
export async function getServerSideProps({ req }) {
  const protocol = req.headers['x-forwarded-proto'] || 'http'
  const baseUrl = req ? `${protocol}://${req.headers.host}` : ''
  // Fetch data from external API
  const res  = await fetch(baseUrl + `/api/villains`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}

export default Page