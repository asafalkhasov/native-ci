import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nativeci.IO</title>
        <meta name="description" content="NativeCI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nativeci.io">NativeCI!</a>
        </h1>

        <div className={styles.grid}>
          <a href="https://docs.nativeci.io/" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about NativeCI features</p>
          </a>

          <a href="https://nativeci.io/about" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about NativeCI in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://nativeci.io/platform"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your apps to the public.
            </p>
          </a>
        </div>
      </main>
    </div>
  )
}
