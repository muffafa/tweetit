import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import TweetItButton from '@/components/tweetIt'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Taland</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logoS.jpeg" />
      </Head>
      <div className=" w-full min-w-[200px] h-screen bgtaland">
        <div className=' text-white font-semibold text-center flex flex-col '>
          <div className=' pt-[5rem] flex flex-col  mx-[5rem] max-sm:mx-[1rem]'>
          <img
              src='/talandbanner.jpeg'
              className=' max-w-[600px] mx-auto w-full shadow-lg shadow-black rounded-md'
            />
            <div className=' flex text-2xl justify-center pt-10'>
            Taland olarak AIBC World Eurasia&apos;dayız!
            </div>
            <div className=' flex text-sm font-light justify-center pt-3 flex-row flex-wrap'>
            GelecektekiSen Teknoloji Laboratuarı’ndan çıkan Web 3.0 girişimimiz Taland, sektörünün en prestijli Blokchain Start Up Summit’lerinden AIBC World Eurasia sahnesinde pitching yapacak 6 girişimden biri olarak seçildi. 🎉
            </div>
            <div className=' flex text-sm font-bold font-serif justify-center pt-5  flex-row flex-wrap text-red-700'>Beğenilerinize ve tweetlerinize ihtiyacımız var!</div>
            <div className=' flex justify-center mt-8 gap-2 flex-row max-sm:flex-col'>
              <TweetItButton/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
