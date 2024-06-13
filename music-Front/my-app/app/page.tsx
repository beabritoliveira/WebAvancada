"use client";
import  Image from 'next/image';
import logo from './logo.ico'
import { useRouter } from 'next/navigation'

const Home = async ({}) => {

  const router = useRouter()

  return (
    <main className="h-screen bg-white">
      <div className='text-right text-lg p-6 bg-indigo-950 text-white font-semibold'>          
            <button type="button" onClick={() => router.push('/login') } > L O G I N </button>
      </div>
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
          <h3 className="text-lg sm:text-lg font-black  tracking-wide text-center pt-6 pb-10 sm:pb-24 text-indigo-950">Space dedicated to fans and everybody to add their favorite, album and artist (and in some cases they may add the genre)</h3>
          </div>
        <div className=" content-center p-14 text-white font-medium bg-indigo-950 h-screen ">        
          <h1 className="sm:text-4xl pl-6 pb-10 text-center">Welcome</h1>
          <p className=" first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900 first-letter:mr-3 first-letter:float-left first-letter:text-white pb-8">
            Nulla dolor velit adipisicing duis excepteur esse in duis nostrud occaecat mollit incididunt deserunt sunt. Ut ut sunt laborum ex occaecat eu tempor labore enim adipisicing minim ad. Est in quis eu dolore occaecat excepteur fugiat dolore nisi aliqua fugiat enim ut cillum. Labore enim duis nostrud eu. Est ut eiusmod consequat irure quis deserunt ex. Enim laboris dolor magna pariatur. Dolor et ad sint voluptate sunt elit mollit officia ad enim sit consectetur enim.</p>      
          <div className='cursor-pointer mx-48 font-semibold sm:text-lg text-center border-2 border-white rounded-3xl hover:bg-white  bg-violet-200 text-indigo-950'>
            <button type="button" onClick={() => router.push('/listagem')}> Listagem de Albuns </button>
          </div>
        </div>
      </div>
    </main>
  );
};
//pl-6 line-clamp-6 sm:text-lg pb-20
export default Home;