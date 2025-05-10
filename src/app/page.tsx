import Link from 'next/link'
import styles from './page.module.css'

export default async function Home() {
  return (
    <div className="bg-white flex flex-col items-center justify-center dark:bg-black w-screen h-screen">
      <h1 className={styles.title}>TODO 앱</h1>
      <Link className="underline text-orange-500 dark:text-white" href="/users">
        jsonplaceholder Users 페이지 이동
      </Link>
    </div>
  )
}
