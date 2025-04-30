import Link from 'next/link'
import styles from './page.module.css'

export default async function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>StrawBoard</h1>
      <Link className={styles.gotoUsers} href="/users">
        jsonplaceholder Users 페이지 이동
      </Link>
    </div>
  )
}
