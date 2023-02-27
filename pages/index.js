import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          This is my test app.
          <div>
            <a href="/server-side">SSR example</a> |{" "}
            <a href="/ssg">SSG example</a>
          </div>
          <div>
            <a href="/dynamic-loader">Dynamic loader example</a>
          </div>
        </h1>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
