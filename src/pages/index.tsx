import styles from '@/styles/Home.module.css'
import Link from 'next/link'


export default function Home() {
  return (
    <>
      <div data-testid="hello">Hello World </div>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
