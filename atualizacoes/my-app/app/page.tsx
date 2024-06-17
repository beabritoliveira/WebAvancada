"use client";
import  Image from 'next/image';
import logo from './logo.ico'
import { useRouter } from 'next/navigation'

const Home = async ({}) => {

  const router = useRouter()

  return (
    <main className="h-screen bg-white">
      <div className="h-screen grid grid-cols-2 gap-6 place-items-stretch flex justify-normal items-center">
        <div className=' pl-10 '>
          <div className="grid justify-items-center pt-10 ">
            <div>
              <Image 
                    src={logo}
                    width={200}
                    height={200}
                    className='block pb-2'
                    alt='Screenshots of the dashboard project showing mobile version'
              /> 
            </div>
          </div>
          <h3 className="text-lg sm:text-lg font-black  tracking-wide text-center pt-6 pb-8 sm:pb-24 text-indigo-950">Space dedicated to fans and everybody to add their favorite, album and artist (and in some cases they may add the genre)</h3>
          </div>
        <div className=" content-center p-14 text-white font-medium bg-indigo-950 h-screen ">        
          <h1 className="sm:text-4xl pl-6 pb-10 text-center">Welcome</h1>
          <p className="leading-6 text-lg first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900 first-letter:mr-3 first-letter:float-left first-letter:text-white pb-8">
          Music is an important and universal form of art. An important part of music discovery is album exploration. As they are collections of songs often bundled together by the same artist and released around the same time. Many libraries and web-based projects have been developed to manage the music albums of their respective targets.
          With similar intent we are finally, developing tools and algorithms to manage the contributions and improve the data, which may also help the community. With that in mind, in this page, we are to explore and, to some extent, contribute to the music database domain.           </p>      
          <div className='flex justify-center'>
            <button type="button" onClick={() => router.push('/login') } className=' rounded-2xl tracking-wide text-lg bg-white hover:bg-violet-400 font-bold hover:text-white text-indigo-950 py-3 px-5' > Sign In </button>
          </div>
        </div>
      </div>
    </main>
  );
};
//pl-6 line-clamp-6 sm:text-lg pb-20
export default Home;