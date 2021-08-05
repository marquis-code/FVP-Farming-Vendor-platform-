import Head from 'next/head'
import Header from './Header'
import UserNav from './User-nav'
import UserHeading from './User-heading'


export default function Home( {children}) {
  return (
    <div className="flex flex-col w-full min-h-screen py-2 bg-white">
      <Head>
        <title> Farmz2u FVP</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="">

        <UserNav />
        <Header />

        <div className="m-left">
          <UserHeading title="Home" />

          <div className="w-full p-3 md:p-0 ">
          {children}
          </div>
        </div>

      </div>

    </div>
  )
}
