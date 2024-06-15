"use client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { albumComponents } from '@/context/cadastroContext';
import { useForm } from 'react-hook-form';

export default function CreatingTryOut() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const router = useRouter();
  const {register, handleSubmit} = useForm<albumComponents>();

  async function fetchData({name, artist, year, coverAlbum} : albumComponents) {
        try {
            const response = await fetch('http://127.0.0.1:3000/musicAlbum', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({name, artist, year, coverAlbum}),
              referrerPolicy: 'no-referrer',
              cache: 'no-store'
            });
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const data = await response.json();
            alert("Album " + name + " sucessufuly created")
            router.push('/listagem')
          } catch (error) {
            console.error('Erro ao buscar dados do servidor:', error);
            alert("Try another one, this album is alredy on our list")
          }
        }
    
    
  return (
    <div className="bg-white h-screen flex justify-center items-center">
        <form className="flex flex-col  text-white rounded-3xl content-center mx-64" onSubmit={handleSubmit(fetchData)}>
            <label htmlFor="name" className="text-indigo-950">Nome do Album: </label>
            <input 
                {...register('name')}
                type="text" 
                name='name' 
                id='name' 
                placeholder="Fearless" 
                className="border text-indigo-950 border-b-indigo-500 p-2"
            />
            <div className="pb-4"></div>
            <label htmlFor="artist" className="text-indigo-950">Artista: </label>
            <input 
                {...register('artist')}
                type="text" 
                name='artist' 
                id='artist' 
                placeholder="Taylor Swift" 
                className="border text-indigo-950 border-b-indigo-500 p-2"
            />
            <label htmlFor="Year" className="text-indigo-950">Ano de Lançamento: </label>
            <input 
                {...register('year')}
                type="number" 
                name='year' 
                id='year' 
                placeholder="2008" 
                className="border text-indigo-950 border-b-indigo-500 p-2"
            />
            <label htmlFor="UrlCapa" className="text-indigo-950">Url capa do album: </label>
            <input 
                {...register('coverAlbum')}
                type="text" 
                name='coverAlbum' 
                id='coverAlbum' 
                placeholder="url.png" 
                className="border text-indigo-950 border-b-indigo-500 p-2"
            />
            <div className="pb-8"></div>
            <input type="submit" className="cursor-pointer border border-indigo-500 bg-white hover:bg-violet-200 text-indigo-950 px-2 py-1 rounded-3xl mx-80 "  value="Acessar" />
            <button className="cursor-pointer text-indigo-950 py-4 rounded-3xl mx-80 " type="button" onClick={() => router.push('/listagem')}> Voltar para listagem de albuns</button>
        </form>
    </div>
);
}