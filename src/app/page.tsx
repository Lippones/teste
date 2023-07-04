import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="">
     <h1>teste de apache</h1>
     <Link href={
      {
        pathname:'/teste'
      }
     }>Ir para proxima</Link>
    </main>
  )
}
