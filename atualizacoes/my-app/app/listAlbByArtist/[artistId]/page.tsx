"use client";
import { albumComponents } from '@/context/cadastroContext';
import { useParams, useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';


export default function UpdateAlbum() {
    const idArtist = useParams()
    const {register, handleSubmit} = useForm<albumComponents>();
    const router = useRouter();
    const [products, setProducts] = useState([]);
    let nomeArtista

    async function fetchData() {
        try {
            const response = await fetch(`http://127.0.0.1:3000/artist/${idArtist.artistId}/musicAlbum`,);
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.error('Erro ao buscar dados do servidor:', error);
        }
        }
    
    useEffect(() => {
    fetchData();
    }, []);

    return (
        <main className=" h-screen bg-violet-200"> 
        <div className='p-8'>
          <div className=" mb-8 px-4">
            <div className='flex justify-center'>
            <p className="text-sm font-semibold pl-7">{products.map((product) => product.artist)}</p>
            </div>
          </div>
          <div className="grid bg-violet-200 sm:grid-cols-2 lg:grid-cols-4 gap-x-14 gap-y-16">
            {products.map((product) => (
              <div 
                key={product._id} 
                className="border  bg-zinc-100 p-8 content-center rounded shadow hover:shadow-lg hover:scale-105 transition-transform duration-300 border-2 rounded-xl"
              >
                <div className='flex justify-center'>
                  <img 
                    src={product.coverAlbum}
                    width={200}
                    height={200}
                    className="block pb-3 rounded-lg place-self-center " 
                  />
                </div>
                <p className="text-lg font-semibold pl-7 pb-2">{product.name}</p>
                <img 
                  src="https://i.pinimg.com/736x/c4/aa/8a/c4aa8a1ce88cbd22cf20ae29ff9e1999.jpg"
                  width={200}
                  height={200}
                  className="w-full h-36  object-cover rounded" 
                />
                
              </div>
            ))}
          </div>
        </div>
    </main>
    );
}