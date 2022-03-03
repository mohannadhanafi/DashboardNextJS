import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Sidebar from './components/sidebar'

export default function Home() {
  return (
    <div>
      <Sidebar />
    </div>
  )
}
