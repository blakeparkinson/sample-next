import styles from '../../styles/Home.module.css'

function Page({ data }) {
  return (
    <div className={styles.container}>
      <div>Trending crypto coins</div>
      {data.coins.map((coin)=>{
        return(
        <li key={coin.item.id}>
          <span>{coin.item.name}</span>
          <img src={coin.item.thumb}></img>
        </li>
        )
      })}
    </div>
  )
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://api.coingecko.com/api/v3/search/trending
`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}

export default Page