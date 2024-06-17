"use client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Page() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const router = useRouter();

  async function fetchData() {
    try {
      const response = await fetch('http://127.0.0.1:3000/artist');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Erro ao buscar dados do servidor:', error);
      setError(error.message);
    }
  }

  

  useEffect(() => {
    fetchData();
  }, []);

  const RedirectPage = (id : string) => {
    router.push(`/listAlbByArtists/${id}`)
   };

  return (
    <main className=" h-screen bg-violet-200">
      {error ? (
        <p className="text-red-500">Erro ao buscar dados do servidor: {error}</p>
      ) : (
        <div className='p-8'>
          <div className=" mb-8 px-4">
            <div className='flex justify-center'>
              <h1 className="text-3xl font-bold text-center text-indigo-950 tracking-wide ">Artists from our selection</h1>
            </div>
            <div>
                <p className="text-lg sm:text-lg font-medium tracking-wide text-center pt-6 text-indigo-950">Clique on a artist to go to all the albuns we have from each of them</p>
            </div>
            <div className='flex justify-end '>
            <button onClick={() => router.back()} className='cursor-pointer hover:bg-indigo-950 hover:scale-105 hover:shadow-lg text-white font-medium bg-indigo-500 rounded-full p-3'>Voltar a listagem de Abuns</button>
            </div>
          </div>
          <div className="grid bg-violet-200 sm:grid-cols-2 lg:grid-cols-5 gap-x-14 gap-y-16">
            {products.map((product) => (
              <div 
                onClick={() => {RedirectPage(product._id)}}
                key={product._id} 
                className="border hover:border-dashed hover:border-violet-950 bg-zinc-100 p-8 content-center rounded shadow hover:shadow-lg hover:scale-105 transition-transform duration-300 border-2 rounded-xl"
              >
                <p className="text-lg font-semibold text-indigo-950  text-center">{product.name}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </main>
  );
}