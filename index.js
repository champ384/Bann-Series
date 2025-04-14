
import Head from 'next/head'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <Head>
        <title>รวย56 | เว็บสล็อต</title>
      </Head>
      <img src="/logo.png" className="w-40 mb-4" />
      <h1 className="text-4xl font-bold text-yellow-400">ยินดีต้อนรับสู่ รวย56</h1>
      <p className="mt-2">เว็บสล็อตครบทุกค่าย PG, JILI, Joker และอีกมากมาย</p>
      <a href="/register" className="mt-4 bg-yellow-500 px-6 py-2 rounded-xl text-black font-semibold">สมัครสมาชิก</a>
    </div>
  )
}
